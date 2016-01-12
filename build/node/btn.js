'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _element = require('./_element');

var _element2 = _interopRequireDefault(_element);

var _css = require('./_css');

var _css2 = _interopRequireDefault(_css);

var Btn = (function (_Component) {
  _inherits(Btn, _Component);

  function Btn() {
    _classCallCheck(this, Btn);

    _get(Object.getPrototypeOf(Btn.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Btn, [{
    key: 'init',
    value: function init(_ref) {
      var _ref$type = _ref.type;
      var type = _ref$type === undefined ? 'default' : _ref$type;
      var text = _ref.text;
      var cls = _ref.cls;
      var onClick = _ref.onClick;

      this.type = type;
      this.text = text;
      this.cls = cls;
      this.onClick = onClick;
    }
  }, {
    key: 'buttonCls',
    get: function get() {
      return _css2['default']['for'](this.cls, 'btn', this.type);
    }
  }]);

  return Btn;
})(_component2['default']);

Btn.tpl = [_element2['default'], {
  tagName: 'button',
  innerText: '= text',
  className: '= buttonCls',
  onclick: '= onClick'
}];

exports['default'] = Btn;
module.exports = exports['default'];