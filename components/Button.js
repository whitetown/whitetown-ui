/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    TouchableOpacity,
} from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

import Icon from './Icon'
import Text from './Text'

class Button extends WhiteTownComponent {

    render() {

    const theme = this.getCurrentTheme()

    let btnColor = {}
    if (this.props.bordered)
        btnColor = propsToStyle( 'color.border', theme, this.props )
    else
        btnColor = propsToStyle( 'color.bg', theme, this.props )

    let bStyle = {
        ...propsToStyle( 'Button', theme, this.props ),
        ...btnColor,
        ...this.props.style
    }

    if (this.props.rounded) {
        bStyle = { ...bStyle, borderRadius: bStyle.height/2 }
    }

    let styledChildren = React.Children.map(this.props.children, (child, i) => {

        if (!child || !child.type) return null

        const type = child.type.WrappedComponent||child.type
//        const displayName = child.type.displayName

        if (type === Icon) {
//        if (displayName === 'Icon') {

            let iconColor = {}
            if (this.props.bordered)
                iconColor = propsToStyle( 'color.fg', theme, this.props )
            else
                iconColor = propsToStyle( 'color.fg.button', theme, this.props )

            let iStyle = {
                ...propsToStyle( 'Button.Icon', theme, this.props ),
                ...iconColor,
                flex:undefined,
                ...propsToStyle( 'color.fg', theme, child.props ),
                ...child.props.style
            }

            return React.cloneElement(child, { ...child.props, style:iStyle })

        } else if ( type === Text) {
//        } else if ( displayName === 'Text') {

            let textColor = {}
            if (this.props.bordered)
                textColor = propsToStyle( 'color.fg', theme, this.props )
            else
                textColor = propsToStyle( 'color.fg.button', theme, this.props )

            let tStyle = {
                ...propsToStyle( 'Button.Text', theme, this.props ),
                ...textColor,
                ...propsToStyle( 'color.fg', theme, child.props ),
                ...child.props.style
            }

            return React.cloneElement(child, {
                numberOfLines:1,
                adjustsFontSizeToFit:true,
                minimumFontScale:0.5,
                ...child.props,
                style: { flex:1, textAlign:'center', ...tStyle} })

        } else {
            return child
        }

    })

    return (
        <TouchableOpacity activeOpacity={ this.props.activeOpacity > 0 ? this.props.activeOpacity : 0.7 }
                {...this.props}
                style={bStyle} >
            {styledChildren}
        </TouchableOpacity>
        )
    }
}

export default Button
