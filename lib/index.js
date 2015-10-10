'use strict';

var _require = require('react-addons-test-utils');

var createRenderer = _require.createRenderer;

var wrap = function wrap(renderer) {
  var render = function render() {
    return Object.assign(render, renderer.getRenderOutput());
  };
  Object.setPrototypeOf(render, { render: render });
  render();
  return render;
};

var render = function render(element) {
  var renderer = createRenderer();
  renderer.render(element);
  return wrap(renderer);
};
render.createRenderer = createRenderer;
render.render = render;
module.exports = render;

