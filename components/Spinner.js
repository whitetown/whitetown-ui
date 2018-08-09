/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    ActivityIndicator
} from 'react-native'

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Spinner extends React.Component {

    render() {

        const theme = this.props.theme||getTheme()

        let sStyle = {
            ...propsToStyle( 'Spinner', theme, this.props ),
            ...propsToStyle( 'color.fg', theme, this.props ),
        }

        let size = this.props.size||sStyle.size

        return (
            <ActivityIndicator {...this.props}
                                color={ this.props.color || (sStyle.color ? sStyle.color : undefined) }
                                size={size}
            />
        )
    }
}

export default Spinner
