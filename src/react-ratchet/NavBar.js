'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');

var NavBar = (function (_React$Component) {
  function NavBar() {
    _classCallCheck(this, NavBar);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(NavBar, _React$Component);

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      return React.createElement('header', _extends({}, this.props, {
        className: cx(this.props.className, 'bar-nav bar')
      }));
    }
  }]);

  return NavBar;
})(React.Component);

module.exports = NavBar;