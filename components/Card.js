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

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Card extends React.Component {

    render() {

        const theme = this.props.theme||getTheme()

        let cStyle = {
            ...propsToStyle( 'Card', theme, this.props ),
            ...this.props.style
        }

        let cColor = propsToStyle( 'color.bg', theme, this.props )
        if (cColor && cColor.backgroundColor) {
            cStyle = { ...cStyle, borderColor: cColor.backgroundColor }
        }

        return (
            <View {...this.props} style={cStyle} >
                {this.props.children}
            </View>
        )
    }
}

export default Card
