/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    FlatList
} from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

class List extends WhiteTownComponent {

    getWrappedInstance() {
        return this
    }

    render() {

        const theme = this.getCurrentTheme()

        let lStyle = {
            ...propsToStyle( 'List', theme, this.props ),
            ...this.props.style
        }

        return (
            <FlatList {...this.props}
                ref={c => { this._root = c }}
                style={lStyle} />
        )
    }
}

export default List
