/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    View,
} from 'react-native'

import Label from './Label'
import Input from './Input'
import Textarea from './Textarea'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

class Item extends WhiteTownComponent {

    constructor() {
        super()
        this.state = {
            focused: false,
        }
    }

    onFocus( childOnFocus ) {
        this.setState({
            focused: true,
        })
        if (childOnFocus)
            childOnFocus()
    }

    onBlur( childOnBlur ) {
        this.setState({
            focused: false,
        })
        if (childOnBlur)
            childOnBlur()
    }

    render() {

        const theme = this.getCurrentTheme()

        let iStyle = {
            ...propsToStyle( 'Item', theme, this.props ),
            ...propsToStyle( 'color.border', theme, this.props ),
            ...this.props.style
        }

        let radius = iStyle.radius||0
        if (this.props.rounded) {
            radius = iStyle.height / 2
            iStyle = { ...iStyle, borderRadius:radius, paddingLeft:radius/2, paddingRight:radius/2 }
        }

        let inputContainsValue = false

        React.Children.map(this.props.children, (child, i) => {
//            const displayName = child.type.displayName
            const type = child.type.WrappedComponent||child.type

//            if (displayName === 'Input' || displayName === 'Textarea') {
            if (type === Input || type === Textarea) {
                    inputContainsValue = (child.props.value && child.props.value.length)
            }
//            if (displayName === 'Textarea') {
            if (type === Textarea) {
                iStyle = { ...iStyle, height:null }
            }
        })

        if (this.props.floating && !inputContainsValue && !this.state.focused) {
            iStyle = { ...iStyle, alignItems:'center',  }
        }

        let styledChildren = React.Children.map(this.props.children, (child, i) => {

//            const displayName = child.type.displayName
            const type = child.type.WrappedComponent||child.type

//            if (displayName === 'Input') {
            if (type === Input) {

                let tStyle = {
                    ...propsToStyle( 'Input', theme, child.props ),
                    ...propsToStyle( 'Item.Input', theme, this.props ),
                    ...child.props.style
                }

                return React.cloneElement(child, {
                    ...child.props,
                    onFocus: ()=>this.onFocus(child.props.onFocus),
                    onBlur:  ()=>this.onBlur(child.props.onBlur),
                    selectionColor:tStyle.color,
                    style:tStyle
                })

//            } else if (displayName === 'Textarea') {
            } else if (type === Textarea) {

                let tStyle = {
                    ...propsToStyle( 'Textarea', theme, child.props ),
                    ...propsToStyle( 'Item.Textarea', theme, this.props ),

                    ...child.props.style
                }

                return React.cloneElement(child, {
                    ...child.props,
                    onFocus: ()=>this.onFocus(child.props.onFocus),
                    onBlur:  ()=>this.onBlur(child.props.onBlur),
                    selectionColor:tStyle.color,
                    style:tStyle
                })


//            } else if (displayName === 'Label') {
            } else if (type === Label) {

                let lStyle = {
                    ...propsToStyle( 'Label', theme, child.props ),
                    ...propsToStyle( 'Item.Label', theme, this.props ),
                    ...child.props.style
                }

                let leftPadding = this.props.rounded ? radius/2 : 5

                if (this.props.stacked) {
                    lStyle = { ...lStyle, position:'absolute', top:5, left:leftPadding }
                }

                if (this.props.floating) {
                    if (inputContainsValue || this.state.focused)
                        lStyle = { ...lStyle, position:'absolute', top:5, left:leftPadding }
                    else
                        lStyle = { ...lStyle, position:'absolute', top:'30%', left:leftPadding }
                }

                return React.cloneElement(child, {
                        ...child.props,
                        style: lStyle,
                    })

            } else {
                return child
            }

        })


        return (
            <View {...this.props} style={iStyle} >
                {styledChildren}
            </View>
        )
    }
}

export default Item
