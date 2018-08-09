/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function listCategory( defaultValues ) {

    const colors   = defaultValues.colors
    const sizes    = defaultValues.sizes

    const sizesXS  = defaultValues.sizesXS
    const sizesSM  = defaultValues.sizesSM
    const sizesMD  = defaultValues.sizesMD
    const sizesLG  = defaultValues.sizesLG

    return {

    'List':     {


    },

    'ListItem': {
        default: { flexDirection:'row', minHeight: sizes.listItemMinHeight, paddingVertical:sizes.listItemVPadding, borderBottomWidth:1, borderBottomColor:colors.card  },

        row:     { flexDirection:'row' },
        col:     { flexDirection:'column' },
        indent:  { paddingLeft: sizes.listItemHPadding  },
        noline:  { borderBottomWidth:0 },
    },

    'ListItem.inner': {

        xs:        { paddingHorizontal: sizesXS.padding },
        sm:        { paddingHorizontal: sizesSM.padding },
        md:        { paddingHorizontal: sizesMD.padding },
        lg:        { paddingHorizontal: sizesLG.padding },
    },


    'Card': {
        default: {
                flexWrap: 'nowrap',
                shadowOffset:  { width: 0, height: 2 },
                shadowRadius: 1.5,
                shadowOpacity: 0.1,
                elevation: 3,
                borderRadius: 2,
                marginVertical: 5,
                marginHorizontal: 2,
                backgroundColor: colors.appBackground,
                shadowColor: colors.dark,
                borderWidth: sizesSM.cardBorderWidth,
                borderColor: colors.card,
                },

        transparent: { backgroundColor: 'transparent' },

        xs:      { borderWidth: sizesXS.cardBorderWidth },
        sm:      { borderWidth: sizesSM.cardBorderWidth },
        md:      { borderWidth: sizesMD.cardBorderWidth },
        lg:      { borderWidth: sizesLG.cardBorderWidth },

    },

    'CardItem': {
        default: { flex:1, justifyContent:'center', alignContent:'center', padding:8  },

        underline: { borderBottomWidth:1, borderBottomColor:colors.card },
    },

    }
}
