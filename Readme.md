# React Shallow Renderer

Simple wrapper for `react-addons-test-utils`
`createRenderer` method. 

If all you want to do is render a single component 
and test output the instantiation to render operation
to output getter process can be somewhat verbose.

## API

### Render

Module exports a function, use the function to shallow
render a React component.

```js
const render = require('react-shallow-renderer')
const MyCmp = require('MyCmp')
const renderedCmp = render(<MyCmp/>)
```

### Re-Render

There's times where you want to test a side effect
(e.g. a state change after `onClick`). 

The returned component is also a function, to 
re-render simply call the component:

```js
const renderedCmp = render(<MyCmp/>)
renderedCmp.props.children[0].props.onClick()
rendererCmp() //boom: re-rendered.
```

If that's a little too terse, there's also the
`render` method which does the same thing.

```js
const renderedCmp = render(<MyCmp/>)
renderedCmp.props.children[0].props.onClick()
rendererCmp.render()
```

Re-rendering causes the component object to mutate,
there's no need to reassign (although the component 
is returned so if you prefer that style feel free):

```js
let renderedCmp = render(<MyCmp/>)
renderedCmp.props.children[0].props.onClick()
renderedCmp = rendererCmp.render() //same thing
```

### `createRenderer`

Just in case we ever need the raw `createRenderer`, it's attached
to the module for convenience.

This example does the same as the re-render example above

```js
const {createRenderer} = require('react-shallow-renderer')
let MyCmp = require('MyCmp')
const renderer = createRenderer()
renderer.render(<MyCmp/>)
let renderedCmp = renderer.getRenderOutput()
//run a click event that sets state etc.
renderedCmp.props.children[0].props.onClick()
//view re-render with new state
renderedCmp = renderer.getRenderOutput()
```


## Info
See <https://facebook.github.io/react/docs/test-utils.html#shallow-rendering> for background info on shallow rendering.

## Credit

* Sponsored by [nearForm](http://nearform.com)