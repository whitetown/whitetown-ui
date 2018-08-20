/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import defaultTheme from '../themes/defaultTheme'
import defaultValues from '../themes/defaultValues'
import systemValues from './getSytemValues'

import ColorsCategory from '../themes/categories/colors'
import ViewsCategory from '../themes/categories/views'
import BasicCategory from '../themes/categories/basics'
import AvatarCategory from '../themes/categories/avatar'
import ListCategory from '../themes/categories/lists'
import TabsCategory from '../themes/categories/tabs'
import FormsCategory from '../themes/categories/forms'
import HeaderCategory from '../themes/categories/header'

export default function getTheme(name = null, c = null, v = null ) {

    if (!v && !c) return defaultTheme

    const values = Object.assign({}, v||defaultValues)
    if (c) values['colors'] = c

    return {

        name:   name,

        defaultValues: values,
        systemValues: systemValues,

        ...ColorsCategory(values),
        ...ViewsCategory(values),
        ...BasicCategory(values),
        ...AvatarCategory(values),
        ...ListCategory(values),
        ...FormsCategory(values),
        ...TabsCategory(values),
        ...HeaderCategory(values),

    }

}
