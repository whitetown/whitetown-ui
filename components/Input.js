/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Children } from 'react'
import {
    TextInput
} from 'react-native'

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Input extends React.Component {

    getWrappedInstance() {
        return this
    }

    render() {

        const theme = this.props.theme||getTheme()

        let iStyle = {
            ...propsToStyle( 'Input', theme, this.props ),
            ...propsToStyle( 'color.fg', theme, this.props ),
            ...this.props.style
        }

        return (
			<TextInput
				ref={c => { this._root = c }}
				editable={this.props.disabled ? false : true}
				underlineColorAndroid='rgba(0,0,0,0)'
				placeholderTextColor={
					this.props.placeholderTextColor ? this.props.placeholderTextColor : theme.defaultValues.colors.gray
				}
                selectionColor={iStyle.color}
				{...this.props}
                style={iStyle}
			/>
        )
    }
}

export default Input
