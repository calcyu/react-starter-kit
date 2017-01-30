webpackJsonp([3],{

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(597);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(601);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(602);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(606);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(607);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\admin\\Admin.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(622);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Admin = __webpack_require__(786);

  var _Admin2 = _interopRequireDefault(_Admin);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Admin = function (_React$Component) {
    (0, _inherits3.default)(Admin, _React$Component);

    function Admin() {
      (0, _classCallCheck3.default)(this, Admin);
      return (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).apply(this, arguments));
    }

    (0, _createClass3.default)(Admin, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Admin2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Admin2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              '...'
            )
          )
        );
      }
    }]);
    return Admin;
  }(_react2.default.Component);

  Admin.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Admin2.default)(Admin);

/***/ },

/***/ 786:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(787);
      var insertCss = __webpack_require__(627);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Admin.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Admin.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Admin-root-21eHv {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Admin-container-2OPjM {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/admin/Admin.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Admin.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Admin-root-21eHv",
  	"container": "Admin-container-2OPjM"
  };

/***/ }

});
//# sourceMappingURL=admin.chunk.js.map