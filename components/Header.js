/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

import {
    View,
    StatusBar,
    NativeModules,
    Platform,
    Dimensions,
    TouchableOpacity,
//    SafeAreaView,
} from 'react-native'

import SafeAreaView from 'react-native-safe-area-view'

import WhiteTownComponent from './WhiteTownComponent'
import Text from './Text'
import Icon from './Icon'

import propsToStyle from '../utils/propsToStyle'

const { StatusBarManager } = NativeModules

const orientations = {
    portrait:  'portrait',
    landscape: 'landscape',
}

const NB_Phone = {
    android: {
        portrait:  50,
        landscape: 48,
    },
    ios: {
        portrait:  44,
        landscape: 32,
    }
}

const NB_Tablet = {
    android: {
        portrait:  64,
        landscape: 64,
    },
    ios: {
        portrait:  50,
        landscape: 50,
    }
}

const SafeHeader = (props) => {
    return props.safe ?
        <SafeAreaView style={{ flexDirection:'row', alignItems:'center' }} >
            {props.children}
        </SafeAreaView>
        : props.children
}

const SidePlaceholder = () => (
    <View style={{ width: 32 }} />
)

class Header extends WhiteTownComponent {

    state = {
        statusBarHeight: 0,
        navbarHeight: 0,
    }

    adjustStatusBar() {

        const { width, height } = Dimensions.get('screen')
        const device = (width > 640 && height > 640) ? NB_Tablet : NB_Phone
        const os = device[Platform.OS] || device.ios
        const orientation = width > height ? orientations.landscape : orientations.portrait
        const navbarHeight = os[orientation]

        if (Platform.OS === 'ios') {
            StatusBarManager.getHeight((result)=>{
                this.setState({
                    statusBarHeight: result ? result['height']||0 : 0,
                    navbarHeight: navbarHeight,
                })
            })
        } else {
            this.setState({
                statusBarHeight: 0,
                navbarHeight: navbarHeight,
            })
        }
    }

    async componentWillMount() {
        this.adjustStatusBar()
    }

    onLayout(e) {
        this.adjustStatusBar()
        if (this.props.onLayout)
            this.props.onLayout(e)
        if (this.props.onChangeHeight)
            this.props.onChangeHeight(e.nativeEvent.layout.height)
    }

    renderEdge(items, edgeStyle) {

        if (!items || !items.length) return null

        const theme = this.getCurrentTheme()
        const tintStyle = this.props.tintColor ? { color:this.props.tintColor } : {}

        let buttonStyle = propsToStyle( 'Header.Button', theme, {} )

        return (
            <View style={{ flexDirection:'row', ...edgeStyle }} >
            {
                items.map( (item, index)=>(
                    <TouchableOpacity onPress={item.action} key={index} style={buttonStyle} >
                        {item.icon ? <Icon primary name={item.icon} style={tintStyle} theme={theme} /> : null}
                        {item.text ? <Text primary style={tintStyle} theme={theme} >{item.text}</Text> : null}
                    </TouchableOpacity>
                ))
            }
            </View>
        )
    }


    render() {

        const theme = this.getCurrentTheme()
        const colors = theme.defaultValues.colors

        let containerStyle = {
            ...propsToStyle( 'Header', theme, this.props ),
            ...this.props.style
        }

        let bodyStyle = propsToStyle( 'Header.Body', theme, {} )

        let titleStyle = propsToStyle( 'Header.Title', theme, {} )
        if (this.props.textColor) titleStyle['color'] = this.props.textColor

        let subtitleStyle = propsToStyle( 'Header.Subtitle', theme, {} )
        if (this.props.textColor) subtitleStyle['color'] = this.props.textColor

        let leftComponent  = this.props.headerLeft  ? this.props.headerLeft  : this.renderEdge(this.props.leftActions, { justifyContent:'flex-start', paddingLeft:10 })
        let rightComponent = this.props.headerRight ? this.props.headerRight : this.renderEdge(this.props.rightActions, { justifyContent:'flex-end', paddingRight:10 })

        if (leftComponent && !rightComponent) rightComponent = <SidePlaceholder />
        if (rightComponent && !leftComponent) leftComponent  = <SidePlaceholder />


        return (
            <View style={containerStyle}  onLayout={(e)=>this.onLayout(e)} >

                <View style={{ flexDirection:'column' }} >
                    {
                        this.props.statusBar !== undefined ? this.props.statusBar :
                        (
                            <View style={{ height: this.state.statusBarHeight, backgroundColor:this.props.statusBarColor||this.props.navbarColor||colors.headerColor }}>
                                <StatusBar barStyle={this.props.statusBarStyle||"dark-content"} backgroundColor={this.props.statusBarColor||this.props.navbarColor||colors.headerColor} />
                            </View>
                        )
                    }

                    {
                        this.props.navBar !== undefined ? this.props.navBar :
                        (
                            <View style={{ height:this.state.navbarHeight, flexDirection:'row', alignItems:'center', backgroundColor:this.props.navbarColor||colors.headerColor }} >
                                <SafeHeader {...this.props} >
                                    {leftComponent}
                                    {
                                        this.props.headerBody ? this.props.headerBody :
                                        <View style={bodyStyle} >
                                            {this.props.title    ? <Text adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={1} dark theme={theme} style={titleStyle}>{this.props.title}</Text> : null }
                                            {this.props.subtitle ? <Text adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={1} dark theme={theme} style={subtitleStyle}>{this.props.subtitle}</Text> : null }
                                        </View>
                                    }
                                    {rightComponent}
                                </SafeHeader>
                            </View>
                        )
                    }
                </View>

            </View>
        )
    }

}

export default Header
