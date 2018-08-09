/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

import { View, Text } from 'react-native'

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

export default class AvatarPlaceholder extends React.Component {

    render() {

        let theme = this.props.theme||getTheme()

        let colorBG = propsToStyle( 'color.bg', theme, this.props )
        let size    = propsToStyle( 'Avatar',   theme, this.props )

        let pStyle = {
            ...propsToStyle( 'AvatarPlaceholder', theme, this.props ),
            ...colorBG,
            ...size,
            ...this.props.placeholderStyle
        }
        let tStyle = {
            ...propsToStyle( 'AvatarPlaceholder.Text', theme, this.props ),
            ...propsToStyle( 'color.fg.inner', theme, this.props ),
            ...this.props.textStyle
        }

        return(
            <View style={pStyle} >
                <Text style={tStyle} adjustsFontSizeToFit={true} minimumFontScale={0.2} >{this.props.initials}</Text>
            </View>
        )
    }
}