/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    View,
    TouchableHighlight,
} from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

class ListItem extends WhiteTownComponent {

    render() {

        const theme = this.getCurrentTheme()

        let lStyle = {
            ...propsToStyle( "ListItem", theme, this.props ),
            ...this.props.style
        }

        let innerStyle = propsToStyle( "ListItem.inner", theme, this.props )

        return (
            <TouchableHighlight onPress={this.props.onPress}
                                onLongPress={this.props.onLongPress}
                                underlayColor={this.props.underlayColor||theme.defaultValues.colors.light}
                                {...this.props}
                                style={innerStyle}
            >
                <View {...this.props} style={lStyle} >
                    {this.props.children}
                </View>
            </TouchableHighlight>
        )
    }
}

export default ListItem
