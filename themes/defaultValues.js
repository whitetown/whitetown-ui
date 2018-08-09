/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
    PixelRatio,
    Platform
} from 'react-native'

import defaultColors from './defaultColors'

const androidExtraheight = Platform.OS === 'ios' ? 0 : 5

export default {

    colors: defaultColors,

    sizesXS: {
        buttonHeight:       36,
        buttonRadius:        6,
        buttonTextSize:     14,
        buttonIconSize:     27,

        iconSize:           24,
        textSize:           14,

        avatarSize:         30,
        avatarText:         15,

        itemHeight:         38 + androidExtraheight,
        inputFontSize:      14,
        labelFontSize:      12,

        padding:             5,

        cardBorderWidth:    1 / PixelRatio.getPixelSizeForLayoutSize(1),

    },

    sizesSM: {
        buttonHeight:       44,
        buttonRadius:        8,
        buttonTextSize:     17,
        buttonIconSize:     27,

        iconSize:           27,
        textSize:           17,

        avatarSize:         45,
        avatarText:         20,

        itemHeight:         44 + androidExtraheight,
        inputFontSize:      17,
        labelFontSize:      14,

        padding:            10,

        cardBorderWidth:    2 / PixelRatio.getPixelSizeForLayoutSize(1),
    },

    sizesMD: {
        buttonHeight:       60,
        buttonRadius:       10,
        buttonTextSize:     24,
        buttonIconSize:     30,

        iconSize:           36,
        textSize:           26,

        avatarSize:         75,
        avatarText:         36,

        itemHeight:         60 + androidExtraheight,
        inputFontSize:      26,
        labelFontSize:      20,

        padding:            15,

        cardBorderWidth:    2 / PixelRatio.getPixelSizeForLayoutSize(1),
    },

    sizesLG: {
        buttonHeight:       76,
        buttonRadius:       10,
        buttonTextSize:     32,
        buttonIconSize:     32,

        iconSize:           50,
        textSize:           36,

        avatarSize:        120,
        avatarText:         48,

        itemHeight:         75 + androidExtraheight,
        inputFontSize:      36,
        labelFontSize:      24,

        padding:            20,

        cardBorderWidth:    3 / PixelRatio.getPixelSizeForLayoutSize(1),
    },

    sizes: {

        textSizeNote: 14,

        fixedLabel: 70,

        tabbarHeight:     48,
        tabbarLineHeight: 2,
        tabbarIconSize:   24,
        tabberFontSize:   14,

        buttonHPadding:     10,

        listItemMinHeight:  44,
        listItemHPadding:   10,
        listItemHMargin:    10,
        listItemVPadding:   5,

    }

}
