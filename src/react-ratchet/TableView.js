'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');

var TableView = (function (_React$Component) {
  function TableView() {
    _classCallCheck(this, TableView);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TableView, _React$Component);

  _createClass(TableView, [{
    key: 'render',
    value: function render() {
      return React.createElement('ul', _extends({}, this.props, {
        className: cx(this.props.className, 'table-view')
      }));
    }
  }]);

  return TableView;
})(React.Component);

module.exports = TableView;