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

    WhiteTownComponent,
    ThemeProvider,

    Container,
    Content,

    Text,
    Icon,
    Button,
    Spinner,
    Segments,

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

    Header,

    Footer,
    FooterTab,

    getTheme,

} from '../index'

import {
    checkThemeChange
} from './arc'

function mapStateToProps(state) { return { theme: state.theme.theme } }

function wtConnect( c ) {

    return connect(
        mapStateToProps,
        null,
        null,
        {
            forwardRef: true,
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
const SegmentsX = wtConnect(Segments)

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

const HeaderX = wtConnect(Header)

const FooterX = wtConnect(Footer)
const FooterTabX = wtConnect(FooterTab)

export {
    defaultValues,
    systemValues,

    WhiteTownComponent,
    ThemeProvider,

    ContainerX as Container,
    ContentX as Content,

    TextX as Text,
    IconX as Icon,
    ButtonX as Button,
    SpinnerX as Spinner,
    SegmentsX as Segments,

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

    HeaderX as Header,

    FooterX as Footer,
    FooterTabX as FooterTab,

    getTheme,
    checkThemeChange,
}
