const {createRenderer} = require('react-addons-test-utils')
const render = element => {
  const renderer = createRenderer()
  renderer.render(element)
  return renderer.getRenderOutput()
}
render.createRenderer = createRenderer
render.render = render
module.exports = render