/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    Text
} from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

class Label extends WhiteTownComponent {

    render() {

        const theme = this.getCurrentTheme()

        let lStyle = {
            ...propsToStyle( 'Label', theme, this.props ),
            ...propsToStyle( 'color.fg', theme, this.props ),
            ...this.props.style }

        return (
            <Text style={lStyle} >
                {this.props.children}
            </Text>
        )
    }
}

export default Label
