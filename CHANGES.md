
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
