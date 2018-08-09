/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"

import Ionicons from 'react-native-vector-icons/Ionicons'

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Icon extends React.Component {

    render() {

        const theme = this.props.theme||getTheme()

        let iStyle = {
            ...propsToStyle( 'Icon',     theme, this.props ),
            ...propsToStyle( 'color.fg', theme, this.props ),
            ...this.props.style
        }

        let size = this.props.size||iStyle.fontSize||theme.defaultValues.sizesSM.iconSize

        return (
            <Ionicons name={this.props.name}
                size={size}
                style={{ width:size, textAlign:'center', ...iStyle }} />
        )
    }
}


export default Icon
