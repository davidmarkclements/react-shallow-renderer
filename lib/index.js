'use strict';

var _require = require('react-addons-test-utils');

var createRenderer = _require.createRenderer;

var render = function render(element) {
  var renderer = createRenderer();
  renderer.render(element);
  return renderer.getRenderOutput();
};
render.createRenderer = createRenderer;
render.render = render;
module.exports = render;

