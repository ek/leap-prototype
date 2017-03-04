'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');

var Button = (function (_React$Component) {
  function Button() {
    _classCallCheck(this, Button);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Button, _React$Component);

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var extraClasses = [];
      if (this.props.block) extraClasses.push('btn-block');
      if (this.props.outlined) extraClasses.push('btn-outlined');
      if (this.props.rStyle) extraClasses.push('btn-' + this.props.rStyle);
      var className = cx.apply(null, [this.props.className, 'btn'].concat(extraClasses));

      var Component = this.props.href ? 'a' : 'button';

      return React.createElement(Component, _extends({}, this.props, {
        className: className
      }));
    }
  }]);

  return Button;
})(React.Component);

module.exports = Button;