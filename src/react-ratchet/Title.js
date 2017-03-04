'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');

var Title = (function (_React$Component) {
  function Title() {
    _classCallCheck(this, Title);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Title, _React$Component);

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      return React.createElement('h1', _extends({}, this.props, { className: cx(this.props.className, 'title') }));
    }
  }]);

  return Title;
})(React.Component);

module.exports = Title;