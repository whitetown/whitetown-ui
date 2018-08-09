/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import defaultValues from './defaultValues'
import systemValues from '../utils/getSytemValues'

import ColorsCategory from './categories/colors'
import ViewsCategory from './categories/views'
import BasicCategory from './categories/basics'
import AvatarCategory from './categories/avatar'
import ListCategory from './categories/lists'
import TabsCategory from './categories/tabs'
import FormsCategory from './categories/forms'

const defaultTheme = {

    name: null,

    defaultValues: defaultValues,
    systemValues: systemValues,

    ...ColorsCategory(defaultValues),
    ...ViewsCategory(defaultValues),
    ...BasicCategory(defaultValues),
    ...AvatarCategory(defaultValues),
    ...ListCategory(defaultValues),
    ...FormsCategory(defaultValues),
    ...TabsCategory(defaultValues),

}

export default defaultTheme
