/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    FlatList,
    View,
    Animated,
} from 'react-native'

import Text from './Text'
import Button from './Button'
import Icon from './Icon'
import Tab from './Tab'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

const xOffset = new Animated.Value(0);

const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: xOffset } } }],
    { useNativeDriver: true }
)

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class TabControl extends WhiteTownComponent {

    constructor(props) {
        super(props);
        this.state = {
            fakeItems: [],
            tabs: [],
            headers: [],

            width: 0,
            height: 0,
            index: 0,
        }

    }

    async componentWillMount() {
        this.createTabs(this.props.children)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.children !== this.props.children) {
            this.createTabs(newProps.children)
        }
    }

    getWrappedInstance() {
        return this
    }

    createTabs( children ) {
        if (!children || !children.length) return

        let fakeItems = []
        let tabs = []
        let headers = []

        let index = 0
        React.Children.map(children, (child, i) => {

            if (!child || !child.type) return null

            const type = child.type.WrappedComponent||child.type
//            const displayName = child.type.displayName

                if (type === Tab) {
    //            if (displayName === 'Tab') {

                fakeItems.push(index)
                tabs.push(child)

                if (child.props.header) {
                    headers.push({ header: child.props.header })
                }
                else if (child.props.title || child.props.icon || child.props.iconName) {
                    headers.push({ title: child.props.title, icon: child.props.icon, iconName: child.props.iconName })
                } else {
                    headers.push({ title: String(index) })
                }

                index++
            }

        })

        this.setState({
            fakeItems: fakeItems,
            tabs: tabs,
            headers: headers,
        })

    }

    renderItem(item) {

        if (item.index >= this.state.tabs.length) return <View key={item.index} />

        const child = this.state.tabs[item.index]

        return React.cloneElement(child,
                { ...child.props, style: { ...child.props.style, width:this.state.width, height:this.state.height } }
            )
    }

    scrollTo(x) {
        this._root.getNode().scrollToIndex({ animated:true, index:x })
        this.updateTab(x)
    }

    onScrollEnd(e) {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;

        let index = Math.floor(contentOffset.x / viewSize.width);

        if (index < 0 || index >= this.state.tabs.length) return

        this.updateTab(index)
    }

    updateTab(index) {
        if (this.state.index !== index) {

            this.setState({
                index: index
            })

            if (this.props.onChangeTab)
                this.props.onChangeTab(index)
        }
    }

    onLayout(e) {
        this.setState({
            width:  e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
        })
    }

    render() {

//        if (!this.state.fakeItems.length) return null

        let w =  this.state.headers.length ? this.state.width / this.state.headers.length : 0

        const x = xOffset.interpolate({
            inputRange:  [0, this.state.width],
            outputRange: [0, w],
        })

        const theme = this.getCurrentTheme()

        const tabbarStyle = {
                ...propsToStyle( 'Tabbar', theme, this.props ),
                ...this.props.tabbarStyle
        }

        const tablineStyle = {
            ...propsToStyle( 'Tabbar.Line', theme, this.props ),
            ...this.props.tablineStyle
        }

        let buttonStyle = {
            ...propsToStyle( 'Tabbar.Button', theme, this.props ),
            ...this.props.buttonStyle
        }

        return (
            <View style={{ flex:1 }}>
                <View style={tabbarStyle} >
                    {
                        this.state.headers.map( (object, index) => {
                            return (
                                <Button style={buttonStyle} theme={theme} full noheight key={index} onPress={ ()=> this.scrollTo(index) }>
                                    {this.buttonBody(object, (index===this.state.index), theme, this.props)}
                                </Button>
                            )}
                        )
                    }
                    <View pointerEvents={'none'} style={{ position:'absolute', bottom:0, left:0, right:0, height:tablineStyle.height }} >
                        <Animated.View style={{ ...tablineStyle, transform: [{translateX: x}], width: w  }} />
                    </View>
                </View>
                <View style={{ flex:1 }}>
                    <AnimatedFlatList horizontal
                        ref={c => { this._root = c }}
                        pagingEnabled={true}
                        initialNumToRender={this.state.tabs.length}
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        data={this.state.fakeItems}
                        renderItem={(item)=>this.renderItem(item)}
                        keyExtractor={item => item.toString()}
                        ItemSeparatorComponent={null}
                        onLayout={(e) => this.onLayout(e)}
                        onScroll={onScroll}
                        onMomentumScrollEnd={(e)=>this.onScrollEnd(e)}
                    />
                </View>
            </View>
        )

    }

    buttonBody(object, active, theme) {

        if (object.header) {
            return object.header
        }
        else if (object.title || object.icon || object.iconName) {

            let result = []

            if (object.icon) {

                result.push( React.cloneElement(object.icon, { ...object.icon.props, key:2 }) )

            } else if (object.iconName) {

                let iconStyle = {
                    ...propsToStyle( 'Tabbar.Icon', theme, this.props ),
                    ...this.props.iconStyle
                }

                result.push(<Icon primary={active} dark={!active} theme={theme} name={object.iconName} key={0} style={iconStyle} />)
            }

            if (object.title) {

                let textStyle = {
                    ...propsToStyle( 'Tabbar.Text', theme, this.props ),
                    ...this.props.textStyle
                }

                result.push(<Text primary={active} dark={!active} theme={theme} key={1} style={textStyle} >{object.title}</Text>)
            }

            return result
        }
    }

}
