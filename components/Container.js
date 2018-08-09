/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"
import {
    StatusBar,
    View,
} from "react-native"

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Container extends React.Component {

    render() {

        const theme = this.props.theme||getTheme()

        let cStyle = {
            ...propsToStyle( 'Container', theme, this.props ),
            ...this.props.style
        }

        return (
            <View {...this.props} style={cStyle} >
                <StatusBar barStyle={this.props.barStyle || theme.defaultValues.colors.barStyle}
                        backgroundColor={this.props.statusBarColor || theme.defaultValues.colors.statusBarColor} />
                {this.props.children}
            </View>
            )
    }
}

export default Container
