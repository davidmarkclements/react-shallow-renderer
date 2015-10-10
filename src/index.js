const {createRenderer} = require('react-addons-test-utils')

const wrap = renderer => {
  const render = () => {
    Object.keys(render).forEach(k => render[k] = null)
    Object.assign(render, renderer.getRenderOutput())
    return render
  }

  Object.setPrototypeOf(render, {render})
  render()
  return render
}

const render = element => {
  const renderer = createRenderer()
  renderer.render(element)
  return wrap(renderer)
}
render.createRenderer = createRenderer
render.render = render
module.exports = render