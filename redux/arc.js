/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import { AsyncStorage } from 'react-native';

import getTheme from '../utils/getTheme'

const CONSTANTS = {
    theme: {
        themeKey:   'themeKey',
        setTheme:   'setTheme',
        saveTheme:  'saveTheme',
        restoreTheme: 'restoreTheme',
    },
}

const initialState = {
    theme: getTheme(),
}

//actions

function setTheme(theme) {
    return {
        type: CONSTANTS.theme.setTheme,
        theme,
    }
}

function saveTheme(themeName) {

    return (dispatch) => {

        if (themeName)
            AsyncStorage.setItem(CONSTANTS.theme.themeKey, themeName)
        else
            AsyncStorage.removeItem(CONSTANTS.theme.themeKey)
    }
}

function restoreTheme( themesArray ) {

    return (dispatch) => {

        AsyncStorage.getItem(CONSTANTS.theme.themeKey)
        .then( (result) => {
            if (result) {
                const colors = themesArray[result]
                if (colors) dispatch( setTheme( getTheme(result, colors) ) )
            }
        })

    }
}

//reducer

function themeReducer(state = initialState, action) {

    switch (action.type) {

        case CONSTANTS.theme.setTheme:
            return {
                ...state,
                theme: action.theme,
            }
        default:
            return state
    }
}

export {
    CONSTANTS,
    setTheme,
    saveTheme,
    restoreTheme,
    themeReducer as theme,
}
