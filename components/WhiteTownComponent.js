/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'

import getTheme from '../utils/getTheme'

export default class WhiteTownComponent extends React.Component {

	static contextTypes = {
		theme: PropTypes.object,
	}

	static propTypes = {
		theme: PropTypes.object,
	}

	static childContextTypes = {
		theme: PropTypes.object,
	}

	getCurrentTheme() {
		return this.props.theme||this.context.theme||getTheme()
	}

	getChildContext() {
		return {
			theme: this.props.theme ? this.props.theme : this.context.theme,
		}
	}

}
