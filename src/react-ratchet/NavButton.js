'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');
var Icon = require('./Icon');

var NavButton = (function (_React$Component) {
  function NavButton() {
    _classCallCheck(this, NavButton);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(NavButton, _React$Component);

  _createClass(NavButton, [{
    key: 'render',
    value: function render() {
      var side = this.props.right ? 'right' : 'left';
      var classes = cx(this.props.className, 'btn-nav btn-link btn pull-' + side);
      var iconClass = this.props.icon ? this.props.icon : side + '-nav';
      var icon = React.createElement(Icon, { type: iconClass });

      var Component = this.props.href ? 'a' : 'button';

      if (side == 'left') {
        return React.createElement(
          Component,
          _extends({}, this.props, { className: classes }),
          icon,
          this.props.children
        );
      } else {
        // right
        return React.createElement(
          Component,
          _extends({}, this.props, { className: classes }),
          this.props.children,
          icon
        );
      }
    }
  }]);

  return NavButton;
})(React.Component);

module.exports = NavButton;