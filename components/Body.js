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

class Body extends React.Component {

    render() {

        const theme = this.props.theme||getTheme()

        let bStyle = {
            ...propsToStyle( 'Body', theme, this.props ),
            ...this.props.style
        }

        return (
            <View {...this.props} style={bStyle} >
                {this.props.children}
            </View>
        )
    }
}

export default Body
