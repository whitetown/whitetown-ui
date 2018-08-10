/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { connect }   from 'react-redux'

import {
    defaultValues,
    systemValues,

    Container,
    Content,

    Text,
    Icon,
    Button,
    Spinner,

    List,
    ListItem,

    Space,
    Row,
    Col,
    Body,
    Left,
    Right,

    Avatar,
    AvatarPlaceholder,

    Card,
    CardItem,

    Form,
    Item,
    Label,
    Input,
    Textarea,

    TabControl,
    Tab,
    TabHeader,

    Footer,
    FooterTab,

    getTheme,

} from '../index'


function mapStateToProps(state) { return { theme: state.theme.theme } }

function wtConnect( c ) {

    return connect(
        mapStateToProps,
        null,
        null,
        {
            withRef: true,
            getDisplayName: ()=> c.displayName,
        }
    )(c)
}

const ContainerX = wtConnect(Container)
const ContentX = wtConnect(Content)

const TextX = wtConnect(Text)
const IconX = wtConnect(Icon)
const ButtonX = wtConnect(Button)
const SpinnerX = wtConnect(Spinner)

const ListX = wtConnect(List)
const ListItemX = wtConnect(ListItem)

const SpaceX = wtConnect(Space)
const RowX = wtConnect(Row)
const ColX = wtConnect(Col)
const BodyX = wtConnect(Body)
const LeftX = wtConnect(Left)
const RightX = wtConnect(Right)

const AvatarX = wtConnect(Avatar)
const AvatarPlaceholderX = wtConnect(AvatarPlaceholder)

const CardX = wtConnect(Card)
const CardItemX = wtConnect(CardItem)

const FormX = wtConnect(Form)
const ItemX = wtConnect(Item)
const LabelX = wtConnect(Label)
const InputX = wtConnect(Input)
const TextareaX = wtConnect(Textarea)

const TabControlX = wtConnect(TabControl)
const TabX = wtConnect(Tab)
const TabHeaderX = wtConnect(TabHeader)

const FooterX = wtConnect(Footer)
const FooterTabX = wtConnect(FooterTab)

export {
    defaultValues,
    systemValues,

    ContainerX as Container,
    ContentX as Content,

    TextX as Text,
    IconX as Icon,
    ButtonX as Button,
    SpinnerX as Spinner,

    ListX as List,
    ListItemX as ListItem,

    SpaceX as Space,
    RowX as Row,
    ColX as Col,
    BodyX as Body,
    LeftX as Left,
    RightX as Right,

    AvatarX as Avatar,
    AvatarPlaceholderX as AvatarPlaceholder,

    CardX as Card,
    CardItemX as CardItem,

    FormX as Form,
    ItemX as Item,
    LabelX as Label,
    InputX as Input,
    TextareaX as Textarea,

    TabControlX as TabControl,
    TabX as Tab,
    TabHeaderX as TabHeader,

    FooterX as Footer,
    FooterTabX as FooterTab,

    getTheme,
}
