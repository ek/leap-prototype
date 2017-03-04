'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var React = require('react');
var cx = require('classnames');

var Icon = (function (_React$Component) {
  function Icon() {
    _classCallCheck(this, Icon);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Icon, _React$Component);

  _createClass(Icon, [{
    key: 'getIconClasses',
    value: function getIconClasses() {
      var props = this.props;
      return _Object$keys(props).filter(function (propName) {
        return props[propName] === true;
      }).map(function (iconName) {
        return 'icon-' + iconName;
      }).join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type;

      var typeClassName = type ? 'icon-' + type : null;
      return React.createElement('span', _extends({}, this.props, {
        className: cx(this.props.className, this.getIconClasses(), typeClassName, 'icon')
      }));
    }
  }]);

  return Icon;
})(React.Component);

module.exports = Icon;