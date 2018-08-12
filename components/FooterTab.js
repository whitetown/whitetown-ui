/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    Platform,
} from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

import Button from './Button'

class FooterTab extends WhiteTownComponent {

    render() {

        const theme = this.getCurrentTheme()

        let fStyle = {
            ...propsToStyle( 'FooterTab', theme, this.props ),
            justifyContent: 'space-evenly',
            ...this.props.style,
        }

        return (
            <Button {...this.props}
                    full noheight
                    vertical={!Platform.isPad}
                    style={fStyle} >
                {this.props.children}
            </Button>
            )
    }
}

export default FooterTab
