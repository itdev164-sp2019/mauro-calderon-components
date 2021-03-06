'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n   ', ';\n\n'], ['\n   ', ';\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonBase = require('./ButtonBase');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = (0, _styledComponents2.default)(_ButtonBase.ButtonBase)(_templateObject, function (props) {
   return props.theme.variants.button[props.variant || 'primary'];
});

var Button = exports.Button = function Button(props) {
   return _react2.default.createElement(StyledButton, props);
};

Button.prototype = {
   variant: _propTypes2.default.string
};

//# sourceMappingURL=Button.js.map