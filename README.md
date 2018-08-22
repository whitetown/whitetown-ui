# whitetown-ui

This is a JS-only components library for React Native.

<p align="center">
<img src="https://raw.githubusercontent.com/whitetown/whitetown-ui-demo/master/screenshots/ios-ui.gif" alt="ios demo">
<br/>
<img src="https://raw.githubusercontent.com/whitetown/whitetown-ui-demo/master/screenshots/android-ui.gif" alt="android demo">
</p>


* Container
* Content
* Text
* Icon
* Button
* Spinner
* Segments
* Avatar, AvatarPlaceholder
* List, ListItem
* Left, Body, Right, Row, Col
* Space
* Card, CardItem
* Form, Item, Label, Input, Textarea
* Header
* TabControl, Tab, TabHeader
* Footer, FooterTab


## Supported versions

It was developed with:

    "react": "16.3.1"
    "react-native": "0.55.3"

However it does not rely on any specific RN features and has to support previous and future versions as well.


## Dependencies

It does not depend on other libraries (almost).
It uses:
* [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) Ionicons


## Installation

Installation can be done through ``npm`` or `yarn`:

```shell
npm i whitetown-ui --save
```

```shell
yarn add whitetown-ui
```

Then you need to install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation)


## Usage


```jsx
import { Container, Content, Card, CardItem, Text, Button } from 'whitetown-ui'

return (
    <Container>
        <Content sm>
            <Card success>
                <CardItem>
                    <Text bold>Why?</Text>
                    <Text>- I do not want to write style={'{all the time}'}</Text>
                    <Text>- I need a simple way to switch between color themes or change sizes/paddings</Text>
                    <Text>- I prefer to have as less as possible dependencies</Text>
                </CardItem>
            </Card>

            <Card danger md>
                <CardItem>
                    <Text bold>Do I know about other libraries?</Text>
                    <Text>Sure!</Text>
                    <Text>First I was inspired with native-base, react-native-elements, ...</Text>
                </CardItem>
            </Card>

            <Text bold md>Basic approach</Text>

            <Card >
                <CardItem>
                    <Text bold>Sizes / paddings</Text>
                    <Text>Most components accept props:</Text>
                    <Row style={{ justifyContent: 'space-around', alignItems:'center' }}>
                        <Text xs>xs</Text>
                        <Text sm>sm</Text>
                        <Text md>md</Text>
                        <Text lg>lg</Text>
                    </Row>
                    <Text>For Text, Icon, Avatar, Spinner - this is size (fontSize)</Text>
                    <Text>For Button, ListItem, Item, Input, Space - this is height</Text>
                    <Text>For Views - this is padding</Text>
                </CardItem>
            </Card>

            <Card >
                <CardItem>
                    <Text bold>Colors</Text>
                    <Text>Many components accept color props:</Text>
                        <Text>default</Text>
                        <Text primary>primary</Text>
                        <Text info>info</Text>
                        <Text success>success</Text>
                        <Text danger>danger</Text>
                        <Text warning>warning</Text>
                        <Text dark>dark</Text>
                        <Text light>light</Text>
                        <Text note>note (not only color but size as well)</Text>
                        <Space xs />
                        <Text>Besides there are a few common colors, such as 'headerColor', 'appBackground', 'alternate', etc.. which are used indirectly</Text>
                </CardItem>
            </Card>

            <Card warning>
                <CardItem>
                    <Text bold>Any plans?</Text>
                    <Text>For now the library contains components which I needed for my last project in React Native, however I plan to add a few more</Text>
                </CardItem>
            </Card>

            <Button onPress={()=>{ Linking.openURL('https://github.com/whitetown/whitetown-ui') }} >
                <Text>Feedback? :-)</Text>
            </Button>

        </Content>
    </Container>
)

```

### Demo project

[Demo](https://github.com/whitetown/whitetown-ui-demo)

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
