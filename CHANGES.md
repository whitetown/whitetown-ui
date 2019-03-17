
## 0.4.0

+ new colors
+ use react-native-safe-area-view, react-native-iphone-x-helper instead of own functions
+ rename prop: withRef to forwardRef
+ add function checkThemeChange
+ theme now has props 'navigationOptions' (for reactnavigation) and contentOffset ( > 0 if navigation bar is transparent )




## 0.3.0

new component <Header />

```jsx
<Header
    title={'It has to be red'}
    subtitle={'This too, but font is smaller'}
    tintColor={'green'}
    textColor={'red'}
    leftActions={[ { icon:'ios-arrow-back', action: ()=>this.props.navigation.goBack() } ]}
    rightActions={[{ text:'Got it', action: ()=>alert('I got it') } ]}
    onChangeHeight={(h)=>this.onChangeHeight(h)} />
```

## 0.2.0

new component <Segments />


```jsx
<Segments xs
    items={['To be', 'or not to be?']}
    ratio={[1,2]}
    onChangeSegment={(index)=>console.log(index)} />
```
