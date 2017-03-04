'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');
var cx = require('classnames');

var TableViewCell = (function (_React$Component) {
  function TableViewCell() {
    _classCallCheck(this, TableViewCell);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TableViewCell, _React$Component);

  _createClass(TableViewCell, [{
    key: 'getChevronDirection',
    value: function getChevronDirection() {
      if (this.props.navigateLeft) {
        return 'left';
      } else if (this.props.navigateRight) {
        return 'right';
      } else {
        return null;
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var chevronDirection = this.getChevronDirection();
      if (this.props.href || chevronDirection) {
        var classes = chevronDirection ? 'navigate-' + chevronDirection : null;
        return React.createElement('a', {
          href: this.props.href,
          className: classes,
          children: this.props.children
        });
      } else {
        return this.props.children;
      }
    }
  }, {
    key: 'renderDivider',
    value: function renderDivider() {
      return React.createElement('li', _extends({}, this.props, {
        className: cx(this.props.className, 'table-view-divider'),
        children: this.props.children,
        href: null
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.divider) {
        return this.renderDivider();
      }

      return React.createElement('li', _extends({}, this.props, {
        className: cx(this.props.className, 'table-view-cell'),
        children: this.renderChildren()
      }));
    }
  }]);

  return TableViewCell;
})(React.Component);

module.exports = TableViewCell;