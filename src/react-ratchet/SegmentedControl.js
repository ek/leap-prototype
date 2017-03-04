'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var React = require('react');
var cx = require('classnames');

var SegmentedControl = (function (_React$Component) {
	function SegmentedControl() {
		_classCallCheck(this, SegmentedControl);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(SegmentedControl, _React$Component);

	_createClass(SegmentedControl, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: cx('segmented-control', this.props.className) },
				this.props.children
			);
		}
	}]);

	return SegmentedControl;
})(React.Component);

module.exports = SegmentedControl;