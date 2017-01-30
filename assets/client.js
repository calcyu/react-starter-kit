webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _typeof2 = __webpack_require__(1);

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _regenerator = __webpack_require__(69);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(73);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\client.js'; /**
                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                            *
                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                            *
                                                                            * This source code is licensed under the MIT license found in the
                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                            */

  // Re-render the app when window.location changes
  var onLocationChange = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(location) {
      var _this = this;

      var _ret;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Remember the latest scroll position for the previous location
              scrollPositionsHistory[currentLocation.key] = {
                scrollX: window.pageXOffset,
                scrollY: window.pageYOffset
              };
              // Delete stored scroll position for next page if any
              if (_history2.default.action === 'PUSH') {
                delete scrollPositionsHistory[location.key];
              }
              currentLocation = location;

              _context2.prev = 3;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var route;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _universalRouter2.default.resolve(routes, {
                          path: location.pathname,
                          query: _queryString2.default.parse(location.search)
                        });

                      case 2:
                        route = _context.sent;

                        if (!(currentLocation.key !== location.key)) {
                          _context.next = 5;
                          break;
                        }

                        return _context.abrupt('return', {
                          v: void 0
                        });

                      case 5:
                        if (!route.redirect) {
                          _context.next = 8;
                          break;
                        }

                        _history2.default.replace(route.redirect);
                        return _context.abrupt('return', {
                          v: void 0
                        });

                      case 8:

                        appInstance = _reactDom2.default.render(_react2.default.createElement(
                          _App2.default,
                          { context: context, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 149
                            },
                            __self: _this
                          },
                          route.component
                        ), container, function () {
                          return onRenderComplete(route, location);
                        });

                      case 9:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              })(), 't0', 5);

            case 5:
              _ret = _context2.t0;

              if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('return', _ret.v);

            case 8:
              _context2.next = 21;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t1 = _context2['catch'](3);

              console.error(_context2.t1); // eslint-disable-line no-console

              // Current url has been changed during navigation process, do nothing

              if (!(currentLocation.key !== location.key)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt('return');

            case 15:
              if (false) {
                _context2.next = 20;
                break;
              }

              appInstance = null;
              document.title = 'Error: ' + _context2.t1.message;
              _reactDom2.default.render(_react2.default.createElement(_devUtils.ErrorReporter, { error: _context2.t1, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                },
                __self: this
              }), container);
              return _context2.abrupt('return');

            case 20:

              // Avoid broken navigation in production mode by a full page reload on error
              window.location.reload();

            case 21:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 10]]);
    }));

    return function onLocationChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // Handle client-side navigation by using HTML5 History API
  // For more information visit https://github.com/mjackson/history#readme


  __webpack_require__(90);

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(415);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fastclick = __webpack_require__(561);

  var _fastclick2 = _interopRequireDefault(_fastclick);

  var _universalRouter = __webpack_require__(562);

  var _universalRouter2 = _interopRequireDefault(_universalRouter);

  var _queryString = __webpack_require__(583);

  var _queryString2 = _interopRequireDefault(_queryString);

  var _PathUtils = __webpack_require__(585);

  var _history = __webpack_require__(586);

  var _history2 = _interopRequireDefault(_history);

  var _App = __webpack_require__(596);

  var _App2 = _interopRequireDefault(_App);

  var _devUtils = __webpack_require__(612);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Global (context) variables that can be easily accessed from any React component
  // https://facebook.github.io/react/docs/context.html
  var context = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: function insertCss() {
      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      // eslint-disable-next-line no-underscore-dangle
      var removeCss = styles.map(function (x) {
        return x._insertCss();
      });
      return function () {
        removeCss.forEach(function (f) {
          return f();
        });
      };
    }
  };

  function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
    var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
    if (node && node.getAttribute(attrName) === attrValue) return;

    // Remove and create a new tag in order to make it work with bookmarks in Safari
    if (node) {
      node.parentNode.removeChild(node);
    }
    if (typeof attrValue === 'string') {
      var nextNode = document.createElement(tagName);
      nextNode.setAttribute(keyName, keyValue);
      nextNode.setAttribute(attrName, attrValue);
      document.head.appendChild(nextNode);
    }
  }
  function updateMeta(name, content) {
    updateTag('meta', 'name', name, 'content', content);
  }
  function updateCustomMeta(property, content) {
    // eslint-disable-line no-unused-vars
    updateTag('meta', 'property', property, 'content', content);
  }
  function updateLink(rel, href) {
    // eslint-disable-line no-unused-vars
    updateTag('link', 'rel', rel, 'href', href);
  }

  // Switch off the native scroll restoration behavior and handle it manually
  // https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  var scrollPositionsHistory = {};
  if (window.history && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  var onRenderComplete = function initialRenderComplete() {
    var elem = document.getElementById('css');
    if (elem) elem.parentNode.removeChild(elem);
    onRenderComplete = function renderComplete(route, location) {
      document.title = route.title;

      updateMeta('description', route.description);
      // Update necessary tags in <head> at runtime here, ie:
      // updateMeta('keywords', route.keywords);
      // updateCustomMeta('og:url', route.canonicalUrl);
      // updateCustomMeta('og:image', route.imageUrl);
      // updateLink('canonical', route.canonicalUrl);
      // etc.

      var scrollX = 0;
      var scrollY = 0;
      var pos = scrollPositionsHistory[location.key];
      if (pos) {
        scrollX = pos.scrollX;
        scrollY = pos.scrollY;
      } else {
        var targetHash = location.hash.substr(1);
        if (targetHash) {
          var target = document.getElementById(targetHash);
          if (target) {
            scrollY = window.pageYOffset + target.getBoundingClientRect().top;
          }
        }
      }

      // Restore the scroll position if it was saved into the state
      // or scroll to the given #hash anchor
      // or scroll to top of the page
      window.scrollTo(scrollX, scrollY);

      // Google Analytics tracking. Don't send 'pageview' event after
      // the initial rendering, as it was already sent
      if (window.ga) {
        window.ga('send', 'pageview', (0, _PathUtils.createPath)(location));
      }
    };
  };

  // Make taps on links and buttons work fast on mobiles
  _fastclick2.default.attach(document.body);

  var container = document.getElementById('app');
  var appInstance = void 0;
  var currentLocation = _history2.default.location;
  var routes = __webpack_require__(619).default;_history2.default.listen(onLocationChange);
  onLocationChange(currentLocation);

  // Enable Hot Module Replacement (HMR)
  if (false) {
    module.hot.accept('./routes', function () {
      routes = require('./routes').default; // eslint-disable-line global-require

      if (appInstance) {
        try {
          // Force-update the whole tree, including components that refuse to update
          (0, _devUtils.deepForceUpdate)(appInstance);
        } catch (error) {
          appInstance = null;
          document.title = 'Hot Update Error: ' + error.message;
          _reactDom2.default.render(_react2.default.createElement(_devUtils.ErrorReporter, { error: error, __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: undefined
          }), container);
          return;
        }
      }

      onLocationChange(currentLocation);
    });
  }

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createBrowserHistory = __webpack_require__(587);

  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (true) && (0, _createBrowserHistory2.default)(); /**
                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                   *
                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                   *
                                                                                   * This source code is licensed under the MIT license found in the
                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                   */

/***/ },

/***/ 596:
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

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired
  };

  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(
   *     <App context={context}>
   *       <Layout>
   *         <LandingPage />
   *       </Layout>
   *     </App>,
   *     container,
   *   );
   */
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var App = function (_React$PureComponent) {
    (0, _inherits3.default)(App, _React$PureComponent);

    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        return _react2.default.Children.only(this.props.children);
      }
    }]);
    return App;
  }(_react2.default.PureComponent);

  App.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  };
  App.childContextTypes = ContextType;
    exports.default = App;

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /* eslint-disable global-require */

  if (true) {
    module.exports = {
      // The red box (aka red screen of death) component to display your errors
      // https://github.com/commissure/redbox-react
      ErrorReporter: __webpack_require__(613).default,

      // Force-updates React component tree recursively
      // https://github.com/gaearon/react-deep-force-update
      deepForceUpdate: __webpack_require__(618)
    };
    }

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(69);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(73);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /* eslint-disable global-require */

  // The top-level (parent) route
  exports.default = {

    path: '/',

    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(620).default, __webpack_require__(762).default, __webpack_require__(769).default, __webpack_require__(773).default, __webpack_require__(777).default, __webpack_require__(782).default, __webpack_require__(784).default, __webpack_require__(788).default, __webpack_require__(799).default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(810).default],

    action: function action(_ref) {
      var _this = this;

      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();

              case 2:
                route = _context.sent;


                // Provide default values for title, description etc.
                route.title = '' + (route.title || 'Untitled Page');
                route.description = route.description || '';

                return _context.abrupt('return', route);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(69);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(73);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\home\\index.js'; /**
                                                                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                         *
                                                                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                         *
                                                                                         * This source code is licensed under the MIT license found in the
                                                                                         * LICENSE.txt file in the root directory of this source tree.
                                                                                         */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Home = __webpack_require__(621);

  var _Home2 = _interopRequireDefault(_Home);

  var _fetch = __webpack_require__(757);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/react-starter-kit/',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const resp = await fetch('/graphql', {
                //   method: 'post',
                //   headers: {
                //     Accept: 'application/json',
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify({
                //     query: '{news{title,link,contentSnippet}}',
                //   }),
                //   credentials: 'include',
                // });
                // const { data } = await resp.json();
                data = {};

                data.news = [{ title: '张三', uid: '1', description: '四姓18家' }, { title: '李四', uid: '2', description: '四姓18家' }, { title: '王五', uid: '3', description: '四姓18家' }, { title: '赵六', uid: '4', description: '四姓18家' }];

                if (!(!data || !data.news)) {
                  _context.next = 4;
                  break;
                }

                throw new Error('Failed to load the news feed.');

              case 4:
                return _context.abrupt('return', {
                  title: '微信',
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Home2.default, { news: data.news, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      },
                      __self: _this
                    })
                  )
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },

/***/ 621:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\home\\Home.js'; /**
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

  var _Home = __webpack_require__(624);

  var _Home2 = _interopRequireDefault(_Home);

  var _nameDB = __webpack_require__(637);

  var _nameDB2 = _interopRequireDefault(_nameDB);

  var _reactWeui = __webpack_require__(638);

  var _reactWeui2 = _interopRequireDefault(_reactWeui);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var appMsgIcon = _react2.default.createElement('img', { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  });

  var SearchBar = _reactWeui2.default.SearchBar,
      Panel = _reactWeui2.default.Panel,
      PanelHeader = _reactWeui2.default.PanelHeader,
      PanelBody = _reactWeui2.default.PanelBody,
      MediaBox = _reactWeui2.default.MediaBox,
      MediaBoxBody = _reactWeui2.default.MediaBoxBody,
      MediaBoxTitle = _reactWeui2.default.MediaBoxTitle,
      MediaBoxDescription = _reactWeui2.default.MediaBoxDescription,
      PanelFooter = _reactWeui2.default.PanelFooter,
      MediaBoxHeader = _reactWeui2.default.MediaBoxHeader,
      Cell = _reactWeui2.default.Cell,
      CellBody = _reactWeui2.default.CellBody,
      CellFooter = _reactWeui2.default.CellFooter;


  var CellMore = function CellMore() {
    return _react2.default.createElement(
      Cell,
      { access: true, link: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: undefined
      },
      _react2.default.createElement(
        CellBody,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        },
        'More'
      ),
      _react2.default.createElement(CellFooter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: undefined
      })
    );
  };

  var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Home);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        searchText: '',
        results: []
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Home, [{
      key: 'handleChange',
      value: function handleChange(text, e) {
        var keywords = [text];
        var results = _nameDB2.default.filter(/./.test.bind(new RegExp(keywords.join('|'), 'i')));

        if (results.length > 3) results = results.slice(0, 3);
        this.setState({
          results: results,
          searchText: text
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          },
          _react2.default.createElement(SearchBar, {
            onChange: this.handleChange.bind(this),
            placeholder: 'Search',
            lang: {
              cancel: 'Cancel'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }),
          _react2.default.createElement(
            Panel,
            { style: { display: this.state.searchText ? 'none' : null, marginTop: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                },
                __self: this
              },
              this.props.news.length > 0 ? this.props.news.map(function (item, i) {
                return _react2.default.createElement(
                  MediaBox,
                  { key: i, type: 'appmsg', href: 'javascript:void(0);', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    },
                    __self: _this2
                  },
                  _react2.default.createElement(
                    MediaBoxHeader,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                      },
                      __self: _this2
                    },
                    appMsgIcon
                  ),
                  _react2.default.createElement(
                    MediaBoxBody,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      },
                      __self: _this2
                    },
                    _react2.default.createElement(
                      MediaBoxTitle,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 85
                        },
                        __self: _this2
                      },
                      item.title
                    ),
                    _react2.default.createElement(
                      MediaBoxDescription,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 86
                        },
                        __self: _this2
                      },
                      item.description
                    )
                  )
                );
              }) : _react2.default.createElement(
                MediaBox,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                },
                'Can\'t find any\uFF01'
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            { style: { display: this.state.searchText ? null : 'none', marginTop: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            },
            _react2.default.createElement(
              PanelHeader,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98
                },
                __self: this
              },
              'Female Name Search'
            ),
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
                },
                __self: this
              },
              this.state.results.length > 0 ? this.state.results.map(function (item, i) {
                return _react2.default.createElement(
                  MediaBox,
                  { key: i, type: 'appmsg', href: 'javascript:void(0);', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    },
                    __self: _this2
                  },
                  _react2.default.createElement(
                    MediaBoxHeader,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                      },
                      __self: _this2
                    },
                    appMsgIcon
                  ),
                  _react2.default.createElement(
                    MediaBoxBody,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                      },
                      __self: _this2
                    },
                    _react2.default.createElement(
                      MediaBoxTitle,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 109
                        },
                        __self: _this2
                      },
                      item
                    ),
                    _react2.default.createElement(
                      MediaBoxDescription,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 110
                        },
                        __self: _this2
                      },
                      'You may like this name.'
                    )
                  )
                );
              }) : _react2.default.createElement(
                MediaBox,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                  },
                  __self: this
                },
                'Can\'t find any\uFF01'
              )
            ),
            _react2.default.createElement(
              PanelFooter,
              { href: 'javascript:void(0);', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                },
                __self: this
              },
              _react2.default.createElement(CellMore, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Home;
  }(_react2.default.Component);

  Home.propTypes = {
    news: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      title: _react.PropTypes.string.isRequired,
      contentSnippet: _react.PropTypes.string
    })).isRequired
  };
    exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(625);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Home-root-3mfpA {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home-container-2ac9n {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home-news-1G-yc {\n  padding: 0;\n}\n\n.Home-newsItem-3n-W5 {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.Home-newsTitle-PdodP {\n  font-size: 1.125em;\n}\n\n.Home-newsTitle-PdodP,\n.Home-newsDesc-1JFUn {\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.news {\n  padding: 0;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Home-root-3mfpA",
  	"container": "Home-container-2ac9n",
  	"news": "Home-news-1G-yc",
  	"newsItem": "Home-newsItem-3n-W5",
  	"newsTitle": "Home-newsTitle-PdodP",
  	"newsDesc": "Home-newsDesc-1JFUn"
  };

/***/ },

/***/ 637:
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var data = ["Aaren", "Aarika", "Abagael", "Abagail", "Abbe", "Abbey", "Abbi", "Abbie", "Abby", "Abbye", "Abigael", "Abigail", "Abigale", "Abra", "Ada", "Adah", "Adaline", "Adan", "Adara", "Adda", "Addi", "Addia", "Addie", "Addy", "Adel", "Adela", "Adelaida", "Adelaide", "Adele", "Adelheid", "Adelice", "Adelina", "Adelind", "Adeline", "Adella", "Adelle", "Adena", "Adey", "Adi", "Adiana", "Adina", "Adora", "Adore", "Adoree", "Adorne", "Adrea", "Adria", "Adriaens", "Adrian", "Adriana", "Adriane", "Adrianna", "Adrianne", "Adriena", "Adrienne", "Aeriel", "Aeriela", "Aeriell", "Afton", "Ag", "Agace", "Agata", "Agatha", "Agathe", "Aggi", "Aggie", "Aggy", "Agna", "Agnella", "Agnes", "Agnese", "Agnesse", "Agneta", "Agnola", "Agretha", "Aida", "Aidan", "Aigneis", "Aila", "Aile", "Ailee", "Aileen", "Ailene", "Ailey", "Aili", "Ailina", "Ailis", "Ailsun", "Ailyn", "Aime", "Aimee", "Aimil", "Aindrea", "Ainslee", "Ainsley", "Ainslie", "Ajay", "Alaine", "Alameda", "Alana", "Alanah", "Alane", "Alanna", "Alayne", "Alberta", "Albertina", "Albertine", "Albina", "Alecia", "Aleda", "Aleece", "Aleen", "Alejandra", "Alejandrina", "Alena", "Alene", "Alessandra", "Aleta", "Alethea", "Alex", "Alexa", "Alexandra", "Alexandrina", "Alexi", "Alexia", "Alexina", "Alexine", "Alexis", "Alfi", "Alfie", "Alfreda", "Alfy", "Ali", "Alia", "Alica", "Alice", "Alicea", "Alicia", "Alida", "Alidia", "Alie", "Alika", "Alikee", "Alina", "Aline", "Alis", "Alisa", "Alisha", "Alison", "Alissa", "Alisun", "Alix", "Aliza", "Alla", "Alleen", "Allegra", "Allene", "Alli", "Allianora", "Allie", "Allina", "Allis", "Allison", "Allissa", "Allix", "Allsun", "Allx", "Ally", "Allyce", "Allyn", "Allys", "Allyson", "Alma", "Almeda", "Almeria", "Almeta", "Almira", "Almire", "Aloise", "Aloisia", "Aloysia", "Alta", "Althea", "Alvera", "Alverta", "Alvina", "Alvinia", "Alvira", "Alyce", "Alyda", "Alys", "Alysa", "Alyse", "Alysia", "Alyson", "Alyss", "Alyssa", "Amabel", "Amabelle", "Amalea", "Amalee", "Amaleta", "Amalia", "Amalie", "Amalita", "Amalle", "Amanda", "Amandi", "Amandie", "Amandy", "Amara", "Amargo", "Amata", "Amber", "Amberly", "Ambur", "Ame", "Amelia", "Amelie", "Amelina", "Ameline", "Amelita", "Ami", "Amie", "Amii", "Amil", "Amitie", "Amity", "Ammamaria", "Amy", "Amye", "Ana", "Anabal", "Anabel", "Anabella", "Anabelle", "Analiese", "Analise", "Anallese", "Anallise", "Anastasia", "Anastasie", "Anastassia", "Anatola", "Andee", "Andeee", "Anderea", "Andi", "Andie", "Andra", "Andrea", "Andreana", "Andree", "Andrei", "Andria", "Andriana", "Andriette", "Andromache", "Andy", "Anestassia", "Anet", "Anett", "Anetta", "Anette", "Ange", "Angel", "Angela", "Angele", "Angelia", "Angelica", "Angelika", "Angelina", "Angeline", "Angelique", "Angelita", "Angelle", "Angie", "Angil", "Angy", "Ania", "Anica", "Anissa", "Anita", "Anitra", "Anjanette", "Anjela", "Ann", "Ann-Marie", "Anna", "Anna-Diana", "Anna-Diane", "Anna-Maria", "Annabal", "Annabel", "Annabela", "Annabell", "Annabella", "Annabelle", "Annadiana", "Annadiane", "Annalee", "Annaliese", "Annalise", "Annamaria", "Annamarie", "Anne", "Anne-Corinne", "Anne-Marie", "Annecorinne", "Anneliese", "Annelise", "Annemarie", "Annetta", "Annette", "Anni", "Annice", "Annie", "Annis", "Annissa", "Annmaria", "Annmarie", "Annnora", "Annora", "Anny", "Anselma", "Ansley", "Anstice", "Anthe", "Anthea", "Anthia", "Anthiathia", "Antoinette", "Antonella", "Antonetta", "Antonia", "Antonie", "Antonietta", "Antonina", "Anya", "Appolonia", "April", "Aprilette", "Ara", "Arabel", "Arabela", "Arabele", "Arabella", "Arabelle", "Arda", "Ardath", "Ardeen", "Ardelia", "Ardelis", "Ardella", "Ardelle", "Arden", "Ardene", "Ardenia", "Ardine", "Ardis", "Ardisj", "Ardith", "Ardra", "Ardyce", "Ardys", "Ardyth", "Aretha", "Ariadne", "Ariana", "Aridatha", "Ariel", "Ariela", "Ariella", "Arielle", "Arlana", "Arlee", "Arleen", "Arlen", "Arlena", "Arlene", "Arleta", "Arlette", "Arleyne", "Arlie", "Arliene", "Arlina", "Arlinda", "Arline", "Arluene", "Arly", "Arlyn", "Arlyne", "Aryn", "Ashely", "Ashia", "Ashien", "Ashil", "Ashla", "Ashlan", "Ashlee", "Ashleigh", "Ashlen", "Ashley", "Ashli", "Ashlie", "Ashly", "Asia", "Astra", "Astrid", "Astrix", "Atalanta", "Athena", "Athene", "Atlanta", "Atlante", "Auberta", "Aubine", "Aubree", "Aubrette", "Aubrey", "Aubrie", "Aubry", "Audi", "Audie", "Audra", "Audre", "Audrey", "Audrie", "Audry", "Audrye", "Audy", "Augusta", "Auguste", "Augustina", "Augustine", "Aundrea", "Aura", "Aurea", "Aurel", "Aurelea", "Aurelia", "Aurelie", "Auria", "Aurie", "Aurilia", "Aurlie", "Auroora", "Aurora", "Aurore", "Austin", "Austina", "Austine", "Ava", "Aveline", "Averil", "Averyl", "Avie", "Avis", "Aviva", "Avivah", "Avril", "Avrit", "Ayn", "Bab", "Babara", "Babb", "Babbette", "Babbie", "Babette", "Babita", "Babs", "Bambi", "Bambie", "Bamby", "Barb", "Barbabra", "Barbara", "Barbara-Anne", "Barbaraanne", "Barbe", "Barbee", "Barbette", "Barbey", "Barbi", "Barbie", "Barbra", "Barby", "Bari", "Barrie", "Barry", "Basia", "Bathsheba", "Batsheva", "Bea", "Beatrice", "Beatrisa", "Beatrix", "Beatriz", "Bebe", "Becca", "Becka", "Becki", "Beckie", "Becky", "Bee", "Beilul", "Beitris", "Bekki", "Bel", "Belia", "Belicia", "Belinda", "Belita", "Bell", "Bella", "Bellanca", "Belle", "Bellina", "Belva", "Belvia", "Bendite", "Benedetta", "Benedicta", "Benedikta", "Benetta", "Benita", "Benni", "Bennie", "Benny", "Benoite", "Berenice", "Beret", "Berget", "Berna", "Bernadene", "Bernadette", "Bernadina", "Bernadine", "Bernardina", "Bernardine", "Bernelle", "Bernete", "Bernetta", "Bernette", "Berni", "Bernice", "Bernie", "Bernita", "Berny", "Berri", "Berrie", "Berry", "Bert", "Berta", "Berte", "Bertha", "Berthe", "Berti", "Bertie", "Bertina", "Bertine", "Berty", "Beryl", "Beryle", "Bess", "Bessie", "Bessy", "Beth", "Bethanne", "Bethany", "Bethena", "Bethina", "Betsey", "Betsy", "Betta", "Bette", "Bette-Ann", "Betteann", "Betteanne", "Betti", "Bettina", "Bettine", "Betty", "Bettye", "Beulah", "Bev", "Beverie", "Beverlee", "Beverley", "Beverlie", "Beverly", "Bevvy", "Bianca", "Bianka", "Bibbie", "Bibby", "Bibbye", "Bibi", "Biddie", "Biddy", "Bidget", "Bili", "Bill", "Billi", "Billie", "Billy", "Billye", "Binni", "Binnie", "Binny", "Bird", "Birdie", "Birgit", "Birgitta", "Blair", "Blaire", "Blake", "Blakelee", "Blakeley", "Blanca", "Blanch", "Blancha", "Blanche", "Blinni", "Blinnie", "Blinny", "Bliss", "Blisse", "Blithe", "Blondell", "Blondelle", "Blondie", "Blondy", "Blythe", "Bobbe", "Bobbee", "Bobbette", "Bobbi", "Bobbie", "Bobby", "Bobbye", "Bobette", "Bobina", "Bobine", "Bobinette", "Bonita", "Bonnee", "Bonni", "Bonnibelle", "Bonnie", "Bonny", "Brana", "Brandais", "Brande", "Brandea", "Brandi", "Brandice", "Brandie", "Brandise", "Brandy", "Breanne", "Brear", "Bree", "Breena", "Bren", "Brena", "Brenda", "Brenn", "Brenna", "Brett", "Bria", "Briana", "Brianna", "Brianne", "Bride", "Bridget", "Bridgette", "Bridie", "Brier", "Brietta", "Brigid", "Brigida", "Brigit", "Brigitta", "Brigitte", "Brina", "Briney", "Brinn", "Brinna", "Briny", "Brit", "Brita", "Britney", "Britni", "Britt", "Britta", "Brittan", "Brittaney", "Brittani", "Brittany", "Britte", "Britteny", "Brittne", "Brittney", "Brittni", "Brook", "Brooke", "Brooks", "Brunhilda", "Brunhilde", "Bryana", "Bryn", "Bryna", "Brynn", "Brynna", "Brynne", "Buffy", "Bunni", "Bunnie", "Bunny", "Cacilia", "Cacilie", "Cahra", "Cairistiona", "Caitlin", "Caitrin", "Cal", "Calida", "Calla", "Calley", "Calli", "Callida", "Callie", "Cally", "Calypso", "Cam", "Camala", "Camel", "Camella", "Camellia", "Cami", "Camila", "Camile", "Camilla", "Camille", "Cammi", "Cammie", "Cammy", "Candace", "Candi", "Candice", "Candida", "Candide", "Candie", "Candis", "Candra", "Candy", "Caprice", "Cara", "Caralie", "Caren", "Carena", "Caresa", "Caressa", "Caresse", "Carey", "Cari", "Caria", "Carie", "Caril", "Carilyn", "Carin", "Carina", "Carine", "Cariotta", "Carissa", "Carita", "Caritta", "Carla", "Carlee", "Carleen", "Carlen", "Carlene", "Carley", "Carlie", "Carlin", "Carlina", "Carline", "Carlita", "Carlota", "Carlotta", "Carly", "Carlye", "Carlyn", "Carlynn", "Carlynne", "Carma", "Carmel", "Carmela", "Carmelia", "Carmelina", "Carmelita", "Carmella", "Carmelle", "Carmen", "Carmencita", "Carmina", "Carmine", "Carmita", "Carmon", "Caro", "Carol", "Carol-Jean", "Carola", "Carolan", "Carolann", "Carole", "Carolee", "Carolin", "Carolina", "Caroline", "Caroljean", "Carolyn", "Carolyne", "Carolynn", "Caron", "Carree", "Carri", "Carrie", "Carrissa", "Carroll", "Carry", "Cary", "Caryl", "Caryn", "Casandra", "Casey", "Casi", "Casie", "Cass", "Cassandra", "Cassandre", "Cassandry", "Cassaundra", "Cassey", "Cassi", "Cassie", "Cassondra", "Cassy", "Catarina", "Cate", "Caterina", "Catha", "Catharina", "Catharine", "Cathe", "Cathee", "Catherin", "Catherina", "Catherine", "Cathi", "Cathie", "Cathleen", "Cathlene", "Cathrin", "Cathrine", "Cathryn", "Cathy", "Cathyleen", "Cati", "Catie", "Catina", "Catlaina", "Catlee", "Catlin", "Catrina", "Catriona", "Caty", "Caye", "Cayla", "Cecelia", "Cecil", "Cecile", "Ceciley", "Cecilia", "Cecilla", "Cecily", "Ceil", "Cele", "Celene", "Celesta", "Celeste", "Celestia", "Celestina", "Celestine", "Celestyn", "Celestyna", "Celia", "Celie", "Celina", "Celinda", "Celine", "Celinka", "Celisse", "Celka", "Celle", "Cesya", "Chad", "Chanda", "Chandal", "Chandra", "Channa", "Chantal", "Chantalle", "Charil", "Charin", "Charis", "Charissa", "Charisse", "Charita", "Charity", "Charla", "Charlean", "Charleen", "Charlena", "Charlene", "Charline", "Charlot", "Charlotta", "Charlotte", "Charmain", "Charmaine", "Charmane", "Charmian", "Charmine", "Charmion", "Charo", "Charyl", "Chastity", "Chelsae", "Chelsea", "Chelsey", "Chelsie", "Chelsy", "Cher", "Chere", "Cherey", "Cheri", "Cherianne", "Cherice", "Cherida", "Cherie", "Cherilyn", "Cherilynn", "Cherin", "Cherise", "Cherish", "Cherlyn", "Cherri", "Cherrita", "Cherry", "Chery", "Cherye", "Cheryl", "Cheslie", "Chiarra", "Chickie", "Chicky", "Chiquia", "Chiquita", "Chlo", "Chloe", "Chloette", "Chloris", "Chris", "Chrissie", "Chrissy", "Christa", "Christabel", "Christabella", "Christal", "Christalle", "Christan", "Christean", "Christel", "Christen", "Christi", "Christian", "Christiana", "Christiane", "Christie", "Christin", "Christina", "Christine", "Christy", "Christye", "Christyna", "Chrysa", "Chrysler", "Chrystal", "Chryste", "Chrystel", "Cicely", "Cicily", "Ciel", "Cilka", "Cinda", "Cindee", "Cindelyn", "Cinderella", "Cindi", "Cindie", "Cindra", "Cindy", "Cinnamon", "Cissiee", "Cissy", "Clair", "Claire", "Clara", "Clarabelle", "Clare", "Claresta", "Clareta", "Claretta", "Clarette", "Clarey", "Clari", "Claribel", "Clarice", "Clarie", "Clarinda", "Clarine", "Clarissa", "Clarisse", "Clarita", "Clary", "Claude", "Claudelle", "Claudetta", "Claudette", "Claudia", "Claudie", "Claudina", "Claudine", "Clea", "Clem", "Clemence", "Clementia", "Clementina", "Clementine", "Clemmie", "Clemmy", "Cleo", "Cleopatra", "Clerissa", "Clio", "Clo", "Cloe", "Cloris", "Clotilda", "Clovis", "Codee", "Codi", "Codie", "Cody", "Coleen", "Colene", "Coletta", "Colette", "Colleen", "Collen", "Collete", "Collette", "Collie", "Colline", "Colly", "Con", "Concettina", "Conchita", "Concordia", "Conni", "Connie", "Conny", "Consolata", "Constance", "Constancia", "Constancy", "Constanta", "Constantia", "Constantina", "Constantine", "Consuela", "Consuelo", "Cookie", "Cora", "Corabel", "Corabella", "Corabelle", "Coral", "Coralie", "Coraline", "Coralyn", "Cordelia", "Cordelie", "Cordey", "Cordi", "Cordie", "Cordula", "Cordy", "Coreen", "Corella", "Corenda", "Corene", "Coretta", "Corette", "Corey", "Cori", "Corie", "Corilla", "Corina", "Corine", "Corinna", "Corinne", "Coriss", "Corissa", "Corliss", "Corly", "Cornela", "Cornelia", "Cornelle", "Cornie", "Corny", "Correna", "Correy", "Corri", "Corrianne", "Corrie", "Corrina", "Corrine", "Corrinne", "Corry", "Cortney", "Cory", "Cosetta", "Cosette", "Costanza", "Courtenay", "Courtnay", "Courtney", "Crin", "Cris", "Crissie", "Crissy", "Crista", "Cristabel", "Cristal", "Cristen", "Cristi", "Cristie", "Cristin", "Cristina", "Cristine", "Cristionna", "Cristy", "Crysta", "Crystal", "Crystie", "Cthrine", "Cyb", "Cybil", "Cybill", "Cymbre", "Cynde", "Cyndi", "Cyndia", "Cyndie", "Cyndy", "Cynthea", "Cynthia", "Cynthie", "Cynthy", "Dacey", "Dacia", "Dacie", "Dacy", "Dael", "Daffi", "Daffie", "Daffy", "Dagmar", "Dahlia", "Daile", "Daisey", "Daisi", "Daisie", "Daisy", "Dale", "Dalenna", "Dalia", "Dalila", "Dallas", "Daloris", "Damara", "Damaris", "Damita", "Dana", "Danell", "Danella", "Danette", "Dani", "Dania", "Danica", "Danice", "Daniela", "Daniele", "Daniella", "Danielle", "Danika", "Danila", "Danit", "Danita", "Danna", "Danni", "Dannie", "Danny", "Dannye", "Danya", "Danyelle", "Danyette", "Daphene", "Daphna", "Daphne", "Dara", "Darb", "Darbie", "Darby", "Darcee", "Darcey", "Darci", "Darcie", "Darcy", "Darda", "Dareen", "Darell", "Darelle", "Dari", "Daria", "Darice", "Darla", "Darleen", "Darlene", "Darline", "Darlleen", "Daron", "Darrelle", "Darryl", "Darsey", "Darsie", "Darya", "Daryl", "Daryn", "Dasha", "Dasi", "Dasie", "Dasya", "Datha", "Daune", "Daveen", "Daveta", "Davida", "Davina", "Davine", "Davita", "Dawn", "Dawna", "Dayle", "Dayna", "Ddene", "De", "Deana", "Deane", "Deanna", "Deanne", "Deb", "Debbi", "Debbie", "Debby", "Debee", "Debera", "Debi", "Debor", "Debora", "Deborah", "Debra", "Dede", "Dedie", "Dedra", "Dee", "Dee Dee", "Deeann", "Deeanne", "Deedee", "Deena", "Deerdre", "Deeyn", "Dehlia", "Deidre", "Deina", "Deirdre", "Del", "Dela", "Delcina", "Delcine", "Delia", "Delila", "Delilah", "Delinda", "Dell", "Della", "Delly", "Delora", "Delores", "Deloria", "Deloris", "Delphine", "Delphinia", "Demeter", "Demetra", "Demetria", "Demetris", "Dena", "Deni", "Denice", "Denise", "Denna", "Denni", "Dennie", "Denny", "Deny", "Denys", "Denyse", "Deonne", "Desdemona", "Desirae", "Desiree", "Desiri", "Deva", "Devan", "Devi", "Devin", "Devina", "Devinne", "Devon", "Devondra", "Devonna", "Devonne", "Devora", "Di", "Diahann", "Dian", "Diana", "Diandra", "Diane", "Diane-Marie", "Dianemarie", "Diann", "Dianna", "Dianne", "Diannne", "Didi", "Dido", "Diena", "Dierdre", "Dina", "Dinah", "Dinnie", "Dinny", "Dion", "Dione", "Dionis", "Dionne", "Dita", "Dix", "Dixie", "Dniren", "Dode", "Dodi", "Dodie", "Dody", "Doe", "Doll", "Dolley", "Dolli", "Dollie", "Dolly", "Dolores", "Dolorita", "Doloritas", "Domeniga", "Dominga", "Domini", "Dominica", "Dominique", "Dona", "Donella", "Donelle", "Donetta", "Donia", "Donica", "Donielle", "Donna", "Donnamarie", "Donni", "Donnie", "Donny", "Dora", "Doralia", "Doralin", "Doralyn", "Doralynn", "Doralynne", "Dore", "Doreen", "Dorelia", "Dorella", "Dorelle", "Dorena", "Dorene", "Doretta", "Dorette", "Dorey", "Dori", "Doria", "Dorian", "Dorice", "Dorie", "Dorine", "Doris", "Dorisa", "Dorise", "Dorita", "Doro", "Dorolice", "Dorolisa", "Dorotea", "Doroteya", "Dorothea", "Dorothee", "Dorothy", "Dorree", "Dorri", "Dorrie", "Dorris", "Dorry", "Dorthea", "Dorthy", "Dory", "Dosi", "Dot", "Doti", "Dotti", "Dottie", "Dotty", "Dre", "Dreddy", "Dredi", "Drona", "Dru", "Druci", "Drucie", "Drucill", "Drucy", "Drusi", "Drusie", "Drusilla", "Drusy", "Dulce", "Dulcea", "Dulci", "Dulcia", "Dulciana", "Dulcie", "Dulcine", "Dulcinea", "Dulcy", "Dulsea", "Dusty", "Dyan", "Dyana", "Dyane", "Dyann", "Dyanna", "Dyanne", "Dyna", "Dynah", "Eachelle", "Eada", "Eadie", "Eadith", "Ealasaid", "Eartha", "Easter", "Eba", "Ebba", "Ebonee", "Ebony", "Eda", "Eddi", "Eddie", "Eddy", "Ede", "Edee", "Edeline", "Eden", "Edi", "Edie", "Edin", "Edita", "Edith", "Editha", "Edithe", "Ediva", "Edna", "Edwina", "Edy", "Edyth", "Edythe", "Effie", "Eileen", "Eilis", "Eimile", "Eirena", "Ekaterina", "Elaina", "Elaine", "Elana", "Elane", "Elayne", "Elberta", "Elbertina", "Elbertine", "Eleanor", "Eleanora", "Eleanore", "Electra", "Eleen", "Elena", "Elene", "Eleni", "Elenore", "Eleonora", "Eleonore", "Elfie", "Elfreda", "Elfrida", "Elfrieda", "Elga", "Elianora", "Elianore", "Elicia", "Elie", "Elinor", "Elinore", "Elisa", "Elisabet", "Elisabeth", "Elisabetta", "Elise", "Elisha", "Elissa", "Elita", "Eliza", "Elizabet", "Elizabeth", "Elka", "Elke", "Ella", "Elladine", "Elle", "Ellen", "Ellene", "Ellette", "Elli", "Ellie", "Ellissa", "Elly", "Ellyn", "Ellynn", "Elmira", "Elna", "Elnora", "Elnore", "Eloisa", "Eloise", "Elonore", "Elora", "Elsa", "Elsbeth", "Else", "Elset", "Elsey", "Elsi", "Elsie", "Elsinore", "Elspeth", "Elsy", "Elva", "Elvera", "Elvina", "Elvira", "Elwira", "Elyn", "Elyse", "Elysee", "Elysha", "Elysia", "Elyssa", "Em", "Ema", "Emalee", "Emalia", "Emelda", "Emelia", "Emelina", "Emeline", "Emelita", "Emelyne", "Emera", "Emilee", "Emili", "Emilia", "Emilie", "Emiline", "Emily", "Emlyn", "Emlynn", "Emlynne", "Emma", "Emmalee", "Emmaline", "Emmalyn", "Emmalynn", "Emmalynne", "Emmeline", "Emmey", "Emmi", "Emmie", "Emmy", "Emmye", "Emogene", "Emyle", "Emylee", "Engracia", "Enid", "Enrica", "Enrichetta", "Enrika", "Enriqueta", "Eolanda", "Eolande", "Eran", "Erda", "Erena", "Erica", "Ericha", "Ericka", "Erika", "Erin", "Erina", "Erinn", "Erinna", "Erma", "Ermengarde", "Ermentrude", "Ermina", "Erminia", "Erminie", "Erna", "Ernaline", "Ernesta", "Ernestine", "Ertha", "Eryn", "Esma", "Esmaria", "Esme", "Esmeralda", "Essa", "Essie", "Essy", "Esta", "Estel", "Estele", "Estell", "Estella", "Estelle", "Ester", "Esther", "Estrella", "Estrellita", "Ethel", "Ethelda", "Ethelin", "Ethelind", "Etheline", "Ethelyn", "Ethyl", "Etta", "Etti", "Ettie", "Etty", "Eudora", "Eugenia", "Eugenie", "Eugine", "Eula", "Eulalie", "Eunice", "Euphemia", "Eustacia", "Eva", "Evaleen", "Evangelia", "Evangelin", "Evangelina", "Evangeline", "Evania", "Evanne", "Eve", "Eveleen", "Evelina", "Eveline", "Evelyn", "Evey", "Evie", "Evita", "Evonne", "Evvie", "Evvy", "Evy", "Eyde", "Eydie", "Ezmeralda", "Fae", "Faina", "Faith", "Fallon", "Fan", "Fanchette", "Fanchon", "Fancie", "Fancy", "Fanechka", "Fania", "Fanni", "Fannie", "Fanny", "Fanya", "Fara", "Farah", "Farand", "Farica", "Farra", "Farrah", "Farrand", "Faun", "Faunie", "Faustina", "Faustine", "Fawn", "Fawne", "Fawnia", "Fay", "Faydra", "Faye", "Fayette", "Fayina", "Fayre", "Fayth", "Faythe", "Federica", "Fedora", "Felecia", "Felicdad", "Felice", "Felicia", "Felicity", "Felicle", "Felipa", "Felisha", "Felita", "Feliza", "Fenelia", "Feodora", "Ferdinanda", "Ferdinande", "Fern", "Fernanda", "Fernande", "Fernandina", "Ferne", "Fey", "Fiann", "Fianna", "Fidela", "Fidelia", "Fidelity", "Fifi", "Fifine", "Filia", "Filide", "Filippa", "Fina", "Fiona", "Fionna", "Fionnula", "Fiorenze", "Fleur", "Fleurette", "Flo", "Flor", "Flora", "Florance", "Flore", "Florella", "Florence", "Florencia", "Florentia", "Florenza", "Florette", "Flori", "Floria", "Florida", "Florie", "Florina", "Florinda", "Floris", "Florri", "Florrie", "Florry", "Flory", "Flossi", "Flossie", "Flossy", "Flss", "Fran", "Francene", "Frances", "Francesca", "Francine", "Francisca", "Franciska", "Francoise", "Francyne", "Frank", "Frankie", "Franky", "Franni", "Frannie", "Franny", "Frayda", "Fred", "Freda", "Freddi", "Freddie", "Freddy", "Fredelia", "Frederica", "Fredericka", "Frederique", "Fredi", "Fredia", "Fredra", "Fredrika", "Freida", "Frieda", "Friederike", "Fulvia", "Gabbey", "Gabbi", "Gabbie", "Gabey", "Gabi", "Gabie", "Gabriel", "Gabriela", "Gabriell", "Gabriella", "Gabrielle", "Gabriellia", "Gabrila", "Gaby", "Gae", "Gael", "Gail", "Gale", "Gale", "Galina", "Garland", "Garnet", "Garnette", "Gates", "Gavra", "Gavrielle", "Gay", "Gaye", "Gayel", "Gayla", "Gayle", "Gayleen", "Gaylene", "Gaynor", "Gelya", "Gena", "Gene", "Geneva", "Genevieve", "Genevra", "Genia", "Genna", "Genni", "Gennie", "Gennifer", "Genny", "Genovera", "Genvieve", "George", "Georgeanna", "Georgeanne", "Georgena", "Georgeta", "Georgetta", "Georgette", "Georgia", "Georgiana", "Georgianna", "Georgianne", "Georgie", "Georgina", "Georgine", "Geralda", "Geraldine", "Gerda", "Gerhardine", "Geri", "Gerianna", "Gerianne", "Gerladina", "Germain", "Germaine", "Germana", "Gerri", "Gerrie", "Gerrilee", "Gerry", "Gert", "Gerta", "Gerti", "Gertie", "Gertrud", "Gertruda", "Gertrude", "Gertrudis", "Gerty", "Giacinta", "Giana", "Gianina", "Gianna", "Gigi", "Gilberta", "Gilberte", "Gilbertina", "Gilbertine", "Gilda", "Gilemette", "Gill", "Gillan", "Gilli", "Gillian", "Gillie", "Gilligan", "Gilly", "Gina", "Ginelle", "Ginevra", "Ginger", "Ginni", "Ginnie", "Ginnifer", "Ginny", "Giorgia", "Giovanna", "Gipsy", "Giralda", "Gisela", "Gisele", "Gisella", "Giselle", "Giuditta", "Giulia", "Giulietta", "Giustina", "Gizela", "Glad", "Gladi", "Gladys", "Gleda", "Glen", "Glenda", "Glenine", "Glenn", "Glenna", "Glennie", "Glennis", "Glori", "Gloria", "Gloriana", "Gloriane", "Glory", "Glyn", "Glynda", "Glynis", "Glynnis", "Gnni", "Godiva", "Golda", "Goldarina", "Goldi", "Goldia", "Goldie", "Goldina", "Goldy", "Grace", "Gracia", "Gracie", "Grata", "Gratia", "Gratiana", "Gray", "Grayce", "Grazia", "Greer", "Greta", "Gretal", "Gretchen", "Grete", "Gretel", "Grethel", "Gretna", "Gretta", "Grier", "Griselda", "Grissel", "Guendolen", "Guenevere", "Guenna", "Guglielma", "Gui", "Guillema", "Guillemette", "Guinevere", "Guinna", "Gunilla", "Gus", "Gusella", "Gussi", "Gussie", "Gussy", "Gusta", "Gusti", "Gustie", "Gusty", "Gwen", "Gwendolen", "Gwendolin", "Gwendolyn", "Gweneth", "Gwenette", "Gwenneth", "Gwenni", "Gwennie", "Gwenny", "Gwenora", "Gwenore", "Gwyn", "Gwyneth", "Gwynne", "Gypsy", "Hadria", "Hailee", "Haily", "Haleigh", "Halette", "Haley", "Hali", "Halie", "Halimeda", "Halley", "Halli", "Hallie", "Hally", "Hana", "Hanna", "Hannah", "Hanni", "Hannie", "Hannis", "Hanny", "Happy", "Harlene", "Harley", "Harli", "Harlie", "Harmonia", "Harmonie", "Harmony", "Harri", "Harrie", "Harriet", "Harriett", "Harrietta", "Harriette", "Harriot", "Harriott", "Hatti", "Hattie", "Hatty", "Hayley", "Hazel", "Heath", "Heather", "Heda", "Hedda", "Heddi", "Heddie", "Hedi", "Hedvig", "Hedvige", "Hedwig", "Hedwiga", "Hedy", "Heida", "Heidi", "Heidie", "Helaina", "Helaine", "Helen", "Helen-Elizabeth", "Helena", "Helene", "Helenka", "Helga", "Helge", "Helli", "Heloise", "Helsa", "Helyn", "Hendrika", "Henka", "Henrie", "Henrieta", "Henrietta", "Henriette", "Henryetta", "Hephzibah", "Hermia", "Hermina", "Hermine", "Herminia", "Hermione", "Herta", "Hertha", "Hester", "Hesther", "Hestia", "Hetti", "Hettie", "Hetty", "Hilary", "Hilda", "Hildagard", "Hildagarde", "Hilde", "Hildegaard", "Hildegarde", "Hildy", "Hillary", "Hilliary", "Hinda", "Holli", "Hollie", "Holly", "Holly-Anne", "Hollyanne", "Honey", "Honor", "Honoria", "Hope", "Horatia", "Hortense", "Hortensia", "Hulda", "Hyacinth", "Hyacintha", "Hyacinthe", "Hyacinthia", "Hyacinthie", "Hynda", "Ianthe", "Ibbie", "Ibby", "Ida", "Idalia", "Idalina", "Idaline", "Idell", "Idelle", "Idette", "Ileana", "Ileane", "Ilene", "Ilise", "Ilka", "Illa", "Ilsa", "Ilse", "Ilysa", "Ilyse", "Ilyssa", "Imelda", "Imogen", "Imogene", "Imojean", "Ina", "Indira", "Ines", "Inesita", "Inessa", "Inez", "Inga", "Ingaberg", "Ingaborg", "Inge", "Ingeberg", "Ingeborg", "Inger", "Ingrid", "Ingunna", "Inna", "Iolande", "Iolanthe", "Iona", "Iormina", "Ira", "Irena", "Irene", "Irina", "Iris", "Irita", "Irma", "Isa", "Isabel", "Isabelita", "Isabella", "Isabelle", "Isadora", "Isahella", "Iseabal", "Isidora", "Isis", "Isobel", "Issi", "Issie", "Issy", "Ivett", "Ivette", "Ivie", "Ivonne", "Ivory", "Ivy", "Izabel", "Jacenta", "Jacinda", "Jacinta", "Jacintha", "Jacinthe", "Jackelyn", "Jacki", "Jackie", "Jacklin", "Jacklyn", "Jackquelin", "Jackqueline", "Jacky", "Jaclin", "Jaclyn", "Jacquelin", "Jacqueline", "Jacquelyn", "Jacquelynn", "Jacquenetta", "Jacquenette", "Jacquetta", "Jacquette", "Jacqui", "Jacquie", "Jacynth", "Jada", "Jade", "Jaime", "Jaimie", "Jaine", "Jami", "Jamie", "Jamima", "Jammie", "Jan", "Jana", "Janaya", "Janaye", "Jandy", "Jane", "Janean", "Janeczka", "Janeen", "Janel", "Janela", "Janella", "Janelle", "Janene", "Janenna", "Janessa", "Janet", "Janeta", "Janetta", "Janette", "Janeva", "Janey", "Jania", "Janice", "Janie", "Janifer", "Janina", "Janine", "Janis", "Janith", "Janka", "Janna", "Jannel", "Jannelle", "Janot", "Jany", "Jaquelin", "Jaquelyn", "Jaquenetta", "Jaquenette", "Jaquith", "Jasmin", "Jasmina", "Jasmine", "Jayme", "Jaymee", "Jayne", "Jaynell", "Jazmin", "Jean", "Jeana", "Jeane", "Jeanelle", "Jeanette", "Jeanie", "Jeanine", "Jeanna", "Jeanne", "Jeannette", "Jeannie", "Jeannine", "Jehanna", "Jelene", "Jemie", "Jemima", "Jemimah", "Jemmie", "Jemmy", "Jen", "Jena", "Jenda", "Jenelle", "Jeni", "Jenica", "Jeniece", "Jenifer", "Jeniffer", "Jenilee", "Jenine", "Jenn", "Jenna", "Jennee", "Jennette", "Jenni", "Jennica", "Jennie", "Jennifer", "Jennilee", "Jennine", "Jenny", "Jeralee", "Jere", "Jeri", "Jermaine", "Jerrie", "Jerrilee", "Jerrilyn", "Jerrine", "Jerry", "Jerrylee", "Jess", "Jessa", "Jessalin", "Jessalyn", "Jessamine", "Jessamyn", "Jesse", "Jesselyn", "Jessi", "Jessica", "Jessie", "Jessika", "Jessy", "Jewel", "Jewell", "Jewelle", "Jill", "Jillana", "Jillane", "Jillayne", "Jilleen", "Jillene", "Jilli", "Jillian", "Jillie", "Jilly", "Jinny", "Jo", "Jo Ann", "Jo-Ann", "Jo-Anne", "Joan", "Joana", "Joane", "Joanie", "Joann", "Joanna", "Joanne", "Joannes", "Jobey", "Jobi", "Jobie", "Jobina", "Joby", "Jobye", "Jobyna", "Jocelin", "Joceline", "Jocelyn", "Jocelyne", "Jodee", "Jodi", "Jodie", "Jody", "Joeann", "Joela", "Joelie", "Joell", "Joella", "Joelle", "Joellen", "Joelly", "Joellyn", "Joelynn", "Joete", "Joey", "Johanna", "Johannah", "Johna", "Johnath", "Johnette", "Johnna", "Joice", "Jojo", "Jolee", "Joleen", "Jolene", "Joletta", "Joli", "Jolie", "Joline", "Joly", "Jolyn", "Jolynn", "Jonell", "Joni", "Jonie", "Jonis", "Jordain", "Jordan", "Jordana", "Jordanna", "Jorey", "Jori", "Jorie", "Jorrie", "Jorry", "Joscelin", "Josee", "Josefa", "Josefina", "Josepha", "Josephina", "Josephine", "Josey", "Josi", "Josie", "Josselyn", "Josy", "Jourdan", "Joy", "Joya", "Joyan", "Joyann", "Joyce", "Joycelin", "Joye", "Jsandye", "Juana", "Juanita", "Judi", "Judie", "Judith", "Juditha", "Judy", "Judye", "Juieta", "Julee", "Juli", "Julia", "Juliana", "Juliane", "Juliann", "Julianna", "Julianne", "Julie", "Julienne", "Juliet", "Julieta", "Julietta", "Juliette", "Julina", "Juline", "Julissa", "Julita", "June", "Junette", "Junia", "Junie", "Junina", "Justina", "Justine", "Justinn", "Jyoti", "Kacey", "Kacie", "Kacy", "Kaela", "Kai", "Kaia", "Kaila", "Kaile", "Kailey", "Kaitlin", "Kaitlyn", "Kaitlynn", "Kaja", "Kakalina", "Kala", "Kaleena", "Kali", "Kalie", "Kalila", "Kalina", "Kalinda", "Kalindi", "Kalli", "Kally", "Kameko", "Kamila", "Kamilah", "Kamillah", "Kandace", "Kandy", "Kania", "Kanya", "Kara", "Kara-Lynn", "Karalee", "Karalynn", "Kare", "Karee", "Karel", "Karen", "Karena", "Kari", "Karia", "Karie", "Karil", "Karilynn", "Karin", "Karina", "Karine", "Kariotta", "Karisa", "Karissa", "Karita", "Karla", "Karlee", "Karleen", "Karlen", "Karlene", "Karlie", "Karlotta", "Karlotte", "Karly", "Karlyn", "Karmen", "Karna", "Karol", "Karola", "Karole", "Karolina", "Karoline", "Karoly", "Karon", "Karrah", "Karrie", "Karry", "Kary", "Karyl", "Karylin", "Karyn", "Kasey", "Kass", "Kassandra", "Kassey", "Kassi", "Kassia", "Kassie", "Kat", "Kata", "Katalin", "Kate", "Katee", "Katerina", "Katerine", "Katey", "Kath", "Katha", "Katharina", "Katharine", "Katharyn", "Kathe", "Katherina", "Katherine", "Katheryn", "Kathi", "Kathie", "Kathleen", "Kathlin", "Kathrine", "Kathryn", "Kathryne", "Kathy", "Kathye", "Kati", "Katie", "Katina", "Katine", "Katinka", "Katleen", "Katlin", "Katrina", "Katrine", "Katrinka", "Katti", "Kattie", "Katuscha", "Katusha", "Katy", "Katya", "Kay", "Kaycee", "Kaye", "Kayla", "Kayle", "Kaylee", "Kayley", "Kaylil", "Kaylyn", "Keeley", "Keelia", "Keely", "Kelcey", "Kelci", "Kelcie", "Kelcy", "Kelila", "Kellen", "Kelley", "Kelli", "Kellia", "Kellie", "Kellina", "Kellsie", "Kelly", "Kellyann", "Kelsey", "Kelsi", "Kelsy", "Kendra", "Kendre", "Kenna", "Keri", "Keriann", "Kerianne", "Kerri", "Kerrie", "Kerrill", "Kerrin", "Kerry", "Kerstin", "Kesley", "Keslie", "Kessia", "Kessiah", "Ketti", "Kettie", "Ketty", "Kevina", "Kevyn", "Ki", "Kiah", "Kial", "Kiele", "Kiersten", "Kikelia", "Kiley", "Kim", "Kimberlee", "Kimberley", "Kimberli", "Kimberly", "Kimberlyn", "Kimbra", "Kimmi", "Kimmie", "Kimmy", "Kinna", "Kip", "Kipp", "Kippie", "Kippy", "Kira", "Kirbee", "Kirbie", "Kirby", "Kiri", "Kirsten", "Kirsteni", "Kirsti", "Kirstin", "Kirstyn", "Kissee", "Kissiah", "Kissie", "Kit", "Kitti", "Kittie", "Kitty", "Kizzee", "Kizzie", "Klara", "Klarika", "Klarrisa", "Konstance", "Konstanze", "Koo", "Kora", "Koral", "Koralle", "Kordula", "Kore", "Korella", "Koren", "Koressa", "Kori", "Korie", "Korney", "Korrie", "Korry", "Kris", "Krissie", "Krissy", "Krista", "Kristal", "Kristan", "Kriste", "Kristel", "Kristen", "Kristi", "Kristien", "Kristin", "Kristina", "Kristine", "Kristy", "Kristyn", "Krysta", "Krystal", "Krystalle", "Krystle", "Krystyna", "Kyla", "Kyle", "Kylen", "Kylie", "Kylila", "Kylynn", "Kym", "Kynthia", "Kyrstin", "La Verne", "Lacee", "Lacey", "Lacie", "Lacy", "Ladonna", "Laetitia", "Laina", "Lainey", "Lana", "Lanae", "Lane", "Lanette", "Laney", "Lani", "Lanie", "Lanita", "Lanna", "Lanni", "Lanny", "Lara", "Laraine", "Lari", "Larina", "Larine", "Larisa", "Larissa", "Lark", "Laryssa", "Latashia", "Latia", "Latisha", "Latrena", "Latrina", "Laura", "Lauraine", "Laural", "Lauralee", "Laure", "Lauree", "Laureen", "Laurel", "Laurella", "Lauren", "Laurena", "Laurene", "Lauretta", "Laurette", "Lauri", "Laurianne", "Laurice", "Laurie", "Lauryn", "Lavena", "Laverna", "Laverne", "Lavina", "Lavinia", "Lavinie", "Layla", "Layne", "Layney", "Lea", "Leah", "Leandra", "Leann", "Leanna", "Leanor", "Leanora", "Lebbie", "Leda", "Lee", "Leeann", "Leeanne", "Leela", "Leelah", "Leena", "Leesa", "Leese", "Legra", "Leia", "Leigh", "Leigha", "Leila", "Leilah", "Leisha", "Lela", "Lelah", "Leland", "Lelia", "Lena", "Lenee", "Lenette", "Lenka", "Lenna", "Lenora", "Lenore", "Leodora", "Leoine", "Leola", "Leoline", "Leona", "Leonanie", "Leone", "Leonelle", "Leonie", "Leonora", "Leonore", "Leontine", "Leontyne", "Leora", "Leshia", "Lesley", "Lesli", "Leslie", "Lesly", "Lesya", "Leta", "Lethia", "Leticia", "Letisha", "Letitia", "Letizia", "Letta", "Letti", "Lettie", "Letty", "Lexi", "Lexie", "Lexine", "Lexis", "Lexy", "Leyla", "Lezlie", "Lia", "Lian", "Liana", "Liane", "Lianna", "Lianne", "Lib", "Libbey", "Libbi", "Libbie", "Libby", "Licha", "Lida", "Lidia", "Liesa", "Lil", "Lila", "Lilah", "Lilas", "Lilia", "Lilian", "Liliane", "Lilias", "Lilith", "Lilla", "Lilli", "Lillian", "Lillis", "Lilllie", "Lilly", "Lily", "Lilyan", "Lin", "Lina", "Lind", "Linda", "Lindi", "Lindie", "Lindsay", "Lindsey", "Lindsy", "Lindy", "Linea", "Linell", "Linet", "Linette", "Linn", "Linnea", "Linnell", "Linnet", "Linnie", "Linzy", "Lira", "Lisa", "Lisabeth", "Lisbeth", "Lise", "Lisetta", "Lisette", "Lisha", "Lishe", "Lissa", "Lissi", "Lissie", "Lissy", "Lita", "Liuka", "Liv", "Liva", "Livia", "Livvie", "Livvy", "Livvyy", "Livy", "Liz", "Liza", "Lizabeth", "Lizbeth", "Lizette", "Lizzie", "Lizzy", "Loella", "Lois", "Loise", "Lola", "Loleta", "Lolita", "Lolly", "Lona", "Lonee", "Loni", "Lonna", "Lonni", "Lonnie", "Lora", "Lorain", "Loraine", "Loralee", "Loralie", "Loralyn", "Loree", "Loreen", "Lorelei", "Lorelle", "Loren", "Lorena", "Lorene", "Lorenza", "Loretta", "Lorette", "Lori", "Loria", "Lorianna", "Lorianne", "Lorie", "Lorilee", "Lorilyn", "Lorinda", "Lorine", "Lorita", "Lorna", "Lorne", "Lorraine", "Lorrayne", "Lorri", "Lorrie", "Lorrin", "Lorry", "Lory", "Lotta", "Lotte", "Lotti", "Lottie", "Lotty", "Lou", "Louella", "Louisa", "Louise", "Louisette", "Loutitia", "Lu", "Luce", "Luci", "Lucia", "Luciana", "Lucie", "Lucienne", "Lucila", "Lucilia", "Lucille", "Lucina", "Lucinda", "Lucine", "Lucita", "Lucky", "Lucretia", "Lucy", "Ludovika", "Luella", "Luelle", "Luisa", "Luise", "Lula", "Lulita", "Lulu", "Lura", "Lurette", "Lurleen", "Lurlene", "Lurline", "Lusa", "Luz", "Lyda", "Lydia", "Lydie", "Lyn", "Lynda", "Lynde", "Lyndel", "Lyndell", "Lyndsay", "Lyndsey", "Lyndsie", "Lyndy", "Lynea", "Lynelle", "Lynett", "Lynette", "Lynn", "Lynna", "Lynne", "Lynnea", "Lynnell", "Lynnelle", "Lynnet", "Lynnett", "Lynnette", "Lynsey", "Lyssa", "Mab", "Mabel", "Mabelle", "Mable", "Mada", "Madalena", "Madalyn", "Maddalena", "Maddi", "Maddie", "Maddy", "Madel", "Madelaine", "Madeleine", "Madelena", "Madelene", "Madelin", "Madelina", "Madeline", "Madella", "Madelle", "Madelon", "Madelyn", "Madge", "Madlen", "Madlin", "Madonna", "Mady", "Mae", "Maegan", "Mag", "Magda", "Magdaia", "Magdalen", "Magdalena", "Magdalene", "Maggee", "Maggi", "Maggie", "Maggy", "Mahala", "Mahalia", "Maia", "Maible", "Maiga", "Maighdiln", "Mair", "Maire", "Maisey", "Maisie", "Maitilde", "Mala", "Malanie", "Malena", "Malia", "Malina", "Malinda", "Malinde", "Malissa", "Malissia", "Mallissa", "Mallorie", "Mallory", "Malorie", "Malory", "Malva", "Malvina", "Malynda", "Mame", "Mamie", "Manda", "Mandi", "Mandie", "Mandy", "Manon", "Manya", "Mara", "Marabel", "Marcela", "Marcelia", "Marcella", "Marcelle", "Marcellina", "Marcelline", "Marchelle", "Marci", "Marcia", "Marcie", "Marcile", "Marcille", "Marcy", "Mareah", "Maren", "Marena", "Maressa", "Marga", "Margalit", "Margalo", "Margaret", "Margareta", "Margarete", "Margaretha", "Margarethe", "Margaretta", "Margarette", "Margarita", "Margaux", "Marge", "Margeaux", "Margery", "Marget", "Margette", "Margi", "Margie", "Margit", "Margo", "Margot", "Margret", "Marguerite", "Margy", "Mari", "Maria", "Mariam", "Marian", "Mariana", "Mariann", "Marianna", "Marianne", "Maribel", "Maribelle", "Maribeth", "Marice", "Maridel", "Marie", "Marie-Ann", "Marie-Jeanne", "Marieann", "Mariejeanne", "Mariel", "Mariele", "Marielle", "Mariellen", "Marietta", "Mariette", "Marigold", "Marijo", "Marika", "Marilee", "Marilin", "Marillin", "Marilyn", "Marin", "Marina", "Marinna", "Marion", "Mariquilla", "Maris", "Marisa", "Mariska", "Marissa", "Marita", "Maritsa", "Mariya", "Marj", "Marja", "Marje", "Marji", "Marjie", "Marjorie", "Marjory", "Marjy", "Marketa", "Marla", "Marlane", "Marleah", "Marlee", "Marleen", "Marlena", "Marlene", "Marley", "Marlie", "Marline", "Marlo", "Marlyn", "Marna", "Marne", "Marney", "Marni", "Marnia", "Marnie", "Marquita", "Marrilee", "Marris", "Marrissa", "Marsha", "Marsiella", "Marta", "Martelle", "Martguerita", "Martha", "Marthe", "Marthena", "Marti", "Martica", "Martie", "Martina", "Martita", "Marty", "Martynne", "Mary", "Marya", "Maryann", "Maryanna", "Maryanne", "Marybelle", "Marybeth", "Maryellen", "Maryjane", "Maryjo", "Maryl", "Marylee", "Marylin", "Marylinda", "Marylou", "Marylynne", "Maryrose", "Marys", "Marysa", "Masha", "Matelda", "Mathilda", "Mathilde", "Matilda", "Matilde", "Matti", "Mattie", "Matty", "Maud", "Maude", "Maudie", "Maura", "Maure", "Maureen", "Maureene", "Maurene", "Maurine", "Maurise", "Maurita", "Maurizia", "Mavis", "Mavra", "Max", "Maxi", "Maxie", "Maxine", "Maxy", "May", "Maybelle", "Maye", "Mead", "Meade", "Meagan", "Meaghan", "Meara", "Mechelle", "Meg", "Megan", "Megen", "Meggi", "Meggie", "Meggy", "Meghan", "Meghann", "Mehetabel", "Mei", "Mel", "Mela", "Melamie", "Melania", "Melanie", "Melantha", "Melany", "Melba", "Melesa", "Melessa", "Melicent", "Melina", "Melinda", "Melinde", "Melisa", "Melisande", "Melisandra", "Melisenda", "Melisent", "Melissa", "Melisse", "Melita", "Melitta", "Mella", "Melli", "Mellicent", "Mellie", "Mellisa", "Mellisent", "Melloney", "Melly", "Melodee", "Melodie", "Melody", "Melonie", "Melony", "Melosa", "Melva", "Mercedes", "Merci", "Mercie", "Mercy", "Meredith", "Meredithe", "Meridel", "Meridith", "Meriel", "Merilee", "Merilyn", "Meris", "Merissa", "Merl", "Merla", "Merle", "Merlina", "Merline", "Merna", "Merola", "Merralee", "Merridie", "Merrie", "Merrielle", "Merrile", "Merrilee", "Merrili", "Merrill", "Merrily", "Merry", "Mersey", "Meryl", "Meta", "Mia", "Micaela", "Michaela", "Michaelina", "Michaeline", "Michaella", "Michal", "Michel", "Michele", "Michelina", "Micheline", "Michell", "Michelle", "Micki", "Mickie", "Micky", "Midge", "Mignon", "Mignonne", "Miguela", "Miguelita", "Mikaela", "Mil", "Mildred", "Mildrid", "Milena", "Milicent", "Milissent", "Milka", "Milli", "Millicent", "Millie", "Millisent", "Milly", "Milzie", "Mimi", "Min", "Mina", "Minda", "Mindy", "Minerva", "Minetta", "Minette", "Minna", "Minnaminnie", "Minne", "Minni", "Minnie", "Minnnie", "Minny", "Minta", "Miof Mela", "Miquela", "Mira", "Mirabel", "Mirabella", "Mirabelle", "Miran", "Miranda", "Mireielle", "Mireille", "Mirella", "Mirelle", "Miriam", "Mirilla", "Mirna", "Misha", "Missie", "Missy", "Misti", "Misty", "Mitzi", "Modesta", "Modestia", "Modestine", "Modesty", "Moina", "Moira", "Moll", "Mollee", "Molli", "Mollie", "Molly", "Mommy", "Mona", "Monah", "Monica", "Monika", "Monique", "Mora", "Moreen", "Morena", "Morgan", "Morgana", "Morganica", "Morganne", "Morgen", "Moria", "Morissa", "Morna", "Moselle", "Moyna", "Moyra", "Mozelle", "Muffin", "Mufi", "Mufinella", "Muire", "Mureil", "Murial", "Muriel", "Murielle", "Myra", "Myrah", "Myranda", "Myriam", "Myrilla", "Myrle", "Myrlene", "Myrna", "Myrta", "Myrtia", "Myrtice", "Myrtie", "Myrtle", "Nada", "Nadean", "Nadeen", "Nadia", "Nadine", "Nadiya", "Nady", "Nadya", "Nalani", "Nan", "Nana", "Nananne", "Nance", "Nancee", "Nancey", "Nanci", "Nancie", "Nancy", "Nanete", "Nanette", "Nani", "Nanice", "Nanine", "Nannette", "Nanni", "Nannie", "Nanny", "Nanon", "Naoma", "Naomi", "Nara", "Nari", "Nariko", "Nat", "Nata", "Natala", "Natalee", "Natalie", "Natalina", "Nataline", "Natalya", "Natasha", "Natassia", "Nathalia", "Nathalie", "Natividad", "Natka", "Natty", "Neala", "Neda", "Nedda", "Nedi", "Neely", "Neila", "Neile", "Neilla", "Neille", "Nelia", "Nelie", "Nell", "Nelle", "Nelli", "Nellie", "Nelly", "Nerissa", "Nerita", "Nert", "Nerta", "Nerte", "Nerti", "Nertie", "Nerty", "Nessa", "Nessi", "Nessie", "Nessy", "Nesta", "Netta", "Netti", "Nettie", "Nettle", "Netty", "Nevsa", "Neysa", "Nichol", "Nichole", "Nicholle", "Nicki", "Nickie", "Nicky", "Nicol", "Nicola", "Nicole", "Nicolea", "Nicolette", "Nicoli", "Nicolina", "Nicoline", "Nicolle", "Nikaniki", "Nike", "Niki", "Nikki", "Nikkie", "Nikoletta", "Nikolia", "Nina", "Ninetta", "Ninette", "Ninnetta", "Ninnette", "Ninon", "Nissa", "Nisse", "Nissie", "Nissy", "Nita", "Nixie", "Noami", "Noel", "Noelani", "Noell", "Noella", "Noelle", "Noellyn", "Noelyn", "Noemi", "Nola", "Nolana", "Nolie", "Nollie", "Nomi", "Nona", "Nonah", "Noni", "Nonie", "Nonna", "Nonnah", "Nora", "Norah", "Norean", "Noreen", "Norene", "Norina", "Norine", "Norma", "Norri", "Norrie", "Norry", "Novelia", "Nydia", "Nyssa", "Octavia", "Odele", "Odelia", "Odelinda", "Odella", "Odelle", "Odessa", "Odetta", "Odette", "Odilia", "Odille", "Ofelia", "Ofella", "Ofilia", "Ola", "Olenka", "Olga", "Olia", "Olimpia", "Olive", "Olivette", "Olivia", "Olivie", "Oliy", "Ollie", "Olly", "Olva", "Olwen", "Olympe", "Olympia", "Olympie", "Ondrea", "Oneida", "Onida", "Oona", "Opal", "Opalina", "Opaline", "Ophelia", "Ophelie", "Ora", "Oralee", "Oralia", "Oralie", "Oralla", "Oralle", "Orel", "Orelee", "Orelia", "Orelie", "Orella", "Orelle", "Oriana", "Orly", "Orsa", "Orsola", "Ortensia", "Otha", "Othelia", "Othella", "Othilia", "Othilie", "Ottilie", "Page", "Paige", "Paloma", "Pam", "Pamela", "Pamelina", "Pamella", "Pammi", "Pammie", "Pammy", "Pandora", "Pansie", "Pansy", "Paola", "Paolina", "Papagena", "Pat", "Patience", "Patrica", "Patrice", "Patricia", "Patrizia", "Patsy", "Patti", "Pattie", "Patty", "Paula", "Paule", "Pauletta", "Paulette", "Pauli", "Paulie", "Paulina", "Pauline", "Paulita", "Pauly", "Pavia", "Pavla", "Pearl", "Pearla", "Pearle", "Pearline", "Peg", "Pegeen", "Peggi", "Peggie", "Peggy", "Pen", "Penelopa", "Penelope", "Penni", "Pennie", "Penny", "Pepi", "Pepita", "Peri", "Peria", "Perl", "Perla", "Perle", "Perri", "Perrine", "Perry", "Persis", "Pet", "Peta", "Petra", "Petrina", "Petronella", "Petronia", "Petronilla", "Petronille", "Petunia", "Phaedra", "Phaidra", "Phebe", "Phedra", "Phelia", "Phil", "Philipa", "Philippa", "Philippe", "Philippine", "Philis", "Phillida", "Phillie", "Phillis", "Philly", "Philomena", "Phoebe", "Phylis", "Phyllida", "Phyllis", "Phyllys", "Phylys", "Pia", "Pier", "Pierette", "Pierrette", "Pietra", "Piper", "Pippa", "Pippy", "Polly", "Pollyanna", "Pooh", "Poppy", "Portia", "Pris", "Prisca", "Priscella", "Priscilla", "Prissie", "Pru", "Prudence", "Prudi", "Prudy", "Prue", "Queenie", "Quentin", "Querida", "Quinn", "Quinta", "Quintana", "Quintilla", "Quintina", "Rachael", "Rachel", "Rachele", "Rachelle", "Rae", "Raeann", "Raf", "Rafa", "Rafaela", "Rafaelia", "Rafaelita", "Rahal", "Rahel", "Raina", "Raine", "Rakel", "Ralina", "Ramona", "Ramonda", "Rana", "Randa", "Randee", "Randene", "Randi", "Randie", "Randy", "Ranee", "Rani", "Rania", "Ranice", "Ranique", "Ranna", "Raphaela", "Raquel", "Raquela", "Rasia", "Rasla", "Raven", "Ray", "Raychel", "Raye", "Rayna", "Raynell", "Rayshell", "Rea", "Reba", "Rebbecca", "Rebe", "Rebeca", "Rebecca", "Rebecka", "Rebeka", "Rebekah", "Rebekkah", "Ree", "Reeba", "Reena", "Reeta", "Reeva", "Regan", "Reggi", "Reggie", "Regina", "Regine", "Reiko", "Reina", "Reine", "Remy", "Rena", "Renae", "Renata", "Renate", "Rene", "Renee", "Renell", "Renelle", "Renie", "Rennie", "Reta", "Retha", "Revkah", "Rey", "Reyna", "Rhea", "Rheba", "Rheta", "Rhetta", "Rhiamon", "Rhianna", "Rhianon", "Rhoda", "Rhodia", "Rhodie", "Rhody", "Rhona", "Rhonda", "Riane", "Riannon", "Rianon", "Rica", "Ricca", "Rici", "Ricki", "Rickie", "Ricky", "Riki", "Rikki", "Rina", "Risa", "Rita", "Riva", "Rivalee", "Rivi", "Rivkah", "Rivy", "Roana", "Roanna", "Roanne", "Robbi", "Robbie", "Robbin", "Robby", "Robbyn", "Robena", "Robenia", "Roberta", "Robin", "Robina", "Robinet", "Robinett", "Robinetta", "Robinette", "Robinia", "Roby", "Robyn", "Roch", "Rochell", "Rochella", "Rochelle", "Rochette", "Roda", "Rodi", "Rodie", "Rodina", "Rois", "Romola", "Romona", "Romonda", "Romy", "Rona", "Ronalda", "Ronda", "Ronica", "Ronna", "Ronni", "Ronnica", "Ronnie", "Ronny", "Roobbie", "Rora", "Rori", "Rorie", "Rory", "Ros", "Rosa", "Rosabel", "Rosabella", "Rosabelle", "Rosaleen", "Rosalia", "Rosalie", "Rosalind", "Rosalinda", "Rosalinde", "Rosaline", "Rosalyn", "Rosalynd", "Rosamond", "Rosamund", "Rosana", "Rosanna", "Rosanne", "Rose", "Roseann", "Roseanna", "Roseanne", "Roselia", "Roselin", "Roseline", "Rosella", "Roselle", "Rosemaria", "Rosemarie", "Rosemary", "Rosemonde", "Rosene", "Rosetta", "Rosette", "Roshelle", "Rosie", "Rosina", "Rosita", "Roslyn", "Rosmunda", "Rosy", "Row", "Rowe", "Rowena", "Roxana", "Roxane", "Roxanna", "Roxanne", "Roxi", "Roxie", "Roxine", "Roxy", "Roz", "Rozalie", "Rozalin", "Rozamond", "Rozanna", "Rozanne", "Roze", "Rozele", "Rozella", "Rozelle", "Rozina", "Rubetta", "Rubi", "Rubia", "Rubie", "Rubina", "Ruby", "Ruperta", "Ruth", "Ruthann", "Ruthanne", "Ruthe", "Ruthi", "Ruthie", "Ruthy", "Ryann", "Rycca", "Saba", "Sabina", "Sabine", "Sabra", "Sabrina", "Sacha", "Sada", "Sadella", "Sadie", "Sadye", "Saidee", "Sal", "Salaidh", "Sallee", "Salli", "Sallie", "Sally", "Sallyann", "Sallyanne", "Saloma", "Salome", "Salomi", "Sam", "Samantha", "Samara", "Samaria", "Sammy", "Sande", "Sandi", "Sandie", "Sandra", "Sandy", "Sandye", "Sapphira", "Sapphire", "Sara", "Sara-Ann", "Saraann", "Sarah", "Sarajane", "Saree", "Sarena", "Sarene", "Sarette", "Sari", "Sarina", "Sarine", "Sarita", "Sascha", "Sasha", "Sashenka", "Saudra", "Saundra", "Savina", "Sayre", "Scarlet", "Scarlett", "Sean", "Seana", "Seka", "Sela", "Selena", "Selene", "Selestina", "Selia", "Selie", "Selina", "Selinda", "Seline", "Sella", "Selle", "Selma", "Sena", "Sephira", "Serena", "Serene", "Shae", "Shaina", "Shaine", "Shalna", "Shalne", "Shana", "Shanda", "Shandee", "Shandeigh", "Shandie", "Shandra", "Shandy", "Shane", "Shani", "Shanie", "Shanna", "Shannah", "Shannen", "Shannon", "Shanon", "Shanta", "Shantee", "Shara", "Sharai", "Shari", "Sharia", "Sharity", "Sharl", "Sharla", "Sharleen", "Sharlene", "Sharline", "Sharon", "Sharona", "Sharron", "Sharyl", "Shaun", "Shauna", "Shawn", "Shawna", "Shawnee", "Shay", "Shayla", "Shaylah", "Shaylyn", "Shaylynn", "Shayna", "Shayne", "Shea", "Sheba", "Sheela", "Sheelagh", "Sheelah", "Sheena", "Sheeree", "Sheila", "Sheila-Kathryn", "Sheilah", "Shel", "Shela", "Shelagh", "Shelba", "Shelbi", "Shelby", "Shelia", "Shell", "Shelley", "Shelli", "Shellie", "Shelly", "Shena", "Sher", "Sheree", "Sheri", "Sherie", "Sherill", "Sherilyn", "Sherline", "Sherri", "Sherrie", "Sherry", "Sherye", "Sheryl", "Shina", "Shir", "Shirl", "Shirlee", "Shirleen", "Shirlene", "Shirley", "Shirline", "Shoshana", "Shoshanna", "Siana", "Sianna", "Sib", "Sibbie", "Sibby", "Sibeal", "Sibel", "Sibella", "Sibelle", "Sibilla", "Sibley", "Sibyl", "Sibylla", "Sibylle", "Sidoney", "Sidonia", "Sidonnie", "Sigrid", "Sile", "Sileas", "Silva", "Silvana", "Silvia", "Silvie", "Simona", "Simone", "Simonette", "Simonne", "Sindee", "Siobhan", "Sioux", "Siouxie", "Sisely", "Sisile", "Sissie", "Sissy", "Siusan", "Sofia", "Sofie", "Sondra", "Sonia", "Sonja", "Sonni", "Sonnie", "Sonnnie", "Sonny", "Sonya", "Sophey", "Sophi", "Sophia", "Sophie", "Sophronia", "Sorcha", "Sosanna", "Stace", "Stacee", "Stacey", "Staci", "Stacia", "Stacie", "Stacy", "Stafani", "Star", "Starla", "Starlene", "Starlin", "Starr", "Stefa", "Stefania", "Stefanie", "Steffane", "Steffi", "Steffie", "Stella", "Stepha", "Stephana", "Stephani", "Stephanie", "Stephannie", "Stephenie", "Stephi", "Stephie", "Stephine", "Stesha", "Stevana", "Stevena", "Stoddard", "Storm", "Stormi", "Stormie", "Stormy", "Sue", "Suellen", "Sukey", "Suki", "Sula", "Sunny", "Sunshine", "Susan", "Susana", "Susanetta", "Susann", "Susanna", "Susannah", "Susanne", "Susette", "Susi", "Susie", "Susy", "Suzann", "Suzanna", "Suzanne", "Suzette", "Suzi", "Suzie", "Suzy", "Sybil", "Sybila", "Sybilla", "Sybille", "Sybyl", "Sydel", "Sydelle", "Sydney", "Sylvia", "Tabatha", "Tabbatha", "Tabbi", "Tabbie", "Tabbitha", "Tabby", "Tabina", "Tabitha", "Taffy", "Talia", "Tallia", "Tallie", "Tallou", "Tallulah", "Tally", "Talya", "Talyah", "Tamar", "Tamara", "Tamarah", "Tamarra", "Tamera", "Tami", "Tamiko", "Tamma", "Tammara", "Tammi", "Tammie", "Tammy", "Tamqrah", "Tamra", "Tana", "Tandi", "Tandie", "Tandy", "Tanhya", "Tani", "Tania", "Tanitansy", "Tansy", "Tanya", "Tara", "Tarah", "Tarra", "Tarrah", "Taryn", "Tasha", "Tasia", "Tate", "Tatiana", "Tatiania", "Tatum", "Tawnya", "Tawsha", "Ted", "Tedda", "Teddi", "Teddie", "Teddy", "Tedi", "Tedra", "Teena", "TEirtza", "Teodora", "Tera", "Teresa", "Terese", "Teresina", "Teresita", "Teressa", "Teri", "Teriann", "Terra", "Terri", "Terrie", "Terrijo", "Terry", "Terrye", "Tersina", "Terza", "Tess", "Tessa", "Tessi", "Tessie", "Tessy", "Thalia", "Thea", "Theadora", "Theda", "Thekla", "Thelma", "Theo", "Theodora", "Theodosia", "Theresa", "Therese", "Theresina", "Theresita", "Theressa", "Therine", "Thia", "Thomasa", "Thomasin", "Thomasina", "Thomasine", "Tiena", "Tierney", "Tiertza", "Tiff", "Tiffani", "Tiffanie", "Tiffany", "Tiffi", "Tiffie", "Tiffy", "Tilda", "Tildi", "Tildie", "Tildy", "Tillie", "Tilly", "Tim", "Timi", "Timmi", "Timmie", "Timmy", "Timothea", "Tina", "Tine", "Tiphani", "Tiphanie", "Tiphany", "Tish", "Tisha", "Tobe", "Tobey", "Tobi", "Toby", "Tobye", "Toinette", "Toma", "Tomasina", "Tomasine", "Tomi", "Tommi", "Tommie", "Tommy", "Toni", "Tonia", "Tonie", "Tony", "Tonya", "Tonye", "Tootsie", "Torey", "Tori", "Torie", "Torrie", "Tory", "Tova", "Tove", "Tracee", "Tracey", "Traci", "Tracie", "Tracy", "Trenna", "Tresa", "Trescha", "Tressa", "Tricia", "Trina", "Trish", "Trisha", "Trista", "Trix", "Trixi", "Trixie", "Trixy", "Truda", "Trude", "Trudey", "Trudi", "Trudie", "Trudy", "Trula", "Tuesday", "Twila", "Twyla", "Tybi", "Tybie", "Tyne", "Ula", "Ulla", "Ulrica", "Ulrika", "Ulrikaumeko", "Ulrike", "Umeko", "Una", "Ursa", "Ursala", "Ursola", "Ursula", "Ursulina", "Ursuline", "Uta", "Val", "Valaree", "Valaria", "Vale", "Valeda", "Valencia", "Valene", "Valenka", "Valentia", "Valentina", "Valentine", "Valera", "Valeria", "Valerie", "Valery", "Valerye", "Valida", "Valina", "Valli", "Vallie", "Vally", "Valma", "Valry", "Van", "Vanda", "Vanessa", "Vania", "Vanna", "Vanni", "Vannie", "Vanny", "Vanya", "Veda", "Velma", "Velvet", "Venita", "Venus", "Vera", "Veradis", "Vere", "Verena", "Verene", "Veriee", "Verile", "Verina", "Verine", "Verla", "Verna", "Vernice", "Veronica", "Veronika", "Veronike", "Veronique", "Vevay", "Vi", "Vicki", "Vickie", "Vicky", "Victoria", "Vida", "Viki", "Vikki", "Vikky", "Vilhelmina", "Vilma", "Vin", "Vina", "Vinita", "Vinni", "Vinnie", "Vinny", "Viola", "Violante", "Viole", "Violet", "Violetta", "Violette", "Virgie", "Virgina", "Virginia", "Virginie", "Vita", "Vitia", "Vitoria", "Vittoria", "Viv", "Viva", "Vivi", "Vivia", "Vivian", "Viviana", "Vivianna", "Vivianne", "Vivie", "Vivien", "Viviene", "Vivienne", "Viviyan", "Vivyan", "Vivyanne", "Vonni", "Vonnie", "Vonny", "Vyky", "Wallie", "Wallis", "Walliw", "Wally", "Waly", "Wanda", "Wandie", "Wandis", "Waneta", "Wanids", "Wenda", "Wendeline", "Wendi", "Wendie", "Wendy", "Wendye", "Wenona", "Wenonah", "Whitney", "Wileen", "Wilhelmina", "Wilhelmine", "Wilie", "Willa", "Willabella", "Willamina", "Willetta", "Willette", "Willi", "Willie", "Willow", "Willy", "Willyt", "Wilma", "Wilmette", "Wilona", "Wilone", "Wilow", "Windy", "Wini", "Winifred", "Winna", "Winnah", "Winne", "Winni", "Winnie", "Winnifred", "Winny", "Winona", "Winonah", "Wren", "Wrennie", "Wylma", "Wynn", "Wynne", "Wynnie", "Wynny", "Xaviera", "Xena", "Xenia", "Xylia", "Xylina", "Yalonda", "Yasmeen", "Yasmin", "Yelena", "Yetta", "Yettie", "Yetty", "Yevette", "Ynes", "Ynez", "Yoko", "Yolanda", "Yolande", "Yolane", "Yolanthe", "Yoshi", "Yoshiko", "Yovonnda", "Ysabel", "Yvette", "Yvonne", "Zabrina", "Zahara", "Zandra", "Zaneta", "Zara", "Zarah", "Zaria", "Zarla", "Zea", "Zelda", "Zelma", "Zena", "Zenia", "Zia", "Zilvia", "Zita", "Zitella", "Zoe", "Zola", "Zonda", "Zondra", "Zonnya", "Zora", "Zorah", "Zorana", "Zorina", "Zorine", "Zsa Zsa", "Zsazsa", "Zulema", "Zuzana"];

    exports.default = data;

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Request = exports.Headers = undefined;

  __webpack_require__(758);

  exports.default = self.fetch.bind(self); /**
                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                            *
                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                            *
                                            * This source code is licensed under the MIT license found in the
                                            * LICENSE.txt file in the root directory of this source tree.
                                            */

  var Headers = exports.Headers = self.Headers;
  var Request = exports.Request = self.Request;
  var Response = exports.Response = self.Response;

/***/ },

/***/ 759:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\components\\Layout\\Layout.js'; /**
                                                                                                * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                *
                                                                                                * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                *
                                                                                                * This source code is licensed under the MIT license found in the
                                                                                                * LICENSE.txt file in the root directory of this source tree.
                                                                                                */

  var _reactWeui = __webpack_require__(638);

  var _reactWeui2 = _interopRequireDefault(_reactWeui);

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(622);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Layout = __webpack_require__(760);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _history = __webpack_require__(586);

  var _history2 = _interopRequireDefault(_history);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Tab = _reactWeui2.default.Tab,
      TabBody = _reactWeui2.default.TabBody,
      TabBar = _reactWeui2.default.TabBar,
      TabBarItem = _reactWeui2.default.TabBarItem,
      TabBarLabel = _reactWeui2.default.TabBarLabel,
      TabBarIcon = _reactWeui2.default.TabBarIcon;

  var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Layout);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        tab: 0
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Layout, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          { className: _Layout2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          _react2.default.createElement(
            Tab,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            _react2.default.createElement(
              TabBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: this
              },
              this.props.children
            ),
            _react2.default.createElement(
              TabBar,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: this
              },
              _react2.default.createElement(TabBarItem, {
                active: this.state.tab === 0,
                onClick: function onClick() {
                  _this2.setState({ tab: 0 });
                  _history2.default.push('/react-starter-kit/');
                },
                icon: _react2.default.createElement('span', { className: 'iconfont icon-message', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                }),
                label: '\u5FAE\u4FE1',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              }),
              _react2.default.createElement(
                TabBarItem,
                {
                  active: this.state.tab === 1,
                  onClick: function onClick() {
                    _this2.setState({ tab: 1 });
                    _history2.default.push('/react-starter-kit/contact');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                },
                _react2.default.createElement(
                  TabBarIcon,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    },
                    __self: this
                  },
                  _react2.default.createElement('span', { className: 'iconfont icon-contact', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: this
                  })
                ),
                _react2.default.createElement(
                  TabBarLabel,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  '\u901A\u8BAF\u5F55'
                )
              ),
              _react2.default.createElement(TabBarItem, {
                active: this.state.tab === 2,
                onClick: function onClick() {
                  _this2.setState({ tab: 2 });
                  _history2.default.push('/react-starter-kit/discover');
                },
                icon: _react2.default.createElement('span', { className: 'iconfont icon-discover', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                }),
                label: '\u53D1\u73B0',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                },
                __self: this
              }),
              _react2.default.createElement(TabBarItem, {
                active: this.state.tab === 3,
                onClick: function onClick() {
                  _this2.setState({ tab: 3 });
                  _history2.default.push('/react-starter-kit/me');
                },
                icon: _react2.default.createElement('span', { className: 'iconfont icon-my', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  },
                  __self: this
                }),
                label: '\u6211',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Layout;
  }(_react2.default.Component);

  Layout.propTypes = {
    children: _react.PropTypes.node.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(761);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "\nhtml,\nbody {\n  height: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: -apple-system-font, 'Helvetica Neue', Helvetica, sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\nbody,\n.Layout-page-1YjLO {\n  background-color: #f8f8f8;\n}\n\n.Layout-container-1fJd0 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n", "", {"version":3,"sources":["/./components/Layout/Layout.css"],"names":[],"mappings":";AACA;;EAEE,aAAa;EACb,yCAAyC;CAC1C;;AAED;EACE,yEAAyE;CAC1E;;AAED;EACE,iBAAiB;CAClB;;AAED;;EAEE,0BAA0B;CAC3B;;AAED;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,iBAAiB;CAClB","file":"Layout.css","sourcesContent":["\nhtml,\nbody {\n  height: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: -apple-system-font, 'Helvetica Neue', Helvetica, sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\nbody,\n.page {\n  background-color: #f8f8f8;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"page": "Layout-page-1YjLO",
  	"container": "Layout-container-1fJd0"
  };

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\contact\\index.js'; /**
                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                            *
                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                            *
                                                                                            * This source code is licensed under the MIT license found in the
                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                            */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Contact = __webpack_require__(763);

  var _Contact2 = _interopRequireDefault(_Contact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = '通讯录';

  exports.default = {

    path: '/react-starter-kit/contact',

    action: function action() {
      var friends = [{ title: '张三', uid: '1', description: '四姓18家' }, { title: '李四', uid: '2', description: '四姓18家' }, { title: '王五', uid: '3', description: '四姓18家' }, { title: '赵六', uid: '4', description: '四姓18家' }];
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          _react2.default.createElement(_Contact2.default, { friends: friends, title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },

/***/ 763:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\contact\\Contact.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _reactWeui = __webpack_require__(638);

  var _reactWeui2 = _interopRequireDefault(_reactWeui);

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(622);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _icon_addfriend = __webpack_require__(764);

  var _icon_addfriend2 = _interopRequireDefault(_icon_addfriend);

  var _icon_public = __webpack_require__(765);

  var _icon_public2 = _interopRequireDefault(_icon_public);

  var _icon_qunliao = __webpack_require__(766);

  var _icon_qunliao2 = _interopRequireDefault(_icon_qunliao);

  var _Contact = __webpack_require__(767);

  var _Contact2 = _interopRequireDefault(_Contact);

  var _nameDB = __webpack_require__(637);

  var _nameDB2 = _interopRequireDefault(_nameDB);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var smallIcon = _react2.default.createElement('img', { className: _Contact2.default.icon, alt: '', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  });

  var SearchBar = _reactWeui2.default.SearchBar,
      Panel = _reactWeui2.default.Panel,
      PanelHeader = _reactWeui2.default.PanelHeader,
      PanelBody = _reactWeui2.default.PanelBody,
      MediaBox = _reactWeui2.default.MediaBox,
      Cell = _reactWeui2.default.Cell,
      CellBody = _reactWeui2.default.CellBody,
      Cells = _reactWeui2.default.Cells,
      CellHeader = _reactWeui2.default.CellHeader;

  var Contact = function (_React$Component) {
    (0, _inherits3.default)(Contact, _React$Component);

    function Contact() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Contact);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        searchText: '',
        results: []
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Contact, [{
      key: 'handleChange',
      value: function handleChange(text) {
        var keywords = [text];
        var results = _nameDB2.default.filter(/./.test.bind(new RegExp(keywords.join('|'), 'i')));

        if (results.length > 3) results = results.slice(0, 3);
        this.setState({
          results: results,
          searchText: text
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          },
          _react2.default.createElement(SearchBar, {
            onChange: this.handleChange.bind(this),
            placeholder: 'Search',
            lang: {
              cancel: 'Cancel'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }),
          _react2.default.createElement(
            Panel,
            { style: { display: this.state.searchText ? 'none' : null, marginTop: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Contact2.default.icon, alt: '', src: _icon_addfriend2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                          },
                          __self: this
                        },
                        '\u65B0\u7684\u670B\u53CB'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 86
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Contact2.default.icon, src: _icon_qunliao2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 86
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88
                          },
                          __self: this
                        },
                        '\u7FA4\u804A'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Contact2.default.icon, src: _icon_public2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 97
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 98
                          },
                          __self: this
                        },
                        '\u516C\u4F17\u53F7'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            { style: { display: this.state.searchText ? 'none' : null, marginTop: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            },
            _react2.default.createElement(
              PanelHeader,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                },
                __self: this
              },
              'Z'
            ),
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                },
                __self: this
              },
              this.props.friends.length > 0 ? this.props.friends.map(function (item, i) {
                return _react2.default.createElement(
                  MediaBox,
                  { type: 'small_appmsg', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    },
                    __self: _this2
                  },
                  _react2.default.createElement(
                    Cells,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      },
                      __self: _this2
                    },
                    _react2.default.createElement(
                      Cell,
                      { href: 'javascript:;', access: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        },
                        __self: _this2
                      },
                      _react2.default.createElement(
                        CellHeader,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 117
                          },
                          __self: _this2
                        },
                        smallIcon
                      ),
                      _react2.default.createElement(
                        CellBody,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                          },
                          __self: _this2
                        },
                        _react2.default.createElement(
                          'p',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 119
                            },
                            __self: _this2
                          },
                          item.title
                        )
                      )
                    )
                  )
                );
              }) : _react2.default.createElement(
                MediaBox,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                  },
                  __self: this
                },
                'Can\'t find any\uFF01'
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            { style: { display: this.state.searchText ? null : 'none', marginTop: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            },
            _react2.default.createElement(
              PanelHeader,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                },
                __self: this
              },
              'Female Name Search'
            ),
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                },
                __self: this
              },
              this.state.results.length > 0 ? this.state.results.map(function (item, i) {
                return _react2.default.createElement(
                  MediaBox,
                  { type: 'small_appmsg', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 139
                    },
                    __self: _this2
                  },
                  _react2.default.createElement(
                    Cells,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                      },
                      __self: _this2
                    },
                    _react2.default.createElement(
                      Cell,
                      { href: 'javascript:;', access: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 141
                        },
                        __self: _this2
                      },
                      _react2.default.createElement(
                        CellHeader,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 142
                          },
                          __self: _this2
                        },
                        smallIcon
                      ),
                      _react2.default.createElement(
                        CellBody,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 143
                          },
                          __self: _this2
                        },
                        _react2.default.createElement(
                          'p',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 144
                            },
                            __self: _this2
                          },
                          item
                        )
                      )
                    )
                  )
                );
              }) : _react2.default.createElement(
                MediaBox,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                  },
                  __self: this
                },
                'Can\'t find any\uFF01'
              )
            )
          )
        );
      }
    }]);
    return Contact;
  }(_react2.default.Component);

  Contact.propTypes = {
    friends: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      title: _react.PropTypes.string.isRequired,
      contentSnippet: _react.PropTypes.string
    })).isRequired
  };
    exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/contact/assets/icon_addfriend.png?d8ad9fe6";

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/contact/assets/icon_public.png?0bebb280";

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/contact/assets/icon_qunliao.png?a95195cb";

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(768);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Contact-icon-1bPof {\n  width: 40px;\n  margin-right: 5px;\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/contact/Contact.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;CAChB","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.icon {\n  width: 40px;\n  margin-right: 5px;\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"icon": "Contact-icon-1bPof"
  };

/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\login\\index.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Login = __webpack_require__(770);

  var _Login2 = _interopRequireDefault(_Login);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Log In';

  exports.default = {

    path: '/login',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Login2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },

/***/ 770:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\login\\Login.js'; /**
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

  var _Login = __webpack_require__(771);

  var _Login2 = _interopRequireDefault(_Login);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Login = function (_React$Component) {
    (0, _inherits3.default)(Login, _React$Component);

    function Login() {
      (0, _classCallCheck3.default)(this, Login);
      return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
    }

    (0, _createClass3.default)(Login, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Login2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Login2.default.container, __source: {
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
              { className: _Login2.default.lead, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              'Log in with your username or company email address.'
            ),
            _react2.default.createElement(
              'div',
              { className: _Login2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              _react2.default.createElement(
                'a',
                { className: _Login2.default.facebook, href: '/login/facebook', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'svg',
                  {
                    className: _Login2.default.icon,
                    width: '30',
                    height: '30',
                    viewBox: '0 0 30 30',
                    xmlns: 'http://www.w3.org/2000/svg',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  _react2.default.createElement('path', {
                    d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  })
                ),
                _react2.default.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: this
                  },
                  'Log in with Facebook'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Login2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              },
              _react2.default.createElement(
                'a',
                { className: _Login2.default.google, href: '/login/google', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'svg',
                  {
                    className: _Login2.default.icon,
                    width: '30',
                    height: '30',
                    viewBox: '0 0 30 30',
                    xmlns: 'http://www.w3.org/2000/svg',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  _react2.default.createElement('path', {
                    d: 'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' + '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' + '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' + '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' + '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' + '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' + '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' + '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  })
                ),
                _react2.default.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: this
                  },
                  'Log in with Google'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Login2.default.formGroup, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                },
                __self: this
              },
              _react2.default.createElement(
                'a',
                { className: _Login2.default.twitter, href: '/login/twitter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'svg',
                  {
                    className: _Login2.default.icon,
                    width: '30',
                    height: '30',
                    viewBox: '0 0 30 30',
                    xmlns: 'http://www.w3.org/2000/svg',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    },
                    __self: this
                  },
                  _react2.default.createElement('path', {
                    d: 'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' + '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' + '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' + '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' + '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' + '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' + '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    },
                    __self: this
                  })
                ),
                _react2.default.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    },
                    __self: this
                  },
                  'Log in with Twitter'
                )
              )
            ),
            _react2.default.createElement(
              'strong',
              { className: _Login2.default.lineThrough, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                },
                __self: this
              },
              'OR'
            ),
            _react2.default.createElement(
              'form',
              { method: 'post', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Login2.default.formGroup, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'label',
                  { className: _Login2.default.label, htmlFor: 'usernameOrEmail', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    },
                    __self: this
                  },
                  'Username or email address:'
                ),
                _react2.default.createElement('input', {
                  className: _Login2.default.input,
                  id: 'usernameOrEmail',
                  type: 'text',
                  name: 'usernameOrEmail',
                  autoFocus: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                })
              ),
              _react2.default.createElement(
                'div',
                { className: _Login2.default.formGroup, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'label',
                  { className: _Login2.default.label, htmlFor: 'password', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    },
                    __self: this
                  },
                  'Password:'
                ),
                _react2.default.createElement('input', {
                  className: _Login2.default.input,
                  id: 'password',
                  type: 'password',
                  name: 'password',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  },
                  __self: this
                })
              ),
              _react2.default.createElement(
                'div',
                { className: _Login2.default.formGroup, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'button',
                  { className: _Login2.default.button, type: 'submit', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    },
                    __self: this
                  },
                  'Log in'
                )
              )
            )
          )
        );
      }
    }]);
    return Login;
  }(_react2.default.Component);

  Login.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(772);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Login.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 772:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Login-root-AfBIm {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Login-container-2g23a {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.Login-lead-ri6Fe {\n  font-size: 1.25em;\n}\n\n.Login-formGroup-3_Xqo {\n  margin-bottom: 15px;\n}\n\n.Login-label-2Z7lN {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.Login-input-PvYXH {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.Login-input-PvYXH:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.Login-button-10Was {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.Login-button-10Was:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.Login-button-10Was:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.Login-facebook-3CIBL {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n\n.Login-facebook-3CIBL:hover {\n  background: #2d4373;\n}\n\n.Login-google-1IgkT {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n\n.Login-google-1IgkT:hover {\n  background: #c23321;\n}\n\n.Login-twitter-3Vqlt {\n  border-color: #55acee;\n  background: #55acee;\n}\n\n.Login-twitter-3Vqlt:hover {\n  background: #2795e9;\n}\n\n.Login-icon-97UqG {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.Login-lineThrough-3eY1F {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.Login-lineThrough-3eY1F::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.Login-lineThrough-3eY1F::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/./routes/login/Login.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,iFAAyE;EAAzE,yEAAyE;CAC1E;;AAED;EACE,sBAAsB;EACtB,iFAAiF;CAClF;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;;AAED;EACE,mCAAmC;CACpC;;AAED;EACE,sBAAsB;EACtB,2CAA2C;CAC5C;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Login-root-AfBIm",
  	"container": "Login-container-2g23a",
  	"lead": "Login-lead-ri6Fe",
  	"formGroup": "Login-formGroup-3_Xqo",
  	"label": "Login-label-2Z7lN",
  	"input": "Login-input-PvYXH",
  	"button": "Login-button-10Was",
  	"facebook": "Login-facebook-3CIBL Login-button-10Was",
  	"google": "Login-google-1IgkT Login-button-10Was",
  	"twitter": "Login-twitter-3Vqlt Login-button-10Was",
  	"icon": "Login-icon-97UqG",
  	"lineThrough": "Login-lineThrough-3eY1F"
  };

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\register\\index.js'; /**
                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                             *
                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                             *
                                                                                             * This source code is licensed under the MIT license found in the
                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                             */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Register = __webpack_require__(774);

  var _Register2 = _interopRequireDefault(_Register);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'New User Registration';

  exports.default = {

    path: '/register',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Register2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },

/***/ 774:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\register\\Register.js'; /**
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

  var _Register = __webpack_require__(775);

  var _Register2 = _interopRequireDefault(_Register);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Register = function (_React$Component) {
    (0, _inherits3.default)(Register, _React$Component);

    function Register() {
      (0, _classCallCheck3.default)(this, Register);
      return (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).apply(this, arguments));
    }

    (0, _createClass3.default)(Register, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Register2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Register2.default.container, __source: {
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
    return Register;
  }(_react2.default.Component);

  Register.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(776);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Register.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Register-root-3RBtf {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Register-container-1Lf8X {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/register/Register.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Register.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Register-root-3RBtf",
  	"container": "Register-container-1Lf8X"
  };

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(69);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(642);

  var _extends3 = _interopRequireDefault(_extends2);

  var _promise = __webpack_require__(74);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(73);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\about\\index.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Page = __webpack_require__(778);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/about',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  __webpack_require__.e/* nsure */(1, function (require) {
                    resolve(__webpack_require__(781));
                  });
                });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Page2.default, (0, _extends3.default)({}, data, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    }))
                  )
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },

/***/ 778:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\components\\Page\\Page.js'; /**
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

  var _Page = __webpack_require__(779);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Page = function (_React$Component) {
    (0, _inherits3.default)(Page, _React$Component);

    function Page() {
      (0, _classCallCheck3.default)(this, Page);
      return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
    }

    (0, _createClass3.default)(Page, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            title = _props.title,
            html = _props.html;

        return _react2.default.createElement(
          'div',
          { className: _Page2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Page2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            title && _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              title
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html }, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Page;
  }(_react2.default.Component);

  Page.propTypes = {
    title: _react.PropTypes.string,
    html: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Page2.default)(Page);

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(780);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Page.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Page.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Page-root-3A4gI {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-3bkIh {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./components/Page/Page.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Page.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Page-root-3A4gI",
  	"container": "Page-container-3bkIh"
  };

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(69);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(642);

  var _extends3 = _interopRequireDefault(_extends2);

  var _promise = __webpack_require__(74);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(73);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\privacy\\index.js'; /**
                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                            *
                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                            *
                                                                                            * This source code is licensed under the MIT license found in the
                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                            */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Page = __webpack_require__(778);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/privacy',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  __webpack_require__.e/* nsure */(2, function (require) {
                    resolve(__webpack_require__(783));
                  });
                });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Page2.default, (0, _extends3.default)({}, data, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: _this
                    }))
                  )
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(69);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _promise = __webpack_require__(74);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(73);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\admin\\index.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Admin Page';
  var isAdmin = false;

  exports.default = {

    path: '/admin',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var Admin;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isAdmin) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', { redirect: '/login' });

              case 2:
                _context.next = 4;
                return new _promise2.default(function (resolve) {
                  __webpack_require__.e/* nsure */(3, function (require) {
                    return resolve(__webpack_require__(785).default);
                  });
                });

              case 4:
                Admin = _context.sent;
                return _context.abrupt('return', {
                  title: title,
                  chunk: 'admin',
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: _this
                    },
                    _react2.default.createElement(Admin, { title: title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: _this
                    })
                  )
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\discover\\index.js'; /**
                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                             *
                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                             *
                                                                                             * This source code is licensed under the MIT license found in the
                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                             */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Discover = __webpack_require__(789);

  var _Discover2 = _interopRequireDefault(_Discover);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = '发现';

  exports.default = {

    path: '/react-starter-kit/discover',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Discover2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },

/***/ 789:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\discover\\Discover.js'; /**
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

  var _Discover = __webpack_require__(790);

  var _Discover2 = _interopRequireDefault(_Discover);

  var _icon_de_game = __webpack_require__(792);

  var _icon_de_game2 = _interopRequireDefault(_icon_de_game);

  var _icon_de_nearby = __webpack_require__(793);

  var _icon_de_nearby2 = _interopRequireDefault(_icon_de_nearby);

  var _icon_de_ping = __webpack_require__(794);

  var _icon_de_ping2 = _interopRequireDefault(_icon_de_ping);

  var _icon_de_saoyisao = __webpack_require__(795);

  var _icon_de_saoyisao2 = _interopRequireDefault(_icon_de_saoyisao);

  var _icon_de_shop = __webpack_require__(796);

  var _icon_de_shop2 = _interopRequireDefault(_icon_de_shop);

  var _icon_de_yao = __webpack_require__(797);

  var _icon_de_yao2 = _interopRequireDefault(_icon_de_yao);

  var _v = __webpack_require__(798);

  var _v2 = _interopRequireDefault(_v);

  var _reactWeui = __webpack_require__(638);

  var _reactWeui2 = _interopRequireDefault(_reactWeui);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var smallIcon = _react2.default.createElement('img', { className: _Discover2.default.icon, src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  });

  var Panel = _reactWeui2.default.Panel,
      PanelBody = _reactWeui2.default.PanelBody,
      MediaBox = _reactWeui2.default.MediaBox,
      Cell = _reactWeui2.default.Cell,
      CellBody = _reactWeui2.default.CellBody,
      Cells = _reactWeui2.default.Cells,
      CellHeader = _reactWeui2.default.CellHeader,
      CellFooter = _reactWeui2.default.CellFooter;

  var Contact = function (_React$Component) {
    (0, _inherits3.default)(Contact, _React$Component);

    function Contact() {
      (0, _classCallCheck3.default)(this, Contact);
      return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
    }

    (0, _createClass3.default)(Contact, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Discover2.default.icon, src: _v2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                          },
                          __self: this
                        },
                        '\u670B\u53CB\u5708'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Discover2.default.icon, src: _icon_de_saoyisao2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                          },
                          __self: this
                        },
                        '\u626B\u4E00\u626B'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      },
                      __self: this
                    })
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 72
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Discover2.default.icon, src: _icon_de_yao2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 72
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                          },
                          __self: this
                        },
                        '\u6447\u4E00\u6447'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Discover2.default.icon, src: _icon_de_nearby2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 88
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                          },
                          __self: this
                        },
                        '\u9644\u8FD1\u7684\u4EBA'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                      },
                      __self: this
                    })
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Discover2.default.icon, src: _icon_de_ping2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 99
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                          },
                          __self: this
                        },
                        '\u6F02\u6D41\u74F6'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Discover2.default.icon, src: _icon_de_shop2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 114
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 115
                          },
                          __self: this
                        },
                        '\u8D2D\u7269'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      },
                      __self: this
                    })
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { href: 'javascript:;', access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 124
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Discover2.default.icon, src: _icon_de_game2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 124
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 125
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 126
                          },
                          __self: this
                        },
                        '\u6E38\u620F'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Contact;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Discover2.default)(Contact);

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(791);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Discover.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Discover.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Discover-icon-1zSrv {\n  width: 30px;\n  margin-right: 10px;\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/discover/Discover.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;CAChB","file":"Discover.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.icon {\n  width: 30px;\n  margin-right: 10px;\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"icon": "Discover-icon-1zSrv"
  };

/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/discover/assets/icon_de_game.png?90bde97d";

/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/discover/assets/icon_de_nearby.png?a18c0d0b";

/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/discover/assets/icon_de_ping.png?575a0acb";

/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/discover/assets/icon_de_saoyisao.png?ad943046";

/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/discover/assets/icon_de_shop.png?bea93253";

/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/discover/assets/icon_de_yao.png?37676f14";

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/discover/assets/v2.png?27138311";

/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\me\\index.js'; /**
                                                                                       * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                       *
                                                                                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                       *
                                                                                       * This source code is licensed under the MIT license found in the
                                                                                       * LICENSE.txt file in the root directory of this source tree.
                                                                                       */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Me = __webpack_require__(800);

  var _Me2 = _interopRequireDefault(_Me);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = '我';

  exports.default = {

    path: '/react-starter-kit/me',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Me2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        )
      };
    }
    };

/***/ },

/***/ 800:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\me\\Me.js'; /**
                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                    *
                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                    *
                                                                                    * This source code is licensed under the MIT license found in the
                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                    */

  var _reactWeui = __webpack_require__(638);

  var _reactWeui2 = _interopRequireDefault(_reactWeui);

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(622);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Me = __webpack_require__(801);

  var _Me2 = _interopRequireDefault(_Me);

  var _icon_me_card = __webpack_require__(803);

  var _icon_me_card2 = _interopRequireDefault(_icon_me_card);

  var _icon_me_collect = __webpack_require__(804);

  var _icon_me_collect2 = _interopRequireDefault(_icon_me_collect);

  var _icon_me_money = __webpack_require__(805);

  var _icon_me_money2 = _interopRequireDefault(_icon_me_money);

  var _icon_me_photo = __webpack_require__(806);

  var _icon_me_photo2 = _interopRequireDefault(_icon_me_photo);

  var _icon_me_setting = __webpack_require__(807);

  var _icon_me_setting2 = _interopRequireDefault(_icon_me_setting);

  var _icon_me_smail = __webpack_require__(808);

  var _icon_me_smail2 = _interopRequireDefault(_icon_me_smail);

  var _geek5_link = __webpack_require__(809);

  var _geek5_link2 = _interopRequireDefault(_geek5_link);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var smallIcon = _react2.default.createElement('img', { className: _Me2.default.iconRight, alt: '', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  });

  var Panel = _reactWeui2.default.Panel,
      PanelBody = _reactWeui2.default.PanelBody,
      Cell = _reactWeui2.default.Cell,
      CellBody = _reactWeui2.default.CellBody,
      Cells = _reactWeui2.default.Cells,
      CellHeader = _reactWeui2.default.CellHeader,
      CellFooter = _reactWeui2.default.CellFooter,
      MediaBox = _reactWeui2.default.MediaBox;

  var Contact = function (_React$Component) {
    (0, _inherits3.default)(Contact, _React$Component);

    function Contact() {
      (0, _classCallCheck3.default)(this, Contact);
      return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
    }

    (0, _createClass3.default)(Contact, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Me2.default.iconLeft, alt: '', src: _geek5_link2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                          },
                          __self: this
                        },
                        'Geek5.cn'
                      ),
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                          },
                          __self: this
                        },
                        '\u5FAE\u4FE1\u53F7\uFF1AcalcYu'
                      )
                    ),
                    _react2.default.createElement(
                      CellFooter,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51
                        },
                        __self: this
                      },
                      smallIcon
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Me2.default.icon, alt: '', src: _icon_me_photo2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                          },
                          __self: this
                        },
                        '\u76F8\u518C'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      },
                      __self: this
                    })
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Me2.default.icon, alt: '', src: _icon_me_collect2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                          },
                          __self: this
                        },
                        '\u6536\u85CF'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      },
                      __self: this
                    })
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 84
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Me2.default.icon, alt: '', src: _icon_me_money2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 84
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 85
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                          },
                          __self: this
                        },
                        '\u94B1\u5305'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      },
                      __self: this
                    })
                  )
                )
              ),
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 95
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Me2.default.icon, alt: '', src: _icon_me_card2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
                          },
                          __self: this
                        },
                        '\u5361\u5305'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Me2.default.icon, alt: '', src: _icon_me_smail2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 114
                          },
                          __self: this
                        },
                        '\u8868\u60C5'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Panel,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            },
            _react2.default.createElement(
              PanelBody,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 123
                },
                __self: this
              },
              _react2.default.createElement(
                MediaBox,
                { type: 'small_appmsg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                  },
                  __self: this
                },
                _react2.default.createElement(
                  Cells,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 125
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    Cell,
                    { access: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 126
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      CellHeader,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 127
                        },
                        __self: this
                      },
                      _react2.default.createElement('img', { className: _Me2.default.icon, alt: '', src: _icon_me_setting2.default, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 127
                        },
                        __self: this
                      })
                    ),
                    _react2.default.createElement(
                      CellBody,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 128
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 129
                          },
                          __self: this
                        },
                        '\u8BBE\u7F6E'
                      )
                    ),
                    _react2.default.createElement(CellFooter, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Contact;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Me2.default)(Contact);

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(802);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Me.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Me.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Me-iconLeft-ts0t1 {\n  width: 70px;\n  margin-right: 5px;\n  display: block;\n  border-radius: 8px;\n}\n\n.Me-iconRight-T24-S {\n  width: 25px;\n  margin-right: 5px;\n  display: block;\n}\n\n.Me-icon-13umh {\n  width: 30px;\n  margin-right: 10px;\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/me/Me.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,mBAAmB;CACpB;;AAED;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;CAChB;;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;CAChB","file":"Me.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.iconLeft {\n  width: 70px;\n  margin-right: 5px;\n  display: block;\n  border-radius: 8px;\n}\n\n.iconRight {\n  width: 25px;\n  margin-right: 5px;\n  display: block;\n}\n\n.icon {\n  width: 30px;\n  margin-right: 10px;\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"iconLeft": "Me-iconLeft-ts0t1",
  	"iconRight": "Me-iconRight-T24-S",
  	"icon": "Me-icon-13umh"
  };

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/me/assets/icon_me_card.png?1b2e2804";

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/me/assets/icon_me_collect.png?45d7b32d";

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/me/assets/icon_me_money.png?6158ac63";

/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/me/assets/icon_me_photo.png?2c33138c";

/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/me/assets/icon_me_setting.png?2a0a7951";

/***/ },

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/me/assets/icon_me_smail.png?ff7f2284";

/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/me/assets/geek5_link.png?40575356";

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\notFound\\index.js'; /**
                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                             *
                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                             *
                                                                                             * This source code is licensed under the MIT license found in the
                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                             */

  var _react = __webpack_require__(385);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(759);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _NotFound = __webpack_require__(811);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Page Not Found';

  exports.default = {

    path: '*',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_NotFound2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        ),
        status: 404
      };
    }
    };

/***/ },

/***/ 811:
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

  var _jsxFileName = 'E:\\Github\\react-weui-starter-kit\\src\\routes\\notFound\\NotFound.js'; /**
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

  var _NotFound = __webpack_require__(812);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NotFound = function (_React$Component) {
    (0, _inherits3.default)(NotFound, _React$Component);

    function NotFound() {
      (0, _classCallCheck3.default)(this, NotFound);
      return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
    }

    (0, _createClass3.default)(NotFound, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _NotFound2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _NotFound2.default.container, __source: {
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
              'Sorry, the page you were trying to view does not exist.'
            )
          )
        );
      }
    }]);
    return NotFound;
  }(_react2.default.Component);

  NotFound.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(813);
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
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(626)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.NotFound-root-3G9OW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-LOS0u {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "NotFound-root-3G9OW",
  	"container": "NotFound-container-LOS0u"
  };

/***/ }

});
//# sourceMappingURL=client.js.map