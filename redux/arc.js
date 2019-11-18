/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { AsyncStorage, View } from 'react-native'

import getTheme from '../utils/getTheme'

const CONSTANTS = {
    theme: {
        themeKey:   'themeKey',
        setTheme:   'setTheme',
        saveTheme:  'saveTheme',
        restoreTheme: 'restoreTheme',
    },
}

const defaultTheme = getTheme()

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

function getNavigationOptions( theme ) {

    const colors = theme.defaultValues.colors

    return {
        headerStyle: {
            backgroundColor: hexToRGB(colors.headerColor, colors.headerOpacity),
        },
        headerTintColor: colors.headerTintColor,
        headerTitleStyle: {
            color: colors.headerTitle,
        },
        headerTransparent: colors.headerOpacity < 1,
        headerBackTitle: null,
        }

}

const initialState = {
    theme: defaultTheme,
    navigationOptions: getNavigationOptions( defaultTheme ),
    contentOffset: 0,
}

//actions

function setTheme(theme) {
    const navigationOptions = getNavigationOptions( theme )
    const contentOffset = theme.defaultValues.colors.headerOpacity < 1 ? (theme.systemValues.isIOS ? theme.systemValues.statusBarHeight : 0) + theme.systemValues.navigationBarHeight : 0
    return {
        type: CONSTANTS.theme.setTheme,
        theme,
        navigationOptions,
        // childNavigationOptions,
        contentOffset,
    }
}

function saveTheme(themeName) {

    return (dispatch) => {

        if (themeName)
            AsyncStorage.setItem(CONSTANTS.theme.themeKey, themeName)
        else
            AsyncStorage.setItem(CONSTANTS.theme.themeKey, 'default')
    //    AsyncStorage.removeItem(CONSTANTS.theme.themeKey)
    }
}

function restoreTheme( themesArray, defTheme = null ) {

    return (dispatch) => {

        AsyncStorage.getItem(CONSTANTS.theme.themeKey)
        .then( (result) => {
            if (result) {
                if (result === 'default') return
                const colors = themesArray[result]
                if (colors) dispatch( setTheme( getTheme(result, colors) ) )
            } else {
                if (defTheme) {
                const colors = themesArray[defTheme]
                if (colors) {
                    dispatch( setTheme( getTheme(result, colors) ) )
                    dispatch( saveTheme( defTheme ) )
                    }
                }
            }
        })

    }
}

function checkThemeChange(N, O = null, rootLevel = false) {
    const n_theme = N.theme ? N.theme.theme||{} : {}

    if (O) {
        const o_theme = O.theme ? O.theme.theme||{} : {}
        if (n_theme.name === o_theme.name) return
//        if (N.theme.navigationOptions === O.theme.navigationOptions) return
    }

    N.navigation.setParams({ navigationOptions: N.theme.navigationOptions })
}

//reducer

function themeReducer(state = initialState, action) {

    switch (action.type) {

        case CONSTANTS.theme.setTheme:
            return {
                ...state,
                theme: action.theme,
                navigationOptions: action.navigationOptions,
                contentOffset: action.contentOffset,
            }
        default:
            return state
    }
}

export {
    CONSTANTS,
    checkThemeChange,
    setTheme,
    saveTheme,
    restoreTheme,
    themeReducer as theme,
}
