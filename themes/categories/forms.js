/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function formsCategory( defaultValues ) {

    const colors   = defaultValues.colors
    const sizes    = defaultValues.sizes

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

    const fontSizes = {
        xs:        { fontSize: sizesXS.inputFontSize },
        sm:        { fontSize: sizesSM.inputFontSize },
        md:        { fontSize: sizesMD.inputFontSize },
        lg:        { fontSize: sizesLG.inputFontSize },
    }

    return  {

    'Form': {
        default:   { borderColor: colors.card },

        bordered:  { borderWidth: sizesSM.cardBorderWidth },
        rounded:   { borderWidth: sizesSM.cardBorderWidth, borderRadius:6 },

        ...paddings,
    },

    'Item': {
        default:   {
                flexDirection: 'row',
                marginTop: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                paddingBottom: 2,
                paddingTop: 4,
                height: sizesSM.itemHeight,
                borderBottomWidth: 1,
                borderColor: colors.card,
            },

        row:       { flexDirection:'row' },
        col:       { flexDirection:'column', alignItems:'flex-start' },
        bordered:  { borderWidth: 1, borderRadius:6 },
        underline: { borderBottomWidth: 1 },
        nounderline: { borderBottomWidth: 0 },
        rounded:   { borderWidth: 1 },
        error:     { borderColor: colors.danger },

        xs:        { height: sizesXS.itemHeight, paddingBottom:2, paddingTop:2 },
        sm:        { height: sizesSM.itemHeight, paddingBottom:2, paddingTop:4 },
        md:        { height: sizesMD.itemHeight, },
        lg:        { height: sizesLG.itemHeight, },

        floating:  { alignItems:'flex-end' },
        stacked:   { alignItems:'flex-end' },
    },

    'Label': {
        default:  { color: colors.dark, fontSize: sizesSM.labelFontSize },

    },

    'Input': {
        default:   {
                flex: 1,
                paddingTop: 0,
                paddingBottom: 0,
                color: colors.textColor,
                fontSize: sizesSM.inputFontSize,
            },

        multiline: { height: null, minHeight: sizesSM.inputFontSize },
        ...fontSizes,
    },

    'Textarea': {
        default:   {
                flex: 1,
                height: 60,
                textAlignVertical: 'top',
                fontSize: sizesSM.inputFontSize,
                color: colors.textColor,
            },

        ...fontSizes
    },

    'Item.Label': {

        xs:        { fontSize: sizesXS.labelFontSize },
        sm:        { fontSize: sizesSM.labelFontSize },
        md:        { fontSize: sizesMD.labelFontSize },
        lg:        { fontSize: sizesLG.labelFontSize },

        inline:    { paddingRight:2 },
        fixed:     { width: sizes.fixedLabel, paddingRight: 2 },
    },

    'Item.Input': {

        ...fontSizes
    },

    'Item.Textarea': {

        ...fontSizes
    },

    }
}
