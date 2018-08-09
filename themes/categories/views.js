/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function viewsCategory( defaultValues ) {

    const colors   = defaultValues.colors

    const sizesXS  = defaultValues.sizesXS
    const sizesSM  = defaultValues.sizesSM
    const sizesMD  = defaultValues.sizesMD
    const sizesLG  = defaultValues.sizesLG

    const paddings = {

        xs:        { padding: sizesXS.padding },
        sm:        { padding: sizesSM.padding },
        md:        { padding: sizesMD.padding },
        lg:        { padding: sizesLG.padding },
    }

    const rowcol = {
        row:     { flexDirection:'row' },
        col:     { flexDirection:'column' },
    }

    return {

    'Container': {
        default:   { flex:1, backgroundColor: colors.appBackground },
    },

    'Content': {
        ...paddings,
    },

    'Space': {

        xs:        { height: sizesXS.padding },
        sm:        { height: sizesSM.padding },
        md:        { height: sizesMD.padding },
        lg:        { height: sizesLG.padding },

    },

    'Left': {
        default: { flex:0, marginRight:10, flexDirection:'row', alignItems: 'center', },

        ...rowcol,
        ...paddings,
    },

    'Body': {
        default: { flex:1, flexDirection:'row', alignItems:'center', justifyContent:'flex-start', },

        row:     { flexDirection:'row' },
        col:     { flexDirection:'column', alignItems:'flex-start' },
        middle:  { justifyContent:'center' },
        center:  { alignItems:'center' },

        ...paddings,
    },

    'Right': {
        default: { flexDirection:'row', alignItems: 'center' },

        ...rowcol,
        ...paddings,
    },

    'Row': {
        default: { flexDirection:'row' },

        middle:  { justifyContent:'center' },

        ...paddings,
    },

    'Col': {
        default: { flexDirection:'column' },

        middle:  { justifyContent:'center' },

        ...paddings,
    },

    }
}