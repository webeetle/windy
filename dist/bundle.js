'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('react-proptypes');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var AlertComponent = function AlertComponent(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? "this is an alert" : _ref$message;
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("span", null, message));
};

StatelessComponent.propTypes = {
  message: PropTypes__default['default'].string
};

exports.Alert = AlertComponent;
