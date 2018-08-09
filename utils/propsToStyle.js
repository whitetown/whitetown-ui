/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function propsToStyle(componentName, theme, props) {

    const keys   = Object.keys(props)
    const values = Object.values(props)

    const componentStyles = theme[componentName] || {}

    const result = Object.assign({}, componentStyles['default'])

    keys.map( (k, i) => {

        if (!values[i]) return

        const propStyles = componentStyles[k]
        if (propStyles) {

            const propKeys   = Object.keys(propStyles)
            propKeys.map( (key, index) => {
                result[key] = propStyles[key]
            })

        }
    })

    return Object.keys(result).length ? result : null
}
