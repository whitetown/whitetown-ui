/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Content extends React.Component {

    getWrappedInstance() {
        return this
    }

    render() {

        const theme = this.props.theme||getTheme()

        let cStyle = {
            ...propsToStyle( 'Content', theme, this.props ),
            ...this.props.contentContainerStyle
        }

        return (
			<KeyboardAwareScrollView
				automaticallyAdjustContentInsets={false}
				resetScrollToCoords={this.props.disableKBDismissScroll ? null : { x: 0, y: 0 }}
				keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps ? this.props.keyboardShouldPersistTaps : 'handled'}
				ref={c => {
					this._scrollview = c;
					this._root = c;
				}}
				{...this.props}
				contentContainerStyle={cStyle}
			>
				{this.props.children}
			</KeyboardAwareScrollView>
        )
    }
}

export default Content
