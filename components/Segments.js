/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import {
    View,
} from 'react-native'

import WhiteTownComponent from './WhiteTownComponent'
import propsToStyle from '../utils/propsToStyle'

import Button from './Button'
import Text from './Text'

class Segments extends WhiteTownComponent {

    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: props.value||0,
        }
    }

    componentWillReceiveProps(props) {
        if (props.value !== this.state.selectedSegment) {
            this.setState({
                selectedIndex:props.value,
            })
        }
    }


    selectSegment(index) {

        this.setState({
            selectedIndex:index,
        })

        if (this.props.onChangeSegment)
            this.props.onChangeSegment(index)
    }

    render() {

        const theme = this.getCurrentTheme()

        let sStyle = {
            ...propsToStyle( 'Segments', theme, this.props ),
            ...this.props.style
        }

        return (
            <View style={sStyle} >
                {
                    this.props.items.map( (item, index) => {

                        let bStyle = { marginLeft: index ? 1 : 0 }
                        if (this.props.ratio)
                            bStyle['flex'] = this.props.ratio[index]

                        return (
                            <Button key={index}
                                xs={this.props.xs} sm={this.props.sm} md={this.props.md} lg={this.props.lg}
                                full noheight
                                theme={theme}
                                style={bStyle}
                                primary={index===this.state.selectedIndex}
                                info={index!==this.state.selectedIndex}
                                onPress={()=>this.selectSegment(index)} >
                                <Text>{item}</Text>
                            </Button>
                        )
                    })
                }
            </View>
        )
    }
}

export default Segments
