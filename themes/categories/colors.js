/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function colorsCategory( defaultValues ) {

    const colors   = defaultValues.colors

    return {

    'color.bg': {
        default: {   },
        primary: { backgroundColor: colors.primary },
        info:    { backgroundColor: colors.info    },
        success: { backgroundColor: colors.success },
        danger:  { backgroundColor: colors.danger  },
        warning: { backgroundColor: colors.warning },
        dark:    { backgroundColor: colors.dark    },
        light:   { backgroundColor: colors.light   },
        gray:    { backgroundColor: colors.gray    },
    },

    'color.border': {
        default: {    },
        primary: { borderColor: colors.primary },
        info:    { borderColor: colors.info    },
        success: { borderColor: colors.success },
        danger:  { borderColor: colors.danger  },
        warning: { borderColor: colors.warning },
        dark:    { borderColor: colors.dark    },
        light:   { borderColor: colors.light   },
        gray:    { borderColor: colors.gray    },
        secondary: { borderColor: colors.note  },
    },

    'color.fg': {
        default: {    },
        primary: { color: colors.primary },
        info:    { color: colors.info    },
        success: { color: colors.success },
        danger:  { color: colors.danger  },
        warning: { color: colors.warning },
        dark:    { color: colors.dark    },
        light:   { color: colors.light   },
        gray:    { color: colors.gray    },
        secondary: { color: colors.note  },
    },

    'color.fg.button': {
        default: { color: colors.primary  },
        primary: { color: colors.primaryX },
        info:    { color: colors.infoX    },
        success: { color: colors.successX },
        danger:  { color: colors.dangerX  },
        warning: { color: colors.warningX },
        dark:    { color: colors.darkX    },
        light:   { color: colors.lightX   },
        gray:    { color: colors.grayX    },
    },

    'color.fg.inner': {
        default: { color: colors.black    },
        primary: { color: colors.primaryX },
        info:    { color: colors.infoX    },
        success: { color: colors.successX },
        danger:  { color: colors.dangerX  },
        warning: { color: colors.warningX },
        dark:    { color: colors.darkX    },
        light:   { color: colors.lightX   },
        gray:    { color: colors.grayX    },
    },

    }
}
