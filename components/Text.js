/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    Text as TextRN
} from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

class Text extends WhiteTownComponent {

    render() {

        const theme = this.getCurrentTheme()

        let tStyle = {
            ...propsToStyle( 'Text',     theme, this.props ),
            ...propsToStyle( 'color.fg', theme, this.props ),
            ...this.props.style
        }

        return (
            <TextRN {...this.props} style={tStyle} >
                {this.props.children}
            </TextRN>
        )
    }
}

export default Text
