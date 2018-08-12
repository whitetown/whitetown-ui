/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { Image } from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

import AvatarPlaceholder from './AvatarPlaceholder'

class Avatar extends WhiteTownComponent {

    constructor(props) {
        super()
        this.state = {
            failed: ((!props.url || !props.url.length) && !props.source),
        }
    }

    loadingError() {
        this.setState({
            failed: true,
        })
    }

    render() {

        if (this.state.failed || (!this.props.url && !this.props.source) )
            return (
                <AvatarPlaceholder {...this.props } />
            )

        let theme = this.getCurrentTheme()

        let aStyle  = {
            ...propsToStyle( 'Avatar',   theme, this.props ),
            ...propsToStyle( 'color.bg', theme, this.props ),
            ...this.props.style
        }

        return (
            <Image  style={aStyle}
                    source={ this.props.source ? this.props.source : { uri: this.props.url } }
                    onError={() => this.loadingError()}
            />
        )
    }
}

export default Avatar
