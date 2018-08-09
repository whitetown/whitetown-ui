/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    View,
    TouchableOpacity,
} from 'react-native'

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class CardItem extends React.Component {

    render() {

        const theme = this.props.theme||getTheme()

        let cStyle = { ...propsToStyle( "CardItem", theme, this.props ), ...this.props.style }

        if (this.props.onPress || this.onLongPress)
        return (
            <TouchableOpacity
                            activeOpacity={0.2}
                            {...this.props}
            >
                <View style={cStyle}>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        )
        else
        return (
            <View {...this.props} style={cStyle} >
                {this.props.children}
            </View>
        )
    }
}

export default CardItem
