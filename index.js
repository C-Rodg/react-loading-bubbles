"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Libraries
// Component
var LoadingBubbles = function LoadingBubbles(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#2c7594" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 128 : _ref$size;
  var style = {
    fill: color,
    height: size,
    width: size,
    margin: '20px auto'
  };
  return _react["default"].createElement("div", {
    className: "svg-loading-icon",
    style: style
  }, _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, _react["default"].createElement("circle", {
    transform: "translate(8 0)",
    cx: "0",
    cy: "16",
    r: "0"
  }, _react["default"].createElement("animate", {
    attributeName: "r",
    values: "0; 4; 0; 0",
    dur: "1.2s",
    repeatCount: "indefinite",
    begin: "0",
    keyTimes: "0;0.2;0.7;1",
    keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
    calcMode: "spline"
  })), _react["default"].createElement("circle", {
    transform: "translate(16 0)",
    cx: "0",
    cy: "16",
    r: "0"
  }, _react["default"].createElement("animate", {
    attributeName: "r",
    values: "0; 4; 0; 0",
    dur: "1.2s",
    repeatCount: "indefinite",
    begin: "0.3",
    keyTimes: "0;0.2;0.7;1",
    keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
    calcMode: "spline"
  })), _react["default"].createElement("circle", {
    transform: "translate(24 0)",
    cx: "0",
    cy: "16",
    r: "0"
  }, _react["default"].createElement("animate", {
    attributeName: "r",
    values: "0; 4; 0; 0",
    dur: "1.2s",
    repeatCount: "indefinite",
    begin: "0.6",
    keyTimes: "0;0.2;0.7;1",
    keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
    calcMode: "spline"
  }))));
};

var _default = LoadingBubbles;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Root
var modalRoot = document.body; // Component

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      modalRoot.appendChild(this.el);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _reactDom.createPortal)(this.props.children, this.el);
    }
  }]);

  return Modal;
}(_react.Component);

var _default = Modal;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _LoadingBubbles = _interopRequireDefault(require("./LoadingBubbles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 280px;\n\theight: 280px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0 auto;\n\tbackground-color: #fff;\n\tborder-radius: 6px;\n\tcolor: #333;\n\ttext-align: left;\n\tpadding: 15px;\n\tflex-direction: column;\n\tbox-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.15);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: fixed;\n\tz-index: 99;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tpadding: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.75);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styles
var ModalWrapper = _styledComponents["default"].div(_templateObject());

var ModalCard = _styledComponents["default"].div(_templateObject2()); // Components


function LoadingModal(_ref) {
  var size = _ref.size,
      color = _ref.color;
  return _react["default"].createElement(_Modal["default"], null, _react["default"].createElement(ModalWrapper, null, _react["default"].createElement(ModalCard, null, _react["default"].createElement(_LoadingBubbles["default"], {
    size: size,
    color: color
  }))));
}

var _default = LoadingModal;
exports["default"] = _default;
