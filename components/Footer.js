/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    View,
    SafeAreaView,
    Dimensions,
} from 'react-native'

import propsToStyle from '../utils/propsToStyle'
import getTheme from '../utils/getTheme'

class Footer extends React.Component {

    render() {

        const theme = this.props.theme||getTheme()
        const { height, width } = Dimensions.get('window')
        const footerHeight = (width > height) ? theme.systemValues.footerHeightLandscape : theme.systemValues.footerHeightPortrait

        let fStyle = {
            height: footerHeight,
//            minHeight: footerHeight,
            ...propsToStyle( 'Footer', theme, this.props ),
            ...this.props.style,
        }

        return (
            <View style={{ backgroundColor: fStyle.backgroundColor||theme.defaultValues.colors.headerColor }} >
                <SafeAreaView>
                    <View {...this.props} style={fStyle} >
                        {this.props.children}
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

export default Footer
