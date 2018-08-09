/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    TextInput,
} from 'react-native'

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Textarea extends React.Component {

    getWrappedInstance() {
        return this
    }

    render() {

        const theme = this.props.theme||getTheme()

        let tStyle = {
            ...propsToStyle( 'Textarea', theme, this.props ),
            ...propsToStyle( 'color.fg', theme, this.props ),
            ...this.props.style
        }

        if (this.props.rowSpan && this.props.rowSpan > 0) {
            tStyle = { ...tStyle, height: this.props.rowSpan * 25 }
        }

        return (
			<TextInput
				ref={c => { this._root = c }}
                multiline
				editable={this.props.disabled ? false : true}
				underlineColorAndroid='rgba(0,0,0,0)'
				placeholderTextColor={
					this.props.placeholderTextColor ? this.props.placeholderTextColor : theme.defaultValues.colors.gray
				}
                selectionColor={tStyle.color}
				{...this.props}
                style={tStyle}
			/>
        )
    }
}

export default Textarea
