/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import {
    Platform,
    Dimensions,
} from "react-native"


const isAndroid = Platform.OS === 'android'
const isIOS     = Platform.OS === 'ios'

const { height, width } = Dimensions.get('window')

const isPhoneX  = (width === 375 && height === 812) || (width === 812 && height === 375)

const statusBarHeight     = isPhoneX ? 44 : 20

const footerHeightPortrait  = 49
const footerHeightLandscape = 39

const systemValues = {

    isAndroid,
    isIOS,
    isPhoneX,

    screenHeight: height,
    screenWidth:  width,

    statusBarHeight,
    footerHeightPortrait,
    footerHeightLandscape,
}

export default systemValues
