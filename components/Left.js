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

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

class Left extends WhiteTownComponent {

    render() {

        const theme = this.getCurrentTheme()

        let lStyle = {
            ...propsToStyle( 'Left', theme, this.props ),
            ...this.props.style
        }

        return (
            <View {...this.props} style={lStyle} >
                {this.props.children}
            </View>
        )
    }
}

export default Left
