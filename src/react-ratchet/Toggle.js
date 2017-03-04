'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var ReactDOM = require('react-dom');
var cx = require('classnames');

var Toggle = (function (_React$Component) {
  function Toggle(props, context) {
    _classCallCheck(this, Toggle);

    _get(Object.getPrototypeOf(Toggle.prototype), 'constructor', this).call(this, props, context);
    this.handleToggle = this.handleToggle.bind(this);
  }

  _inherits(Toggle, _React$Component);

  _createClass(Toggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // ensure ratchet toggles initialised
      require('../vendor/toggles');
      ReactDOM.findDOMNode(this.refs.toggle).addEventListener('toggle', this.handleToggle);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ReactDOM.findDOMNode(this.refs.toggle).removeEventListener('toggle', this.handleToggle);
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle(e) {
      var inverse = !this.props.active;
      if (e.detail.isActive == inverse) {
        this.props.onToggle(inverse);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var extraClasses = [];
      if (this.props.active) extraClasses.push('active');
      var className = cx.apply(null, [this.props.className, 'toggle'].concat(extraClasses));

      return React.createElement(
        'div',
        _extends({}, this.props, { className: className, ref: 'toggle' }),
        React.createElement('div', { className: 'toggle-handle' })
      );
    }
  }]);

  return Toggle;
})(React.Component);

module.exports = Toggle;