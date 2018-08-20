/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
    StyleSheet,
} from 'react-native'

export default function headerCategory( defaultValues ) {

    const colors   = defaultValues.colors

    return {

    'Header': {
        default: {
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            position: 'relative',
            elevation: 2,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: colors.iosShadowColor,
        },

        absolute: { position: 'absolute' },
        noshadow: { elevation:0, borderBottomWidth: 0, borderBottomColor:undefined },

    },

    'Header.Body': {
        default: { flex:1, flexDirection:'column', paddingHorizontal:10, justifyContent:'center', alignItems:'center' },
    },

    'Header.Title': {
        default: { fontSize:19, fontWeight:'700', textAlign:'center' }
    },

    'Header.Subtitle': {
        default: { fontSize:12, textAlign:'center' }
    },

    'Header.Button': {
        default: { alignSelf:'stretch', alignItems:'center', justifyContent:'center' },
    },

    }

}
