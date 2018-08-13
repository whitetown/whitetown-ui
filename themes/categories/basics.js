/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function basicCategory( defaultValues ) {

    const colors   = defaultValues.colors
    const sizes    = defaultValues.sizes

    const sizesXS  = defaultValues.sizesXS
    const sizesSM  = defaultValues.sizesSM
    const sizesMD  = defaultValues.sizesMD
    const sizesLG  = defaultValues.sizesLG

    return {

    'Text': {
        default:   { fontSize: sizesSM.textSize, color:colors.textColor },

        xs:        { fontSize: sizesXS.textSize },
        sm:        { fontSize: sizesSM.textSize },
        md:        { fontSize: sizesMD.textSize },
        lg:        { fontSize: sizesLG.textSize },

        note:      { color: colors.note, fontSize: sizes.textSizeNote, fontWeight:'200' },
        italic:    { fontStyle: 'italic' },
        bold:      { fontWeight: 'bold'   },
    },

    'Icon': {
        default:   { color: colors.iconColor },

        xs:        { fontSize: sizesXS.iconSize },
        sm:        { fontSize: sizesSM.iconSize },
        md:        { fontSize: sizesMD.iconSize },
        lg:        { fontSize: sizesLG.iconSize }

    },

    'Spinner': {
        default:   { size: 'large' },

        xs:        { size: 'small' },
        sm:        { size: 'small' },
        md:        { size: 'large' },
        lg:        { size: 'large' },

    },

    'Button': {
        default:   {
                overflow: 'hidden',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: sizesSM.buttonHeight,
                paddingHorizontal: sizes.buttonHPadding
            },

        xs:        { height: sizesXS.buttonHeight },
        sm:        { height: sizesSM.buttonHeight },
        md:        { height: sizesMD.buttonHeight },
        lg:        { height: sizesLG.buttonHeight },

        disabled:  { opacity: 0.7 },

        block:     { borderRadius: sizesSM.buttonRadius, flex:1 },
        full:      { borderRadius: 0, flex:1  },
        rounded:   { },
        noheight:  { height:null },
        bordered:  { borderWidth:1 },

        vertical:  { flexDirection: 'column' }
    },

    'Button.Text': {
        default:   { fontSize: sizesSM.buttonTextSize, flexWrap:'nowrap' },

        xs:        { fontSize: sizesXS.buttonTextSize },
        sm:        { fontSize: sizesSM.buttonTextSize },
        md:        { fontSize: sizesMD.buttonTextSize },
        lg:        { fontSize: sizesLG.buttonTextSize },
    },

    'Button.Icon': {
        default:   { fontSize: sizesSM.buttonIconSize  },

        xs:        { fontSize: sizesXS.buttonIconSize  },
        sm:        { fontSize: sizesSM.buttonIconSize  },
        md:        { fontSize: sizesMD.buttonIconSize  },
        lg:        { fontSize: sizesLG.buttonIconSize  }
    },

    'Segments': {
        default:   { overflow: 'hidden', flexDirection:'row', height: sizesSM.buttonHeight-8, borderRadius:sizesSM.buttonRadius },

        xs:        { height: sizesXS.buttonHeight-8 },
        sm:        { height: sizesSM.buttonHeight-8 },
        md:        { height: sizesMD.buttonHeight-8 },
        lg:        { height: sizesLG.buttonHeight-8 },

    },

    }
}
