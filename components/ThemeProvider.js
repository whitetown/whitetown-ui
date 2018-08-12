/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemeProvider extends Component {
    getChildContext() {
        return {
            theme: this.props.theme,
        }
    }

    render() {
        return this.props.children
    }
}
ThemeProvider.childContextTypes = {
    theme: PropTypes.object
}

export default ThemeProvider
