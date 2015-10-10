# React Shallow Renderer

Simple wrapper for `react-addons-test-utils`
`createRenderer` method. 

If all you want to do is render a single component 
and test output the instantiation to render operation
to output getter process can be somewhat verbose.

## API

Module exports a function, use the function to shallow
render a React component.

```js
const render = require('react-shallow-renderer')
const MyCmp = require('MyCmp')
const renderedCmp = render(<MyCmp/>)
```

### `createRenderer`

Just in case there is a scenario where we need a multi-stage
shallow render process, we also attach the `createRenderer` function
from `react-addons-test-utils` for convenience.

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