/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    View,
    Dimensions,
//    SafeAreaView,
} from 'react-native'

import SafeAreaView from 'react-native-safe-area-view'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

class Footer extends WhiteTownComponent {

    render() {

        const theme = this.getCurrentTheme()

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
