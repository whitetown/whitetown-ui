/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function avatarCategory( defaultValues ) {

    const colors   = defaultValues.colors

    const sizesXS  = defaultValues.sizesXS
    const sizesSM  = defaultValues.sizesSM
    const sizesMD  = defaultValues.sizesMD
    const sizesLG  = defaultValues.sizesLG

    return {

    'Avatar': {
        default: { width:sizesSM.avatarSize, height:sizesSM.avatarSize, borderRadius:sizesSM.avatarSize/2  },

        xs:      { width:sizesXS.avatarSize, height:sizesXS.avatarSize, borderRadius:sizesXS.avatarSize/2  },
        sm:      { width:sizesSM.avatarSize, height:sizesSM.avatarSize, borderRadius:sizesSM.avatarSize/2  },
        md:      { width:sizesMD.avatarSize, height:sizesMD.avatarSize, borderRadius:sizesMD.avatarSize/2  },
        lg:      { width:sizesLG.avatarSize, height:sizesLG.avatarSize, borderRadius:sizesLG.avatarSize/2  },
    },

    'AvatarPlaceholder': {
        default: { backgroundColor: colors.light, alignItems:'center', justifyContent:'center', overflow:'hidden', paddingHorizontal: 2 },
    },

    'AvatarPlaceholder.Text': {
        default: { fontSize: sizesSM.avatarText },

        xs:      { fontSize: sizesXS.avatarText },
        sm:      { fontSize: sizesSM.avatarText },
        md:      { fontSize: sizesMD.avatarText },
        lg:      { fontSize: sizesLG.avatarText },
    },

    }

}
