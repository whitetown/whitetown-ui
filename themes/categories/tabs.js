/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
    StyleSheet,
} from 'react-native'

export default function tabsCategory( defaultValues ) {

    const colors   = defaultValues.colors
    const sizes    = defaultValues.sizes

    return {

    'Tab': {
        default: { flex: 1, justifyContent: 'center', }

    },

    'TabHeader': {
        default:   { flexDirection:'row', justifyContent: 'center', alignItems:'center' },

    },
    'Tabbar': {
        default:    {
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: sizes.tabbarHeight,
                backgroundColor: colors.headerColor,
                borderColor: colors.iosShadowColor,
                borderBottomWidth: 1,
            },
    },

    'Tabbar.Line': {
        default:    {
                position: 'absolute',
                bottom: 0,
                height: sizes.tabbarLineHeight,
                backgroundColor: colors.primary,
            },
    },

    'Tabbar.Button': {
        default:   { flex: 1, height: null },
    },

    'Tabbar.Icon': {
        default:   { fontSize: sizes.tabbarIconSize },
    },

    'Tabbar.Text': {
        default:   { fontSize: sizes.tabbarTextSize },
    },

    'Footer': {
        default:    {
                flexDirection: 'row',
                backgroundColor: colors.headerColor,
                borderTopColor: colors.iosShadowColor,
                borderTopWidth: StyleSheet.hairlineWidth,

        },
    },

    'FooterTab': {
        default: { paddingLeft:0, paddingRight:0 },
        // this is a <Button full noheight vertical={ isPhone ? true : false } />
    },

    }

}
