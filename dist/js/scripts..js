// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Lbqw":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "916932b22e4085ab";
module.bundle.HMR_BUNDLE_ID = "087b9b58a4de2710";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"48AqN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stylesScss = require("../scss/styles.scss");
var _renderSearch = require("./renderSearch");
var _app = require("./app");
var _appDefault = parcelHelpers.interopDefault(_app);
_appDefault.default();

},{"../scss/styles.scss":"kZ8mz","./renderSearch":"fQKIB","./app":"7CErg","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kZ8mz":[function() {},{}],"fQKIB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("@swc/helpers");
var _listJs = require("list.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
var _cityListJson = require("./city.list.json");
var _cityListJsonDefault = parcelHelpers.interopDefault(_cityListJson);
// https://listjs.com/examples/existing-list-add/
// https://listjs.com/api/
var options = {
    valueNames: [
        {
            data: [
                'city-id'
            ]
        },
        'city'
    ],
    item: '<li class="list__item"><p class="city list__item-text"></p></li>'
};
var buildValues = function(state) {
    var cities = state.cities;
    return _cityListJsonDefault.default.reduce(function(prev, curr) {
        var isInclude = cities.includes(curr.id);
        if (!isInclude) {
            var city = {
                'city-id': curr.id,
                city: curr.name
            };
            return _helpers.toConsumableArray(prev).concat([
                city
            ]);
        }
        return prev;
    }, []);
};
var renderSearch = function(state, watchedState, elements, config) {
    var list = elements.formSearch.querySelector('.list');
    list.innerHTML = '';
    var values = buildValues(state);
    var searchList = new _listJsDefault.default('hacker-list', options, values);
};
exports.default = renderSearch;

},{"@swc/helpers":"erO4s","list.js":"dGI4f","./city.list.json":"j122l","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"erO4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
parcelHelpers.export(exports, "createSuper", ()=>_createSuperDefault.default
);
parcelHelpers.export(exports, "isNativeReflectConstruct", ()=>_isNativeReflectConstructDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);
var _createSuper = require("./_create_super");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);

},{"./_apply_decorated_descriptor":"c9NX1","./_array_with_holes":"f2RVY","./_array_without_holes":"9G5hu","./_assert_this_initialized":"hb0Uz","./_async_generator":"3e3Cq","./_async_generator_delegate":"aFowE","./_async_iterator":"kDn5G","./_async_to_generator":"69ywl","./_await_async_generator":"47kVK","./_await_value":"kOPdt","./_class_call_check":"5thSN","./_class_name_tdz_error":"kLeIP","./_class_private_field_get":"hiZIF","./_class_private_field_loose_base":"iIxKI","./_class_private_field_set":"3aItm","./_class_private_method_get":"gKMrA","./_class_private_method_set":"jDhxx","./_class_static_private_field_spec_get":"79XlC","./_class_static_private_field_spec_set":"hKsVp","./_construct":"bLTlt","./_create_class":"cMLkg","./_decorate":"5M3uX","./_defaults":"jPoWh","./_define_enumerable_properties":"8xWnI","./_define_property":"c7yiB","./_extends":"by2GU","./_get":"d3ZpD","./_get_prototype_of":"4Z2sn","./_inherits":"hoEyE","./_inherits_loose":"bpWmo","./_initializer_define_property":"5WZDp","./_initializer_warning_helper":"GCE4p","./_instanceof":"j6WhW","./_interop_require_default":"9sQ50","./_interop_require_wildcard":"ejKpM","./_is_native_function":"8d7fi","./_iterable_to_array":"lY6Yg","./_iterable_to_array_limit":"61jYg","./_iterable_to_array_limit_loose":"bvfpN","./_jsx":"9hq6e","./_new_arrow_check":"4VyBi","./_non_iterable_rest":"d6ywz","./_non_iterable_spread":"29F6O","./_object_spread":"jaxa1","./_object_without_properties":"eJaOZ","./_object_without_properties_loose":"6eqIr","./_possible_constructor_return":"cWetj","./_read_only_error":"3xmWo","./_set":"kehyh","./_set_prototype_of":"hkEkh","./_skip_first_generator_next":"lqj0R","./_sliced_to_array":"k8UMw","./_sliced_to_array_loose":"7tjhK","./_super_prop_base":"lGKRS","./_tagged_template_literal":"d3FCJ","./_tagged_template_literal_loose":"fbTUf","./_throw":"89Ibv","./_to_array":"lrbT1","./_to_consumable_array":"3TaI4","./_to_primitive":"aO5VI","./_to_property_key":"d5hF2","./_type_of":"hGmQp","./_wrap_async_generator":"kfhw9","./_wrap_native_super":"2wCpr","./_create_super":"inTdM","./_is_native_reflect_construct":"b8vXc","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"c9NX1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {
    };
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    if (context && desc1.initializer !== void 0) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f2RVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9G5hu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
exports.default = _arrayWithoutHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hb0Uz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3e3Cq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"kOPdt","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kOPdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aFowE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {
    }, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kDn5G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"69ywl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"47kVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"kOPdt","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5thSN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kLeIP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hiZIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver).value;
}
exports.default = _classPrivateFieldGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iIxKI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3aItm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classPrivateFieldSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gKMrA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jDhxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"79XlC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    return descriptor.value;
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hKsVp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bLTlt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cMLkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5M3uX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \"" + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \"" + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({
        }, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \"" + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"lrbT1","./_to_property_key":"d5hF2","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lrbT1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"f2RVY","./_iterable_to_array":"lY6Yg","./_non_iterable_rest":"d6ywz","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lY6Yg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d6ywz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d5hF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"hGmQp","./_to_primitive":"aO5VI","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hGmQp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aO5VI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"hGmQp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jPoWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8xWnI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"c7yiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"by2GU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d3ZpD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"lGKRS","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lGKRS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"4Z2sn","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4Z2sn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hoEyE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"hkEkh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hkEkh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bpWmo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5WZDp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"GCE4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"j6WhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9sQ50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ejKpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                };
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8d7fi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"61jYg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bvfpN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
    for(var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9hq6e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {
    };
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4VyBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"29F6O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jaxa1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"c7yiB","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eJaOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"6eqIr","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6eqIr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cWetj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"hb0Uz","./_type_of":"hGmQp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3xmWo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kehyh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"c7yiB","./_super_prop_base":"lGKRS","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lqj0R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"k8UMw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"f2RVY","./_iterable_to_array":"lY6Yg","./_non_iterable_rest":"d6ywz","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7tjhK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"f2RVY","./_iterable_to_array_limit_loose":"bvfpN","./_non_iterable_rest":"d6ywz","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d3FCJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fbTUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"89Ibv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3TaI4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"9G5hu","./_iterable_to_array":"lY6Yg","./_non_iterable_spread":"29F6O","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kfhw9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"3e3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2wCpr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"bLTlt","./_is_native_function":"8d7fi","./_get_prototype_of":"4Z2sn","./_set_prototype_of":"hkEkh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"inTdM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstructDefault.default();
    return function _createSuperInternal() {
        var Super = _getPrototypeOfDefault.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOfDefault.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturnDefault.default(this, result);
    };
}
exports.default = _createSuper;

},{"./_is_native_reflect_construct":"b8vXc","./_get_prototype_of":"4Z2sn","./_possible_constructor_return":"cWetj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"b8vXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dGI4f":[function(require,module,exports) {
var naturalSort = require('string-natural-compare'), getByClass = require('./utils/get-by-class'), extend = require('./utils/extend'), indexOf = require('./utils/index-of'), events = require('./utils/events'), toString = require('./utils/to-string'), classes = require('./utils/classes'), getAttribute = require('./utils/get-attribute'), toArray = require('./utils/to-array');
module.exports = function(id, options1, values1) {
    var self = this, init, Item = require('./item')(self), addAsync = require('./add-async')(self), initPagination = require('./pagination')(self);
    init = {
        start: function() {
            self.listClass = 'list';
            self.searchClass = 'search';
            self.sortClass = 'sort';
            self.page = 10000;
            self.i = 1;
            self.items = [];
            self.visibleItems = [];
            self.matchingItems = [];
            self.searched = false;
            self.filtered = false;
            self.searchColumns = undefined;
            self.searchDelay = 0;
            self.handlers = {
                updated: []
            };
            self.valueNames = [];
            self.utils = {
                getByClass: getByClass,
                extend: extend,
                indexOf: indexOf,
                events: events,
                toString: toString,
                naturalSort: naturalSort,
                classes: classes,
                getAttribute: getAttribute,
                toArray: toArray
            };
            self.utils.extend(self, options1);
            self.listContainer = typeof id === 'string' ? document.getElementById(id) : id;
            if (!self.listContainer) return;
            self.list = getByClass(self.listContainer, self.listClass, true);
            self.parse = require('./parse')(self);
            self.templater = require('./templater')(self);
            self.search = require('./search')(self);
            self.filter = require('./filter')(self);
            self.sort = require('./sort')(self);
            self.fuzzySearch = require('./fuzzy-search')(self, options1.fuzzySearch);
            this.handlers();
            this.items();
            this.pagination();
            self.update();
        },
        handlers: function() {
            for(var handler in self.handlers)if (self[handler] && self.handlers.hasOwnProperty(handler)) self.on(handler, self[handler]);
        },
        items: function() {
            self.parse(self.list);
            if (values1 !== undefined) self.add(values1);
        },
        pagination: function() {
            if (options1.pagination !== undefined) {
                if (options1.pagination === true) options1.pagination = [
                    {
                    }
                ];
                if (options1.pagination[0] === undefined) options1.pagination = [
                    options1.pagination
                ];
                for(var i = 0, il = options1.pagination.length; i < il; i++)initPagination(options1.pagination[i]);
            }
        }
    };
    /*
   * Re-parse the List, use if html have changed
   */ this.reIndex = function() {
        self.items = [];
        self.visibleItems = [];
        self.matchingItems = [];
        self.searched = false;
        self.filtered = false;
        self.parse(self.list);
    };
    this.toJSON = function() {
        var json = [];
        for(var i = 0, il = self.items.length; i < il; i++)json.push(self.items[i].values());
        return json;
    };
    /*
   * Add object to list
   */ this.add = function(values, callback) {
        if (values.length === 0) return;
        if (callback) {
            addAsync(values.slice(0), callback);
            return;
        }
        var added = [], notCreate = false;
        if (values[0] === undefined) values = [
            values
        ];
        for(var i = 0, il = values.length; i < il; i++){
            var item = null;
            notCreate = self.items.length > self.page ? true : false;
            item = new Item(values[i], undefined, notCreate);
            self.items.push(item);
            added.push(item);
        }
        self.update();
        return added;
    };
    this.show = function(i, page) {
        this.i = i;
        this.page = page;
        self.update();
        return self;
    };
    /* Removes object from list.
   * Loops through the list and removes objects where
   * property "valuename" === value
   */ this.remove = function(valueName, value, options) {
        var found = 0;
        for(var i = 0, il = self.items.length; i < il; i++)if (self.items[i].values()[valueName] == value) {
            self.templater.remove(self.items[i], options);
            self.items.splice(i, 1);
            il--;
            i--;
            found++;
        }
        self.update();
        return found;
    };
    /* Gets the objects in the list which
   * property "valueName" === value
   */ this.get = function(valueName, value) {
        var matchedItems = [];
        for(var i = 0, il = self.items.length; i < il; i++){
            var item = self.items[i];
            if (item.values()[valueName] == value) matchedItems.push(item);
        }
        return matchedItems;
    };
    /*
   * Get size of the list
   */ this.size = function() {
        return self.items.length;
    };
    /*
   * Removes all items from the list
   */ this.clear = function() {
        self.templater.clear();
        self.items = [];
        return self;
    };
    this.on = function(event, callback) {
        self.handlers[event].push(callback);
        return self;
    };
    this.off = function(event, callback) {
        var e = self.handlers[event];
        var index = indexOf(e, callback);
        if (index > -1) e.splice(index, 1);
        return self;
    };
    this.trigger = function(event) {
        var i = self.handlers[event].length;
        while(i--)self.handlers[event][i](self);
        return self;
    };
    this.reset = {
        filter: function() {
            var is = self.items, il = is.length;
            while(il--)is[il].filtered = false;
            return self;
        },
        search: function() {
            var is = self.items, il = is.length;
            while(il--)is[il].found = false;
            return self;
        }
    };
    this.update = function() {
        var is = self.items, il = is.length;
        self.visibleItems = [];
        self.matchingItems = [];
        self.templater.clear();
        for(var i = 0; i < il; i++){
            if (is[i].matching() && self.matchingItems.length + 1 >= self.i && self.visibleItems.length < self.page) {
                is[i].show();
                self.visibleItems.push(is[i]);
                self.matchingItems.push(is[i]);
            } else if (is[i].matching()) {
                self.matchingItems.push(is[i]);
                is[i].hide();
            } else is[i].hide();
        }
        self.trigger('updated');
        return self;
    };
    init.start();
};

},{"string-natural-compare":"4bGEO","./utils/get-by-class":"li1s0","./utils/extend":"1Z45h","./utils/index-of":"71KCc","./utils/events":"1m4ho","./utils/to-string":"4C8KJ","./utils/classes":"5KZ7x","./utils/get-attribute":"anc23","./utils/to-array":"hSH8M","./item":"lDwCu","./add-async":"4fptT","./pagination":"l5Hui","./parse":"7SuHg","./templater":"gIQW3","./search":"lPxZx","./filter":"gG9b5","./sort":"5EqUt","./fuzzy-search":"4wu3V"}],"4bGEO":[function(require,module,exports) {
'use strict';
var alphabet;
var alphabetIndexMap;
var alphabetIndexMapLength = 0;
function isNumberCode(code) {
    return code >= 48 && code <= 57;
}
function naturalCompare(a, b) {
    var lengthA = (a += '').length;
    var lengthB = (b += '').length;
    var aIndex = 0;
    var bIndex = 0;
    while(aIndex < lengthA && bIndex < lengthB){
        var charCodeA = a.charCodeAt(aIndex);
        var charCodeB = b.charCodeAt(bIndex);
        if (isNumberCode(charCodeA)) {
            if (!isNumberCode(charCodeB)) return charCodeA - charCodeB;
            var numStartA = aIndex;
            var numStartB = bIndex;
            while(charCodeA === 48 && ++numStartA < lengthA)charCodeA = a.charCodeAt(numStartA);
            while(charCodeB === 48 && ++numStartB < lengthB)charCodeB = b.charCodeAt(numStartB);
            var numEndA = numStartA;
            var numEndB = numStartB;
            while(numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA)))++numEndA;
            while(numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB)))++numEndB;
            var difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length
            if (difference) return difference;
            while(numStartA < numEndA){
                difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);
                if (difference) return difference;
            }
            aIndex = numEndA;
            bIndex = numEndB;
            continue;
        }
        if (charCodeA !== charCodeB) {
            if (charCodeA < alphabetIndexMapLength && charCodeB < alphabetIndexMapLength && alphabetIndexMap[charCodeA] !== -1 && alphabetIndexMap[charCodeB] !== -1) return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
            return charCodeA - charCodeB;
        }
        ++aIndex;
        ++bIndex;
    }
    if (aIndex >= lengthA && bIndex < lengthB && lengthA >= lengthB) return -1;
    if (bIndex >= lengthB && aIndex < lengthA && lengthB >= lengthA) return 1;
    return lengthA - lengthB;
}
naturalCompare.caseInsensitive = naturalCompare.i = function(a, b) {
    return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());
};
Object.defineProperties(naturalCompare, {
    alphabet: {
        get: function() {
            return alphabet;
        },
        set: function(value) {
            alphabet = value;
            alphabetIndexMap = [];
            var i = 0;
            if (alphabet) for(; i < alphabet.length; i++)alphabetIndexMap[alphabet.charCodeAt(i)] = i;
            alphabetIndexMapLength = alphabetIndexMap.length;
            for(i = 0; i < alphabetIndexMapLength; i++)if (alphabetIndexMap[i] === undefined) alphabetIndexMap[i] = -1;
        }
    }
});
module.exports = naturalCompare;

},{}],"li1s0":[function(require,module,exports) {
/**
 * A cross-browser implementation of getElementsByClass.
 * Heavily based on Dustin Diaz's function: http://dustindiaz.com/getelementsbyclass.
 *
 * Find all elements with class `className` inside `container`.
 * Use `single = true` to increase performance in older browsers
 * when only one element is needed.
 *
 * @param {String} className
 * @param {Element} container
 * @param {Boolean} single
 * @api public
 */ var getElementsByClassName = function(container, className, single) {
    if (single) return container.getElementsByClassName(className)[0];
    else return container.getElementsByClassName(className);
};
var querySelector = function(container, className, single) {
    className = '.' + className;
    if (single) return container.querySelector(className);
    else return container.querySelectorAll(className);
};
var polyfill = function(container, className, single) {
    var classElements = [], tag = '*';
    var els = container.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp('(^|\\s)' + className + '(\\s|$)');
    for(var i = 0, j = 0; i < elsLen; i++)if (pattern.test(els[i].className)) {
        if (single) return els[i];
        else {
            classElements[j] = els[i];
            j++;
        }
    }
    return classElements;
};
module.exports = (function() {
    return function(container, className, single, options) {
        options = options || {
        };
        if (options.test && options.getElementsByClassName || !options.test && document.getElementsByClassName) return getElementsByClassName(container, className, single);
        else if (options.test && options.querySelector || !options.test && document.querySelector) return querySelector(container, className, single);
        else return polyfill(container, className, single);
    };
})();

},{}],"1Z45h":[function(require,module,exports) {
/*
 * Source: https://github.com/segmentio/extend
 */ module.exports = function extend(object) {
    // Takes an unlimited number of extenders.
    var args = Array.prototype.slice.call(arguments, 1);
    // For each extender, copy their properties on our object.
    for(var i = 0, source; source = args[i]; i++){
        if (!source) continue;
        for(var property in source)object[property] = source[property];
    }
    return object;
};

},{}],"71KCc":[function(require,module,exports) {
var indexOf = [].indexOf;
module.exports = function(arr, obj) {
    if (indexOf) return arr.indexOf(obj);
    for(var i = 0, il = arr.length; i < il; ++i){
        if (arr[i] === obj) return i;
    }
    return -1;
};

},{}],"1m4ho":[function(require,module,exports) {
var bind = window.addEventListener ? 'addEventListener' : 'attachEvent', unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent', prefix = bind !== 'addEventListener' ? 'on' : '', toArray = require('./to-array');
/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */ exports.bind = function(el, type, fn, capture) {
    el = toArray(el);
    for(var i = 0, il = el.length; i < il; i++)el[i][bind](prefix + type, fn, capture || false);
};
/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */ exports.unbind = function(el, type, fn, capture) {
    el = toArray(el);
    for(var i = 0, il = el.length; i < il; i++)el[i][unbind](prefix + type, fn, capture || false);
};
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * `wait` milliseconds. If `immediate` is true, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {Function} fn
 * @param {Integer} wait
 * @param {Boolean} immediate
 * @api public
 */ exports.debounce = function(fn, wait, immediate) {
    var timeout;
    return wait ? function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) fn.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) fn.apply(context, args);
    } : fn;
};

},{"./to-array":"hSH8M"}],"hSH8M":[function(require,module,exports) {
/**
 * Source: https://github.com/timoxley/to-array
 *
 * Convert an array-like object into an `Array`.
 * If `collection` is already an `Array`, then will return a clone of `collection`.
 *
 * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
 * @return {Array} Naive conversion of `collection` to a new `Array`.
 * @api public
 */ module.exports = function toArray(collection) {
    if (typeof collection === 'undefined') return [];
    if (collection === null) return [
        null
    ];
    if (collection === window) return [
        window
    ];
    if (typeof collection === 'string') return [
        collection
    ];
    if (isArray(collection)) return collection;
    if (typeof collection.length != 'number') return [
        collection
    ];
    if (typeof collection === 'function' && collection instanceof Function) return [
        collection
    ];
    var arr = [];
    for(var i = 0, il = collection.length; i < il; i++)if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) arr.push(collection[i]);
    if (!arr.length) return [];
    return arr;
};
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

},{}],"4C8KJ":[function(require,module,exports) {
module.exports = function(s) {
    s = s === undefined ? '' : s;
    s = s === null ? '' : s;
    s = s.toString();
    return s;
};

},{}],"5KZ7x":[function(require,module,exports) {
/**
 * Module dependencies.
 */ var index = require('./index-of');
/**
 * Whitespace regexp.
 */ var re = /\s+/;
/**
 * toString reference.
 */ var toString = Object.prototype.toString;
/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */ module.exports = function(el) {
    return new ClassList(el);
};
/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */ function ClassList(el) {
    if (!el || !el.nodeType) throw new Error('A DOM element reference is required');
    this.el = el;
    this.list = el.classList;
}
/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */ ClassList.prototype.add = function(name) {
    // classList
    if (this.list) {
        this.list.add(name);
        return this;
    }
    // fallback
    var arr = this.array();
    var i = index(arr, name);
    if (!~i) arr.push(name);
    this.el.className = arr.join(' ');
    return this;
};
/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */ ClassList.prototype.remove = function(name) {
    // classList
    if (this.list) {
        this.list.remove(name);
        return this;
    }
    // fallback
    var arr = this.array();
    var i = index(arr, name);
    if (~i) arr.splice(i, 1);
    this.el.className = arr.join(' ');
    return this;
};
/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */ ClassList.prototype.toggle = function(name, force) {
    // classList
    if (this.list) {
        if ('undefined' !== typeof force) {
            if (force !== this.list.toggle(name, force)) this.list.toggle(name) // toggle again to correct
            ;
        } else this.list.toggle(name);
        return this;
    }
    // fallback
    if ('undefined' !== typeof force) {
        if (!force) this.remove(name);
        else this.add(name);
    } else if (this.has(name)) this.remove(name);
    else this.add(name);
    return this;
};
/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */ ClassList.prototype.array = function() {
    var className = this.el.getAttribute('class') || '';
    var str = className.replace(/^\s+|\s+$/g, '');
    var arr = str.split(re);
    if ('' === arr[0]) arr.shift();
    return arr;
};
/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */ ClassList.prototype.has = ClassList.prototype.contains = function(name) {
    return this.list ? this.list.contains(name) : !!~index(this.array(), name);
};

},{"./index-of":"71KCc"}],"anc23":[function(require,module,exports) {
/**
 * A cross-browser implementation of getAttribute.
 * Source found here: http://stackoverflow.com/a/3755343/361337 written by Vivin Paliath
 *
 * Return the value for `attr` at `element`.
 *
 * @param {Element} el
 * @param {String} attr
 * @api public
 */ module.exports = function(el, attr) {
    var result = el.getAttribute && el.getAttribute(attr) || null;
    if (!result) {
        var attrs = el.attributes;
        var length = attrs.length;
        for(var i = 0; i < length; i++){
            if (attrs[i] !== undefined) {
                if (attrs[i].nodeName === attr) result = attrs[i].nodeValue;
            }
        }
    }
    return result;
};

},{}],"lDwCu":[function(require,module,exports) {
module.exports = function(list) {
    return function(initValues1, element1, notCreate1) {
        var item = this;
        this._values = {
        };
        this.found = false // Show if list.searched == true and this.found == true
        ;
        this.filtered = false // Show if list.filtered == true and this.filtered == true
        ;
        var init = function(initValues, element, notCreate) {
            if (element === undefined) {
                if (notCreate) item.values(initValues, notCreate);
                else item.values(initValues);
            } else {
                item.elm = element;
                var values = list.templater.get(item, initValues);
                item.values(values);
            }
        };
        this.values = function(newValues, notCreate) {
            if (newValues !== undefined) {
                for(var name in newValues)item._values[name] = newValues[name];
                if (notCreate !== true) list.templater.set(item, item.values());
            } else return item._values;
        };
        this.show = function() {
            list.templater.show(item);
        };
        this.hide = function() {
            list.templater.hide(item);
        };
        this.matching = function() {
            return list.filtered && list.searched && item.found && item.filtered || list.filtered && !list.searched && item.filtered || !list.filtered && list.searched && item.found || !list.filtered && !list.searched;
        };
        this.visible = function() {
            return item.elm && item.elm.parentNode == list.list ? true : false;
        };
        init(initValues1, element1, notCreate1);
    };
};

},{}],"4fptT":[function(require,module,exports) {
module.exports = function(list) {
    var addAsync = function(values, callback, items) {
        var valuesToAdd = values.splice(0, 50);
        items = items || [];
        items = items.concat(list.add(valuesToAdd));
        if (values.length > 0) setTimeout(function() {
            addAsync(values, callback, items);
        }, 1);
        else {
            list.update();
            callback(items);
        }
    };
    return addAsync;
};

},{}],"l5Hui":[function(require,module,exports) {
var classes = require('./utils/classes'), events = require('./utils/events'), List = require('./index');
module.exports = function(list) {
    var isHidden = false;
    var refresh = function(pagingList, options) {
        if (list.page < 1) {
            list.listContainer.style.display = 'none';
            isHidden = true;
            return;
        } else if (isHidden) list.listContainer.style.display = 'block';
        var item, l = list.matchingItems.length, index = list.i, page = list.page, pages = Math.ceil(l / page), currentPage = Math.ceil(index / page), innerWindow = options.innerWindow || 2, left = options.left || options.outerWindow || 0, right = options.right || options.outerWindow || 0;
        right = pages - right;
        pagingList.clear();
        for(var i = 1; i <= pages; i++){
            var className = currentPage === i ? 'active' : '';
            //console.log(i, left, right, currentPage, (currentPage - innerWindow), (currentPage + innerWindow), className);
            if (is.number(i, left, right, currentPage, innerWindow)) {
                item = pagingList.add({
                    page: i,
                    dotted: false
                })[0];
                if (className) classes(item.elm).add(className);
                item.elm.firstChild.setAttribute('data-i', i);
                item.elm.firstChild.setAttribute('data-page', page);
            } else if (is.dotted(pagingList, i, left, right, currentPage, innerWindow, pagingList.size())) {
                item = pagingList.add({
                    page: '...',
                    dotted: true
                })[0];
                classes(item.elm).add('disabled');
            }
        }
    };
    var is = {
        number: function(i, left, right, currentPage, innerWindow) {
            return this.left(i, left) || this.right(i, right) || this.innerWindow(i, currentPage, innerWindow);
        },
        left: function(i, left) {
            return i <= left;
        },
        right: function(i, right) {
            return i > right;
        },
        innerWindow: function(i, currentPage, innerWindow) {
            return i >= currentPage - innerWindow && i <= currentPage + innerWindow;
        },
        dotted: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
            return this.dottedLeft(pagingList, i, left, right, currentPage, innerWindow) || this.dottedRight(pagingList, i, left, right, currentPage, innerWindow, currentPageItem);
        },
        dottedLeft: function(pagingList, i, left, right, currentPage, innerWindow) {
            return i == left + 1 && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right);
        },
        dottedRight: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
            if (pagingList.items[currentPageItem - 1].values().dotted) return false;
            else return i == right && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right);
        }
    };
    return function(options) {
        var pagingList = new List(list.listContainer.id, {
            listClass: options.paginationClass || 'pagination',
            item: options.item || "<li><a class='page' href='#'></a></li>",
            valueNames: [
                'page',
                'dotted'
            ],
            searchClass: 'pagination-search-that-is-not-supposed-to-exist',
            sortClass: 'pagination-sort-that-is-not-supposed-to-exist'
        });
        events.bind(pagingList.listContainer, 'click', function(e) {
            var target = e.target || e.srcElement, page = list.utils.getAttribute(target, 'data-page'), i = list.utils.getAttribute(target, 'data-i');
            if (i) list.show((i - 1) * page + 1, page);
        });
        list.on('updated', function() {
            refresh(pagingList, options);
        });
        refresh(pagingList, options);
    };
};

},{"./utils/classes":"5KZ7x","./utils/events":"1m4ho","./index":"dGI4f"}],"7SuHg":[function(require,module,exports) {
module.exports = function(list) {
    var Item = require('./item')(list);
    var getChildren = function(parent) {
        var nodes = parent.childNodes, items = [];
        for(var i = 0, il = nodes.length; i < il; i++)// Only textnodes have a data attribute
        if (nodes[i].data === undefined) items.push(nodes[i]);
        return items;
    };
    var parse = function(itemElements, valueNames) {
        for(var i = 0, il = itemElements.length; i < il; i++)list.items.push(new Item(valueNames, itemElements[i]));
    };
    var parseAsync = function(itemElements, valueNames) {
        var itemsToIndex = itemElements.splice(0, 50) // TODO: If < 100 items, what happens in IE etc?
        ;
        parse(itemsToIndex, valueNames);
        if (itemElements.length > 0) setTimeout(function() {
            parseAsync(itemElements, valueNames);
        }, 1);
        else {
            list.update();
            list.trigger('parseComplete');
        }
    };
    list.handlers.parseComplete = list.handlers.parseComplete || [];
    return function() {
        var itemsToIndex = getChildren(list.list), valueNames = list.valueNames;
        if (list.indexAsync) parseAsync(itemsToIndex, valueNames);
        else parse(itemsToIndex, valueNames);
    };
};

},{"./item":"lDwCu"}],"gIQW3":[function(require,module,exports) {
var Templater = function(list) {
    var createItem, templater = this;
    var init = function() {
        var itemSource;
        if (typeof list.item === 'function') {
            createItem = function(values) {
                var item = list.item(values);
                return getItemSource(item);
            };
            return;
        }
        if (typeof list.item === 'string') {
            if (list.item.indexOf('<') === -1) itemSource = document.getElementById(list.item);
            else itemSource = getItemSource(list.item);
        } else /* If item source does not exists, use the first item in list as
      source for new items */ itemSource = getFirstListItem();
        if (!itemSource) throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");
        itemSource = createCleanTemplateItem(itemSource, list.valueNames);
        createItem = function() {
            return itemSource.cloneNode(true);
        };
    };
    var createCleanTemplateItem = function(templateNode, valueNames) {
        var el = templateNode.cloneNode(true);
        el.removeAttribute('id');
        for(var i = 0, il = valueNames.length; i < il; i++){
            var elm = undefined, valueName = valueNames[i];
            if (valueName.data) for(var j = 0, jl = valueName.data.length; j < jl; j++)el.setAttribute('data-' + valueName.data[j], '');
            else if (valueName.attr && valueName.name) {
                elm = list.utils.getByClass(el, valueName.name, true);
                if (elm) elm.setAttribute(valueName.attr, '');
            } else {
                elm = list.utils.getByClass(el, valueName, true);
                if (elm) elm.innerHTML = '';
            }
        }
        return el;
    };
    var getFirstListItem = function() {
        var nodes = list.list.childNodes;
        for(var i = 0, il = nodes.length; i < il; i++){
            // Only textnodes have a data attribute
            if (nodes[i].data === undefined) return nodes[i].cloneNode(true);
        }
        return undefined;
    };
    var getItemSource = function(itemHTML) {
        if (typeof itemHTML !== 'string') return undefined;
        if (/<tr[\s>]/g.exec(itemHTML)) {
            var tbody = document.createElement('tbody');
            tbody.innerHTML = itemHTML;
            return tbody.firstElementChild;
        } else if (itemHTML.indexOf('<') !== -1) {
            var div = document.createElement('div');
            div.innerHTML = itemHTML;
            return div.firstElementChild;
        }
        return undefined;
    };
    var getValueName = function(name) {
        for(var i = 0, il = list.valueNames.length; i < il; i++){
            var valueName = list.valueNames[i];
            if (valueName.data) {
                var data = valueName.data;
                for(var j = 0, jl = data.length; j < jl; j++){
                    if (data[j] === name) return {
                        data: name
                    };
                }
            } else if (valueName.attr && valueName.name && valueName.name == name) return valueName;
            else if (valueName === name) return name;
        }
    };
    var setValue = function(item, name, value) {
        var elm = undefined, valueName = getValueName(name);
        if (!valueName) return;
        if (valueName.data) item.elm.setAttribute('data-' + valueName.data, value);
        else if (valueName.attr && valueName.name) {
            elm = list.utils.getByClass(item.elm, valueName.name, true);
            if (elm) elm.setAttribute(valueName.attr, value);
        } else {
            elm = list.utils.getByClass(item.elm, valueName, true);
            if (elm) elm.innerHTML = value;
        }
    };
    this.get = function(item, valueNames) {
        templater.create(item);
        var values = {
        };
        for(var i = 0, il = valueNames.length; i < il; i++){
            var elm = undefined, valueName = valueNames[i];
            if (valueName.data) for(var j = 0, jl = valueName.data.length; j < jl; j++)values[valueName.data[j]] = list.utils.getAttribute(item.elm, 'data-' + valueName.data[j]);
            else if (valueName.attr && valueName.name) {
                elm = list.utils.getByClass(item.elm, valueName.name, true);
                values[valueName.name] = elm ? list.utils.getAttribute(elm, valueName.attr) : '';
            } else {
                elm = list.utils.getByClass(item.elm, valueName, true);
                values[valueName] = elm ? elm.innerHTML : '';
            }
        }
        return values;
    };
    this.set = function(item, values) {
        if (!templater.create(item)) {
            for(var v in values)if (values.hasOwnProperty(v)) setValue(item, v, values[v]);
        }
    };
    this.create = function(item) {
        if (item.elm !== undefined) return false;
        item.elm = createItem(item.values());
        templater.set(item, item.values());
        return true;
    };
    this.remove = function(item) {
        if (item.elm.parentNode === list.list) list.list.removeChild(item.elm);
    };
    this.show = function(item) {
        templater.create(item);
        list.list.appendChild(item.elm);
    };
    this.hide = function(item) {
        if (item.elm !== undefined && item.elm.parentNode === list.list) list.list.removeChild(item.elm);
    };
    this.clear = function() {
        /* .innerHTML = ''; fucks up IE */ if (list.list.hasChildNodes()) while(list.list.childNodes.length >= 1)list.list.removeChild(list.list.firstChild);
    };
    init();
};
module.exports = function(list) {
    return new Templater(list);
};

},{}],"lPxZx":[function(require,module,exports) {
module.exports = function(list) {
    var item1, text1, columns, searchString, customSearch;
    var prepare = {
        resetList: function() {
            list.i = 1;
            list.templater.clear();
            customSearch = undefined;
        },
        setOptions: function(args) {
            if (args.length == 2 && args[1] instanceof Array) columns = args[1];
            else if (args.length == 2 && typeof args[1] == 'function') {
                columns = undefined;
                customSearch = args[1];
            } else if (args.length == 3) {
                columns = args[1];
                customSearch = args[2];
            } else columns = undefined;
        },
        setColumns: function() {
            if (list.items.length === 0) return;
            if (columns === undefined) columns = list.searchColumns === undefined ? prepare.toArray(list.items[0].values()) : list.searchColumns;
        },
        setSearchString: function(s) {
            s = list.utils.toString(s).toLowerCase();
            s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&') // Escape regular expression characters
            ;
            searchString = s;
        },
        toArray: function(values) {
            var tmpColumn = [];
            for(var name in values)tmpColumn.push(name);
            return tmpColumn;
        }
    };
    var search = {
        list: function() {
            // Extract quoted phrases "word1 word2" from original searchString
            // searchString is converted to lowercase by List.js
            var words = [], phrase, ss = searchString;
            while((phrase = ss.match(/"([^"]+)"/)) !== null){
                words.push(phrase[1]);
                ss = ss.substring(0, phrase.index) + ss.substring(phrase.index + phrase[0].length);
            }
            // Get remaining space-separated words (if any)
            ss = ss.trim();
            if (ss.length) words = words.concat(ss.split(/\s+/));
            for(var k = 0, kl = list.items.length; k < kl; k++){
                var item = list.items[k];
                item.found = false;
                if (!words.length) continue;
                for(var i = 0, il = words.length; i < il; i++){
                    var word_found = false;
                    for(var j = 0, jl = columns.length; j < jl; j++){
                        var values = item.values(), column = columns[j];
                        if (values.hasOwnProperty(column) && values[column] !== undefined && values[column] !== null) {
                            var text = typeof values[column] !== 'string' ? values[column].toString() : values[column];
                            if (text.toLowerCase().indexOf(words[i]) !== -1) {
                                // word found, so no need to check it against any other columns
                                word_found = true;
                                break;
                            }
                        }
                    }
                    // this word not found? no need to check any other words, the item cannot match
                    if (!word_found) break;
                }
                item.found = word_found;
            }
        },
        // Removed search.item() and search.values()
        reset: function() {
            list.reset.search();
            list.searched = false;
        }
    };
    var searchMethod = function(str) {
        list.trigger('searchStart');
        prepare.resetList();
        prepare.setSearchString(str);
        prepare.setOptions(arguments) // str, cols|searchFunction, searchFunction
        ;
        prepare.setColumns();
        if (searchString === '') search.reset();
        else {
            list.searched = true;
            if (customSearch) customSearch(searchString, columns);
            else search.list();
        }
        list.update();
        list.trigger('searchComplete');
        return list.visibleItems;
    };
    list.handlers.searchStart = list.handlers.searchStart || [];
    list.handlers.searchComplete = list.handlers.searchComplete || [];
    list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'keyup', list.utils.events.debounce(function(e) {
        var target = e.target || e.srcElement, alreadyCleared = target.value === '' && !list.searched;
        if (!alreadyCleared) // If oninput already have resetted the list, do nothing
        searchMethod(target.value);
    }, list.searchDelay));
    // Used to detect click on HTML5 clear button
    list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'input', function(e) {
        var target = e.target || e.srcElement;
        if (target.value === '') searchMethod('');
    });
    return searchMethod;
};

},{}],"gG9b5":[function(require,module,exports) {
module.exports = function(list) {
    // Add handlers
    list.handlers.filterStart = list.handlers.filterStart || [];
    list.handlers.filterComplete = list.handlers.filterComplete || [];
    return function(filterFunction) {
        list.trigger('filterStart');
        list.i = 1 // Reset paging
        ;
        list.reset.filter();
        if (filterFunction === undefined) list.filtered = false;
        else {
            list.filtered = true;
            var is = list.items;
            for(var i = 0, il = is.length; i < il; i++){
                var item = is[i];
                if (filterFunction(item)) item.filtered = true;
                else item.filtered = false;
            }
        }
        list.update();
        list.trigger('filterComplete');
        return list.visibleItems;
    };
};

},{}],"5EqUt":[function(require,module,exports) {
module.exports = function(list) {
    var buttons = {
        els: undefined,
        clear: function() {
            for(var i = 0, il = buttons.els.length; i < il; i++){
                list.utils.classes(buttons.els[i]).remove('asc');
                list.utils.classes(buttons.els[i]).remove('desc');
            }
        },
        getOrder: function(btn) {
            var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
            if (predefinedOrder == 'asc' || predefinedOrder == 'desc') return predefinedOrder;
            else if (list.utils.classes(btn).has('desc')) return 'asc';
            else if (list.utils.classes(btn).has('asc')) return 'desc';
            else return 'asc';
        },
        getInSensitive: function(btn, options) {
            var insensitive = list.utils.getAttribute(btn, 'data-insensitive');
            if (insensitive === 'false') options.insensitive = false;
            else options.insensitive = true;
        },
        setOrder: function(options) {
            for(var i = 0, il = buttons.els.length; i < il; i++){
                var btn = buttons.els[i];
                if (list.utils.getAttribute(btn, 'data-sort') !== options.valueName) continue;
                var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
                if (predefinedOrder == 'asc' || predefinedOrder == 'desc') {
                    if (predefinedOrder == options.order) list.utils.classes(btn).add(options.order);
                } else list.utils.classes(btn).add(options.order);
            }
        }
    };
    var sort1 = function() {
        list.trigger('sortStart');
        var options = {
        };
        var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;
        if (target) {
            options.valueName = list.utils.getAttribute(target, 'data-sort');
            buttons.getInSensitive(target, options);
            options.order = buttons.getOrder(target);
        } else {
            options = arguments[1] || options;
            options.valueName = arguments[0];
            options.order = options.order || 'asc';
            options.insensitive = typeof options.insensitive == 'undefined' ? true : options.insensitive;
        }
        buttons.clear();
        buttons.setOrder(options);
        // caseInsensitive
        // alphabet
        var customSortFunction = options.sortFunction || list.sortFunction || null, multi = options.order === 'desc' ? -1 : 1, sortFunction;
        if (customSortFunction) sortFunction = function(itemA, itemB) {
            return customSortFunction(itemA, itemB, options) * multi;
        };
        else sortFunction = function(itemA, itemB) {
            var sort = list.utils.naturalSort;
            sort.alphabet = list.alphabet || options.alphabet || undefined;
            if (!sort.alphabet && options.insensitive) sort = list.utils.naturalSort.caseInsensitive;
            return sort(itemA.values()[options.valueName], itemB.values()[options.valueName]) * multi;
        };
        list.items.sort(sortFunction);
        list.update();
        list.trigger('sortComplete');
    };
    // Add handlers
    list.handlers.sortStart = list.handlers.sortStart || [];
    list.handlers.sortComplete = list.handlers.sortComplete || [];
    buttons.els = list.utils.getByClass(list.listContainer, list.sortClass);
    list.utils.events.bind(buttons.els, 'click', sort1);
    list.on('searchStart', buttons.clear);
    list.on('filterStart', buttons.clear);
    return sort1;
};

},{}],"4wu3V":[function(require,module,exports) {
var classes = require('./utils/classes'), events = require('./utils/events'), extend = require('./utils/extend'), toString = require('./utils/to-string'), getByClass = require('./utils/get-by-class'), fuzzy = require('./utils/fuzzy');
module.exports = function(list, options) {
    options = options || {
    };
    options = extend({
        location: 0,
        distance: 100,
        threshold: 0.4,
        multiSearch: true,
        searchClass: 'fuzzy-search'
    }, options);
    var fuzzySearch = {
        search: function(searchString, columns) {
            // Substract arguments from the searchString or put searchString as only argument
            var searchArguments = options.multiSearch ? searchString.replace(/ +$/, '').split(/ +/) : [
                searchString
            ];
            for(var k = 0, kl = list.items.length; k < kl; k++)fuzzySearch.item(list.items[k], columns, searchArguments);
        },
        item: function(item, columns, searchArguments) {
            var found = true;
            for(var i = 0; i < searchArguments.length; i++){
                var foundArgument = false;
                for(var j = 0, jl = columns.length; j < jl; j++)if (fuzzySearch.values(item.values(), columns[j], searchArguments[i])) foundArgument = true;
                if (!foundArgument) found = false;
            }
            item.found = found;
        },
        values: function(values, value, searchArgument) {
            if (values.hasOwnProperty(value)) {
                var text = toString(values[value]).toLowerCase();
                if (fuzzy(text, searchArgument, options)) return true;
            }
            return false;
        }
    };
    events.bind(getByClass(list.listContainer, options.searchClass), 'keyup', list.utils.events.debounce(function(e) {
        var target = e.target || e.srcElement // IE have srcElement
        ;
        list.search(target.value, fuzzySearch.search);
    }, list.searchDelay));
    return function(str, columns) {
        list.search(str, columns, fuzzySearch.search);
    };
};

},{"./utils/classes":"5KZ7x","./utils/events":"1m4ho","./utils/extend":"1Z45h","./utils/to-string":"4C8KJ","./utils/get-by-class":"li1s0","./utils/fuzzy":"12cHX"}],"12cHX":[function(require,module,exports) {
module.exports = function(text, pattern, options) {
    // Aproximately where in the text is the pattern expected to be found?
    var Match_Location = options.location || 0;
    //Determines how close the match must be to the fuzzy location (specified above). An exact letter match which is 'distance' characters away from the fuzzy location would score as a complete mismatch. A distance of '0' requires the match be at the exact location specified, a threshold of '1000' would require a perfect match to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    var Match_Distance = options.distance || 100;
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match (of both letters and location), a threshold of '1.0' would match anything.
    var Match_Threshold = options.threshold || 0.4;
    if (pattern === text) return true // Exact match
    ;
    if (pattern.length > 32) return false // This algorithm cannot be used
    ;
    // Set starting location at beginning text and initialise the alphabet.
    var loc = Match_Location, s = function() {
        var q = {
        }, i;
        for(i = 0; i < pattern.length; i++)q[pattern.charAt(i)] = 0;
        for(i = 0; i < pattern.length; i++)q[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
        return q;
    }();
    // Compute and return the score for a match with e errors and x location.
    // Accesses loc and pattern through being a closure.
    function match_bitapScore_(e, x) {
        var accuracy = e / pattern.length, proximity = Math.abs(loc - x);
        if (!Match_Distance) // Dodge divide by zero error.
        return proximity ? 1 : accuracy;
        return accuracy + proximity / Match_Distance;
    }
    var score_threshold = Match_Threshold, best_loc = text.indexOf(pattern, loc) // Is there a nearby exact match? (speedup)
    ;
    if (best_loc != -1) {
        score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
        // What about in the other direction? (speedup)
        best_loc = text.lastIndexOf(pattern, loc + pattern.length);
        if (best_loc != -1) score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
    }
    // Initialise the bit arrays.
    var matchmask = 1 << pattern.length - 1;
    best_loc = -1;
    var bin_min, bin_mid;
    var bin_max = pattern.length + text.length;
    var last_rd;
    for(var d = 0; d < pattern.length; d++){
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from 'loc' we can stray at this
        // error level.
        bin_min = 0;
        bin_mid = bin_max;
        while(bin_min < bin_mid){
            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) bin_min = bin_mid;
            else bin_max = bin_mid;
            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
        }
        // Use the result from this iteration as the maximum for the next.
        bin_max = bin_mid;
        var start = Math.max(1, loc - bin_mid + 1);
        var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
        var rd = Array(finish + 2);
        rd[finish + 1] = (1 << d) - 1;
        for(var j = finish; j >= start; j--){
            // The alphabet (s) is a sparse hash, so the following line generates
            // warnings.
            var charMatch = s[text.charAt(j - 1)];
            if (d === 0) // First pass: exact match.
            rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
            else // Subsequent passes: fuzzy match.
            rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((last_rd[j + 1] | last_rd[j]) << 1 | 1) | last_rd[j + 1];
            if (rd[j] & matchmask) {
                var score = match_bitapScore_(d, j - 1);
                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (score <= score_threshold) {
                    // Told you so.
                    score_threshold = score;
                    best_loc = j - 1;
                    if (best_loc > loc) // When passing loc, don't exceed our current distance from loc.
                    start = Math.max(1, 2 * loc - best_loc);
                    else break;
                }
            }
        }
        // No hope for a (better) match at greater error levels.
        if (match_bitapScore_(d + 1, loc) > score_threshold) break;
        last_rd = rd;
    }
    return best_loc < 0 ? false : true;
};

},{}],"j122l":[function(require,module,exports) {
module.exports = JSON.parse("[{\"id\":524894,\"name\":\"Moscow\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":37.606667,\"lat\":55.761665}},{\"id\":504341,\"name\":\"Pskov\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":28.3496,\"lat\":57.813599}},{\"id\":1496747,\"name\":\"Novosibirsk\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":82.934441,\"lat\":55.041111}},{\"id\":520555,\"name\":\"Nizhniy Novgorod\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":44.002048,\"lat\":56.328674}},{\"id\":501175,\"name\":\"Rostov-na-Donu\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":39.71389,\"lat\":47.236389}},{\"id\":498817,\"name\":\"Saint Petersburg\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":30.264168,\"lat\":59.894444}},{\"id\":491687,\"name\":\"Smolensk\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":32.040001,\"lat\":54.781666}},{\"id\":472045,\"name\":\"Voronezh\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":39.169998,\"lat\":51.666389}},{\"id\":578072,\"name\":\"Belgorod\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":36.580002,\"lat\":50.610001}},{\"id\":2026070,\"name\":\"Bryansk\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":106.84333,\"lat\":52.02306}},{\"id\":498677,\"name\":\"Saratov\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":46.033333,\"lat\":51.566666}},{\"id\":498698,\"name\":\"Saransk\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":45.1749,\"lat\":54.1838}},{\"id\":500004,\"name\":\"Rybinsk\",\"state\":\"\",\"country\":\"RU\",\"coord\":{\"lon\":38.84259,\"lat\":58.044601}}]");

},{}],"7CErg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("@swc/helpers");
var _regeneratorRuntime = require("regenerator-runtime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
var _onChange = require("on-change");
var _onChangeDefault = parcelHelpers.interopDefault(_onChange);
var _cityListJson = require("./city.list.json");
var _cityListJsonDefault = parcelHelpers.interopDefault(_cityListJson);
var _renderSearch = require("./renderSearch");
var _renderSearchDefault = parcelHelpers.interopDefault(_renderSearch);
var _renderTable = require("./renderTable");
var _renderTableDefault = parcelHelpers.interopDefault(_renderTable);
var _api = require("./api");
var _apiDefault = parcelHelpers.interopDefault(_api);
var buildUrl = function(config, lat, lon) {
    var baseUtl = config.api.url;
    var appId = config.api.appid;
    var exclude = config.api.exclude;
    var units = config.api.units;
    return "".concat(baseUtl).concat(appId).concat(exclude).concat(units).concat(lat).concat(lon);
};
var updateDataOfCities = _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee(state, config) {
    var stateData, cities, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, city, findCity, lon, lat, url, dataOfCity, currentTemp, currentIco, current, daily;
    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                stateData = state;
                cities = stateData.cities.sort();
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _ctx.prev = 3;
                _iterator = cities[Symbol.iterator]();
            case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _ctx.next = 22;
                    break;
                }
                city = _step.value;
                findCity = _cityListJsonDefault.default.find(function(item) {
                    return item.id === city;
                });
                lon = "&lon=".concat(findCity.coord.lon);
                lat = "&lat=".concat(findCity.coord.lat);
                url = buildUrl(config, lat, lon);
                _ctx.next = 13;
                return _apiDefault.default(url);
            case 13:
                dataOfCity = _ctx.sent;
                currentTemp = dataOfCity.current.temp;
                currentIco = dataOfCity.current.weather[0].icon;
                current = {
                    temp: currentTemp,
                    ico: currentIco
                };
                daily = dataOfCity.daily.map(function(day) {
                    var temp = day.temp.day;
                    var ico = day.weather[0].icon;
                    return {
                        temp: temp,
                        ico: ico
                    };
                });
                stateData.weather = _helpers.toConsumableArray(stateData.weather).concat([
                    {
                        id: findCity.id,
                        name: findCity.name,
                        data: [
                            _helpers.objectSpread({
                            }, current)
                        ].concat(_helpers.toConsumableArray(daily))
                    }, 
                ]);
            case 19:
                _iteratorNormalCompletion = true;
                _ctx.next = 5;
                break;
            case 22:
                _ctx.next = 28;
                break;
            case 24:
                _ctx.prev = 24;
                _ctx.t0 = _ctx["catch"](3);
                _didIteratorError = true;
                _iteratorError = _ctx.t0;
            case 28:
                _ctx.prev = 28;
                _ctx.prev = 29;
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            case 31:
                _ctx.prev = 31;
                if (!_didIteratorError) {
                    _ctx.next = 34;
                    break;
                }
                throw _iteratorError;
            case 34:
                return _ctx.finish(31);
            case 35:
                return _ctx.finish(28);
            case 36:
                // SORT CITIES BY NAME
                stateData.weather.sort(function(a, b) {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                });
            case 37:
            case "end":
                return _ctx.stop();
        }
    }, _callee, null, [
        [
            3,
            24,
            28,
            36
        ],
        [
            29,
            ,
            31,
            35
        ]
    ]);
}));
var render = function(state, watchedState, elements, config) {
    _renderTableDefault.default(state, watchedState, elements, config);
    _renderSearchDefault.default(state, watchedState, elements, config);
};
var searchListHandler = function(e, watchedState) {
    var el = e.target;
    var watcherState = watchedState;
    var isCity = el.classList.contains('city');
    if (isCity) {
        var parent = el.closest('li[data-city-id]');
        var id = parent.dataset.cityId;
        watcherState.cities = _helpers.toConsumableArray(watcherState.cities).concat([
            Number(id)
        ]);
    }
};
exports.default = function() {
    var elements = {
        formSearch: document['form-search'],
        table: {
            header: document.querySelector('#table-header'),
            body: document.querySelector('#table-body')
        }
    };
    var config = {
        interval: 300000,
        days: 9,
        api: {
            url: 'https://api.openweathermap.org/data/2.5/onecall?',
            appid: "appid=1d9c92a01b606c04fde15fca68fba569",
            exclude: '&exclude=minutely,hourly',
            units: '&units=metric'
        }
    };
    var state = {
        cities: [
            524894,
            498817
        ],
        lastUpdate: null,
        ui: {
            tableHeader: 0
        },
        weather: []
    };
    var watchedState = _onChangeDefault.default(state, function(path, value, prev) {
        if (path === 'lastUpdate' || path === 'cities') updateDataOfCities(state, config).then(function() {
            render(state, watchedState, elements, config);
            state.ui.tableHeader = 1;
            state.weather = [];
        });
    });
    // FORM SEARCH
    var formSearch = elements.formSearch;
    formSearch.addEventListener('submit', function(e) {
        return e.preventDefault();
    });
    formSearch.addEventListener('click', function(e) {
        return searchListHandler(e, watchedState);
    });
    watchedState.lastUpdate = Date.now();
    setInterval(function() {
        watchedState.lastUpdate = Date.now();
    }, config.interval);
};

},{"@swc/helpers":"erO4s","regenerator-runtime":"12Ae8","on-change":"2ohP8","./city.list.json":"j122l","./renderSearch":"fQKIB","./renderTable":"6C2hL","./api":"5PuOd","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"12Ae8":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err1) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"2ohP8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable unicorn/prefer-spread */ var _constantsJs = require("./lib/constants.js");
var _isBuiltinJs = require("./lib/is-builtin.js");
var _pathJs = require("./lib/path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _isSymbolJs = require("./lib/is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
var _isIteratorJs = require("./lib/is-iterator.js");
var _isIteratorJsDefault = parcelHelpers.interopDefault(_isIteratorJs);
var _wrapIteratorJs = require("./lib/wrap-iterator.js");
var _wrapIteratorJsDefault = parcelHelpers.interopDefault(_wrapIteratorJs);
var _ignorePropertyJs = require("./lib/ignore-property.js");
var _ignorePropertyJsDefault = parcelHelpers.interopDefault(_ignorePropertyJs);
var _cacheJs = require("./lib/cache.js");
var _cacheJsDefault = parcelHelpers.interopDefault(_cacheJs);
var _smartCloneJs = require("./lib/smart-clone/smart-clone.js");
var _smartCloneJsDefault = parcelHelpers.interopDefault(_smartCloneJs);
const defaultOptions = {
    equals: Object.is,
    isShallow: false,
    pathAsArray: false,
    ignoreSymbols: false,
    ignoreUnderscores: false,
    ignoreDetached: false,
    details: false
};
const onChange1 = (object, onChange, options = {
})=>{
    options = {
        ...defaultOptions,
        ...options
    };
    const proxyTarget = Symbol('ProxyTarget');
    const { equals , isShallow , ignoreDetached , details  } = options;
    const cache = new _cacheJsDefault.default(equals);
    const hasOnValidate = typeof options.onValidate === 'function';
    const smartClone = new _smartCloneJsDefault.default(hasOnValidate);
    // eslint-disable-next-line max-params
    const validate = (target, property, value, previous, applyData)=>!hasOnValidate || smartClone.isCloning || options.onValidate(_pathJsDefault.default.concat(cache.getPath(target), property), value, previous, applyData) === true
    ;
    const handleChangeOnTarget = (target, property, value, previous)=>{
        if (!_ignorePropertyJsDefault.default(cache, options, property) && !(ignoreDetached && cache.isDetached(target, object))) handleChange(cache.getPath(target), property, value, previous);
    };
    // eslint-disable-next-line max-params
    const handleChange = (changePath, property, value, previous, applyData)=>{
        if (smartClone.isCloning) smartClone.update(changePath, property, previous);
        else onChange(_pathJsDefault.default.concat(changePath, property), value, previous, applyData);
    };
    const getProxyTarget = (value)=>value ? value[proxyTarget] || value : value
    ;
    const prepareValue = (value, target, property, basePath)=>{
        if (_isBuiltinJs.isBuiltinWithoutMutableMethods(value) || property === 'constructor' || isShallow && !_smartCloneJsDefault.default.isHandledMethod(target, property) || _ignorePropertyJsDefault.default(cache, options, property) || cache.isGetInvariant(target, property) || ignoreDetached && cache.isDetached(target, object)) return value;
        if (basePath === undefined) basePath = cache.getPath(target);
        return cache.getProxy(value, _pathJsDefault.default.concat(basePath, property), handler, proxyTarget);
    };
    const handler = {
        get (target, property, receiver) {
            if (_isSymbolJsDefault.default(property)) {
                if (property === proxyTarget || property === _constantsJs.TARGET) return target;
                if (property === _constantsJs.UNSUBSCRIBE && !cache.isUnsubscribed && cache.getPath(target).length === 0) {
                    cache.unsubscribe();
                    return target;
                }
            }
            const value = _isBuiltinJs.isBuiltinWithMutableMethods(target) ? Reflect.get(target, property) : Reflect.get(target, property, receiver);
            return prepareValue(value, target, property);
        },
        set (target, property, value, receiver) {
            value = getProxyTarget(value);
            const reflectTarget = target[proxyTarget] || target;
            const previous = reflectTarget[property];
            if (equals(previous, value) && property in target) return true;
            const isValid = validate(target, property, value, previous);
            if (isValid && cache.setProperty(reflectTarget, property, value, receiver, previous)) {
                handleChangeOnTarget(target, property, target[property], previous);
                return true;
            }
            return !isValid;
        },
        defineProperty (target, property, descriptor) {
            if (!cache.isSameDescriptor(descriptor, target, property)) {
                const previous = target[property];
                if (validate(target, property, descriptor.value, previous) && cache.defineProperty(target, property, descriptor, previous)) handleChangeOnTarget(target, property, descriptor.value, previous);
            }
            return true;
        },
        deleteProperty (target, property) {
            if (!Reflect.has(target, property)) return true;
            const previous = Reflect.get(target, property);
            const isValid = validate(target, property, undefined, previous);
            if (isValid && cache.deleteProperty(target, property, previous)) {
                handleChangeOnTarget(target, property, undefined, previous);
                return true;
            }
            return !isValid;
        },
        apply (target, thisArg, argumentsList) {
            const thisProxyTarget = thisArg[proxyTarget] || thisArg;
            if (cache.isUnsubscribed) return Reflect.apply(target, thisProxyTarget, argumentsList);
            if ((details === false || details !== true && !details.includes(target.name)) && _smartCloneJsDefault.default.isHandledType(thisProxyTarget)) {
                let applyPath = _pathJsDefault.default.initial(cache.getPath(target));
                const isHandledMethod = _smartCloneJsDefault.default.isHandledMethod(thisProxyTarget, target.name);
                smartClone.start(thisProxyTarget, applyPath, argumentsList);
                let result = Reflect.apply(target, smartClone.preferredThisArg(target, thisArg, thisProxyTarget), isHandledMethod ? argumentsList.map((argument)=>getProxyTarget(argument)
                ) : argumentsList);
                const isChanged = smartClone.isChanged(thisProxyTarget, equals);
                const previous = smartClone.stop();
                if (_smartCloneJsDefault.default.isHandledType(result) && isHandledMethod) {
                    if (thisArg instanceof Map && target.name === 'get') applyPath = _pathJsDefault.default.concat(applyPath, argumentsList[0]);
                    result = cache.getProxy(result, applyPath, handler);
                }
                if (isChanged) {
                    const applyData = {
                        name: target.name,
                        args: argumentsList,
                        result
                    };
                    const changePath = smartClone.isCloning ? _pathJsDefault.default.initial(applyPath) : applyPath;
                    const property = smartClone.isCloning ? _pathJsDefault.default.last(applyPath) : '';
                    if (validate(_pathJsDefault.default.get(object, changePath), property, thisProxyTarget, previous, applyData)) handleChange(changePath, property, thisProxyTarget, previous, applyData);
                    else smartClone.undo(thisProxyTarget);
                }
                if ((thisArg instanceof Map || thisArg instanceof Set) && _isIteratorJsDefault.default(result)) return _wrapIteratorJsDefault.default(result, target, thisArg, applyPath, prepareValue);
                return result;
            }
            return Reflect.apply(target, thisArg, argumentsList);
        }
    };
    const proxy = cache.getProxy(object, options.pathAsArray ? [] : '', handler);
    onChange = onChange.bind(proxy);
    if (hasOnValidate) options.onValidate = options.onValidate.bind(proxy); // eslint-disable-line unicorn/prefer-prototype-methods
    return proxy;
};
onChange1.target = (proxy)=>proxy && proxy[_constantsJs.TARGET] || proxy
;
onChange1.unsubscribe = (proxy)=>proxy[_constantsJs.UNSUBSCRIBE] || proxy
;
exports.default = onChange1;

},{"./lib/constants.js":"4ia06","./lib/is-builtin.js":"2om27","./lib/path.js":"fCMbg","./lib/is-symbol.js":"hTGx9","./lib/is-iterator.js":"khKs0","./lib/wrap-iterator.js":"RUfy3","./lib/ignore-property.js":"iEWmP","./lib/cache.js":"5z3IG","./lib/smart-clone/smart-clone.js":"bRRha","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4ia06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PATH_SEPARATOR", ()=>PATH_SEPARATOR
);
parcelHelpers.export(exports, "TARGET", ()=>TARGET
);
parcelHelpers.export(exports, "UNSUBSCRIBE", ()=>UNSUBSCRIBE
);
const PATH_SEPARATOR = '.';
const TARGET = Symbol('target');
const UNSUBSCRIBE = Symbol('unsubscribe');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2om27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBuiltinWithMutableMethods", ()=>isBuiltinWithMutableMethods
);
parcelHelpers.export(exports, "isBuiltinWithoutMutableMethods", ()=>isBuiltinWithoutMutableMethods
);
function isBuiltinWithMutableMethods(value) {
    return value instanceof Date || value instanceof Set || value instanceof Map || value instanceof WeakSet || value instanceof WeakMap || ArrayBuffer.isView(value);
}
function isBuiltinWithoutMutableMethods(value) {
    return (typeof value === 'object' ? value === null : typeof value !== 'function') || value instanceof RegExp;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fCMbg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
var _isArrayJs = require("./is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isSymbolJs = require("./is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
const path1 = {
    after: (path, subPath)=>{
        if (_isArrayJsDefault.default(path)) return path.slice(subPath.length);
        if (subPath === '') return path;
        return path.slice(subPath.length + 1);
    },
    concat: (path, key)=>{
        if (_isArrayJsDefault.default(path)) {
            path = [
                ...path
            ];
            if (key) path.push(key);
            return path;
        }
        if (key && key.toString !== undefined) {
            if (path !== '') path += _constantsJs.PATH_SEPARATOR;
            if (_isSymbolJsDefault.default(key)) return path + key.toString();
            return path + key;
        }
        return path;
    },
    initial: (path)=>{
        if (_isArrayJsDefault.default(path)) return path.slice(0, -1);
        if (path === '') return path;
        const index = path.lastIndexOf(_constantsJs.PATH_SEPARATOR);
        if (index === -1) return '';
        return path.slice(0, index);
    },
    last: (path)=>{
        if (_isArrayJsDefault.default(path)) return path[path.length - 1] || '';
        if (path === '') return path;
        const index = path.lastIndexOf(_constantsJs.PATH_SEPARATOR);
        if (index === -1) return path;
        return path.slice(index + 1);
    },
    walk: (path, callback)=>{
        if (_isArrayJsDefault.default(path)) for (const key of path)callback(key);
        else if (path !== '') {
            let position = 0;
            let index = path.indexOf(_constantsJs.PATH_SEPARATOR);
            if (index === -1) callback(path);
            else while(position < path.length){
                if (index === -1) index = path.length;
                callback(path.slice(position, index));
                position = index + 1;
                index = path.indexOf(_constantsJs.PATH_SEPARATOR, position);
            }
        }
    },
    get (object, path) {
        this.walk(path, (key)=>{
            if (object) object = object[key];
        });
        return object;
    }
};
exports.default = path1;

},{"./constants.js":"4ia06","./is-array.js":"cJQv9","./is-symbol.js":"hTGx9","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cJQv9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Array.isArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hTGx9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.default = isSymbol;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"khKs0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isIterator(value) {
    return typeof value === 'object' && typeof value.next === 'function';
}
exports.default = isIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"RUfy3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
function wrapIterator(iterator, target, thisArg, applyPath, prepareValue) {
    const originalNext = iterator.next;
    if (target.name === 'entries') iterator.next = function() {
        const result = originalNext.call(this);
        if (result.done === false) {
            result.value[0] = prepareValue(result.value[0], target, result.value[0], applyPath);
            result.value[1] = prepareValue(result.value[1], target, result.value[0], applyPath);
        }
        return result;
    };
    else if (target.name === 'values') {
        const keyIterator = thisArg[_constantsJs.TARGET].keys();
        iterator.next = function() {
            const result = originalNext.call(this);
            if (result.done === false) result.value = prepareValue(result.value, target, keyIterator.next().value, applyPath);
            return result;
        };
    } else iterator.next = function() {
        const result = originalNext.call(this);
        if (result.done === false) result.value = prepareValue(result.value, target, result.value, applyPath);
        return result;
    };
    return iterator;
}
exports.default = wrapIterator;

},{"./constants.js":"4ia06","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iEWmP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSymbolJs = require("./is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
function ignoreProperty(cache, options, property) {
    return cache.isUnsubscribed || options.ignoreSymbols && _isSymbolJsDefault.default(property) || options.ignoreUnderscores && property.charAt(0) === '_' || 'ignoreKeys' in options && options.ignoreKeys.includes(property);
}
exports.default = ignoreProperty;

},{"./is-symbol.js":"hTGx9","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5z3IG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
class Cache {
    constructor(equals){
        this._equals = equals;
        this._proxyCache = new WeakMap();
        this._pathCache = new WeakMap();
        this.isUnsubscribed = false;
    }
    _getDescriptorCache() {
        if (this._descriptorCache === undefined) this._descriptorCache = new WeakMap();
        return this._descriptorCache;
    }
    _getProperties(target) {
        const descriptorCache = this._getDescriptorCache();
        let properties = descriptorCache.get(target);
        if (properties === undefined) {
            properties = {
            };
            descriptorCache.set(target, properties);
        }
        return properties;
    }
    _getOwnPropertyDescriptor(target1, property) {
        if (this.isUnsubscribed) return Reflect.getOwnPropertyDescriptor(target1, property);
        const properties = this._getProperties(target1);
        let descriptor = properties[property];
        if (descriptor === undefined) {
            descriptor = Reflect.getOwnPropertyDescriptor(target1, property);
            properties[property] = descriptor;
        }
        return descriptor;
    }
    getProxy(target2, path, handler, proxyTarget) {
        if (this.isUnsubscribed) return target2;
        const reflectTarget = target2[proxyTarget];
        const source = reflectTarget || target2;
        this._pathCache.set(source, path);
        let proxy = this._proxyCache.get(source);
        if (proxy === undefined) {
            proxy = reflectTarget === undefined ? new Proxy(target2, handler) : target2;
            this._proxyCache.set(source, proxy);
        }
        return proxy;
    }
    getPath(target3) {
        return this.isUnsubscribed ? undefined : this._pathCache.get(target3);
    }
    isDetached(target4, object) {
        return !Object.is(target4, _pathJsDefault.default.get(object, this.getPath(target4)));
    }
    defineProperty(target5, property1, descriptor) {
        if (!Reflect.defineProperty(target5, property1, descriptor)) return false;
        if (!this.isUnsubscribed) this._getProperties(target5)[property1] = descriptor;
        return true;
    }
    setProperty(target6, property2, value, receiver, previous) {
        if (!this._equals(previous, value) || !(property2 in target6)) {
            const descriptor = this._getOwnPropertyDescriptor(target6, property2);
            if (descriptor !== undefined && 'set' in descriptor) return Reflect.set(target6, property2, value, receiver);
            return Reflect.set(target6, property2, value);
        }
        return true;
    }
    deleteProperty(target7, property3, previous1) {
        if (Reflect.deleteProperty(target7, property3)) {
            if (!this.isUnsubscribed) {
                const properties = this._getDescriptorCache().get(target7);
                if (properties) {
                    delete properties[property3];
                    this._pathCache.delete(previous1);
                }
            }
            return true;
        }
        return false;
    }
    isSameDescriptor(a, target8, property4) {
        const b = this._getOwnPropertyDescriptor(target8, property4);
        return a !== undefined && b !== undefined && Object.is(a.value, b.value) && (a.writable || false) === (b.writable || false) && (a.enumerable || false) === (b.enumerable || false) && (a.configurable || false) === (b.configurable || false) && a.get === b.get && a.set === b.set;
    }
    isGetInvariant(target9, property5) {
        const descriptor = this._getOwnPropertyDescriptor(target9, property5);
        return descriptor !== undefined && descriptor.configurable !== true && descriptor.writable !== true;
    }
    unsubscribe() {
        this._descriptorCache = null;
        this._pathCache = null;
        this._proxyCache = null;
        this.isUnsubscribed = true;
    }
}
exports.default = Cache;

},{"./path.js":"fCMbg","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bRRha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isArrayJs = require("../is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isBuiltinJs = require("../is-builtin.js");
var _isObjectJs = require("../is-object.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _cloneObjectJs = require("./clone/clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
var _cloneArrayJs = require("./clone/clone-array.js");
var _cloneArrayJsDefault = parcelHelpers.interopDefault(_cloneArrayJs);
var _cloneDateJs = require("./clone/clone-date.js");
var _cloneDateJsDefault = parcelHelpers.interopDefault(_cloneDateJs);
var _cloneSetJs = require("./clone/clone-set.js");
var _cloneSetJsDefault = parcelHelpers.interopDefault(_cloneSetJs);
var _cloneMapJs = require("./clone/clone-map.js");
var _cloneMapJsDefault = parcelHelpers.interopDefault(_cloneMapJs);
var _cloneWeaksetJs = require("./clone/clone-weakset.js");
var _cloneWeaksetJsDefault = parcelHelpers.interopDefault(_cloneWeaksetJs);
var _cloneWeakmapJs = require("./clone/clone-weakmap.js");
var _cloneWeakmapJsDefault = parcelHelpers.interopDefault(_cloneWeakmapJs);
class SmartClone {
    constructor(hasOnValidate){
        this._stack = [];
        this._hasOnValidate = hasOnValidate;
    }
    static isHandledType(value) {
        return _isObjectJsDefault.default(value) || _isArrayJsDefault.default(value) || _isBuiltinJs.isBuiltinWithMutableMethods(value);
    }
    static isHandledMethod(target, name) {
        if (_isObjectJsDefault.default(target)) return _cloneObjectJsDefault.default.isHandledMethod(name);
        if (_isArrayJsDefault.default(target)) return _cloneArrayJsDefault.default.isHandledMethod(name);
        if (target instanceof Set) return _cloneSetJsDefault.default.isHandledMethod(name);
        if (target instanceof Map) return _cloneMapJsDefault.default.isHandledMethod(name);
        return _isBuiltinJs.isBuiltinWithMutableMethods(target);
    }
    get isCloning() {
        return this._stack.length > 0;
    }
    start(value1, path, argumentsList) {
        let CloneClass = _cloneObjectJsDefault.default;
        if (_isArrayJsDefault.default(value1)) CloneClass = _cloneArrayJsDefault.default;
        else if (value1 instanceof Date) CloneClass = _cloneDateJsDefault.default;
        else if (value1 instanceof Set) CloneClass = _cloneSetJsDefault.default;
        else if (value1 instanceof Map) CloneClass = _cloneMapJsDefault.default;
        else if (value1 instanceof WeakSet) CloneClass = _cloneWeaksetJsDefault.default;
        else if (value1 instanceof WeakMap) CloneClass = _cloneWeakmapJsDefault.default;
        this._stack.push(new CloneClass(value1, path, argumentsList, this._hasOnValidate));
    }
    update(fullPath, property, value2) {
        this._stack[this._stack.length - 1].update(fullPath, property, value2);
    }
    preferredThisArg(target1, thisArg, thisProxyTarget) {
        const { name  } = target1;
        const isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, name);
        return this._stack[this._stack.length - 1].preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget);
    }
    isChanged(isMutable, value3, equals) {
        return this._stack[this._stack.length - 1].isChanged(isMutable, value3, equals);
    }
    undo(object) {
        if (this._previousClone !== undefined) this._previousClone.undo(object);
    }
    stop() {
        this._previousClone = this._stack.pop();
        return this._previousClone.clone;
    }
}
exports.default = SmartClone;

},{"../is-array.js":"cJQv9","../is-builtin.js":"2om27","../is-object.js":"dkXMD","./clone/clone-object.js":"bFOUy","./clone/clone-array.js":"lgRvB","./clone/clone-date.js":"g6u8X","./clone/clone-set.js":"l8mbT","./clone/clone-map.js":"etJLp","./clone/clone-weakset.js":"ctqLC","./clone/clone-weakmap.js":"cujey","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dkXMD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObject(value) {
    return toString.call(value) === '[object Object]';
}
exports.default = isObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bFOUy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathJs = require("../../path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _isArrayJs = require("../../is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isObjectJs = require("../../is-object.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _arrayJs = require("../methods/array.js");
var _setJs = require("../methods/set.js");
var _mapJs = require("../methods/map.js");
var _objectJs = require("../methods/object.js");
class CloneObject {
    constructor(value, path, argumentsList, hasOnValidate){
        this._path = path;
        this._isChanged = false;
        this._clonedCache = new Set();
        this._hasOnValidate = hasOnValidate;
        this._changes = hasOnValidate ? [] : null;
        this.clone = path === undefined ? value : this._shallowClone(value);
    }
    static isHandledMethod(name) {
        return _objectJs.IMMUTABLE_OBJECT_METHODS.has(name);
    }
    _shallowClone(value1) {
        let clone = value1;
        if (_isObjectJsDefault.default(value1)) clone = {
            ...value1
        };
        else if (_isArrayJsDefault.default(value1)) clone = [
            ...value1
        ];
        else if (value1 instanceof Date) clone = new Date(value1);
        else if (value1 instanceof Set) clone = new Set([
            ...value1
        ].map((item)=>this._shallowClone(item)
        ));
        else if (value1 instanceof Map) {
            clone = new Map();
            for (const [key, item] of value1.entries())clone.set(key, this._shallowClone(item));
        }
        this._clonedCache.add(clone);
        return clone;
    }
    preferredThisArg(isHandledMethod, name1, thisArg, thisProxyTarget) {
        if (isHandledMethod) {
            if (_isArrayJsDefault.default(thisProxyTarget)) this._onIsChanged = _arrayJs.MUTABLE_ARRAY_METHODS[name1];
            else if (thisProxyTarget instanceof Set) this._onIsChanged = _setJs.MUTABLE_SET_METHODS[name1];
            else if (thisProxyTarget instanceof Map) this._onIsChanged = _mapJs.MUTABLE_MAP_METHODS[name1];
            return thisProxyTarget;
        }
        return thisArg;
    }
    update(fullPath, property, value2) {
        const changePath = _pathJsDefault.default.after(fullPath, this._path);
        if (property !== 'length') {
            let object = this.clone;
            _pathJsDefault.default.walk(changePath, (key)=>{
                if (object && object[key]) {
                    if (!this._clonedCache.has(object[key])) object[key] = this._shallowClone(object[key]);
                    object = object[key];
                }
            });
            if (this._hasOnValidate) this._changes.push({
                path: changePath,
                property,
                previous: value2
            });
            if (object && object[property]) object[property] = value2;
        }
        this._isChanged = true;
    }
    undo(object) {
        let change;
        for(let index = this._changes.length - 1; index !== -1; index--){
            change = this._changes[index];
            _pathJsDefault.default.get(object, change.path)[change.property] = change.previous;
        }
    }
    isChanged(value3) {
        return this._onIsChanged === undefined ? this._isChanged : this._onIsChanged(this.clone, value3);
    }
}
exports.default = CloneObject;

},{"../../path.js":"fCMbg","../../is-array.js":"cJQv9","../../is-object.js":"dkXMD","../methods/array.js":"bfG6E","../methods/set.js":"jdE14","../methods/map.js":"bmYez","../methods/object.js":"DqzNp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bfG6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MUTABLE_ARRAY_METHODS", ()=>MUTABLE_ARRAY_METHODS
);
parcelHelpers.export(exports, "HANDLED_ARRAY_METHODS", ()=>HANDLED_ARRAY_METHODS
);
var _isDiffCertainJs = require("../diff/is-diff-certain.js");
var _isDiffCertainJsDefault = parcelHelpers.interopDefault(_isDiffCertainJs);
var _isDiffArraysJs = require("../diff/is-diff-arrays.js");
var _isDiffArraysJsDefault = parcelHelpers.interopDefault(_isDiffArraysJs);
var _objectJs = require("./object.js");
const IMMUTABLE_ARRAY_METHODS = new Set([
    'concat',
    'includes',
    'indexOf',
    'join',
    'keys',
    'lastIndexOf', 
]);
const MUTABLE_ARRAY_METHODS = {
    push: _isDiffCertainJsDefault.default,
    pop: _isDiffCertainJsDefault.default,
    shift: _isDiffCertainJsDefault.default,
    unshift: _isDiffCertainJsDefault.default,
    copyWithin: _isDiffArraysJsDefault.default,
    reverse: _isDiffArraysJsDefault.default,
    sort: _isDiffArraysJsDefault.default,
    splice: _isDiffArraysJsDefault.default,
    flat: _isDiffArraysJsDefault.default,
    fill: _isDiffArraysJsDefault.default
};
const HANDLED_ARRAY_METHODS = new Set([
    ..._objectJs.IMMUTABLE_OBJECT_METHODS,
    ...IMMUTABLE_ARRAY_METHODS,
    ...Object.keys(MUTABLE_ARRAY_METHODS), 
]);

},{"../diff/is-diff-certain.js":"5qAUq","../diff/is-diff-arrays.js":"idpM2","./object.js":"DqzNp","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5qAUq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffCertain() {
    return true;
}
exports.default = isDiffCertain;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"idpM2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffArrays(clone, value) {
    return clone.length !== value.length || clone.some((item, index)=>value[index] !== item
    );
}
exports.default = isDiffArrays;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"DqzNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IMMUTABLE_OBJECT_METHODS", ()=>IMMUTABLE_OBJECT_METHODS
);
const IMMUTABLE_OBJECT_METHODS = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf', 
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jdE14":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLLECTION_ITERATOR_METHODS", ()=>COLLECTION_ITERATOR_METHODS
);
parcelHelpers.export(exports, "IMMUTABLE_SET_METHODS", ()=>IMMUTABLE_SET_METHODS
);
parcelHelpers.export(exports, "MUTABLE_SET_METHODS", ()=>MUTABLE_SET_METHODS
);
parcelHelpers.export(exports, "HANDLED_SET_METHODS", ()=>HANDLED_SET_METHODS
);
var _isDiffSetsJs = require("../diff/is-diff-sets.js");
var _isDiffSetsJsDefault = parcelHelpers.interopDefault(_isDiffSetsJs);
const COLLECTION_ITERATOR_METHODS = [
    'keys',
    'values',
    'entries', 
];
const IMMUTABLE_SET_METHODS = new Set([
    'has',
    'toString', 
]);
const MUTABLE_SET_METHODS = {
    add: _isDiffSetsJsDefault.default,
    clear: _isDiffSetsJsDefault.default,
    delete: _isDiffSetsJsDefault.default,
    forEach: _isDiffSetsJsDefault.default
};
const HANDLED_SET_METHODS = new Set([
    ...IMMUTABLE_SET_METHODS,
    ...Object.keys(MUTABLE_SET_METHODS),
    ...COLLECTION_ITERATOR_METHODS, 
]);

},{"../diff/is-diff-sets.js":"bWFut","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bWFut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffSets(clone, value) {
    if (clone.size !== value.size) return true;
    for (const element of clone){
        if (!value.has(element)) return true;
    }
    return false;
}
exports.default = isDiffSets;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bmYez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MUTABLE_MAP_METHODS", ()=>MUTABLE_MAP_METHODS
);
parcelHelpers.export(exports, "HANDLED_MAP_METHODS", ()=>HANDLED_MAP_METHODS
);
var _isDiffMapsJs = require("../diff/is-diff-maps.js");
var _isDiffMapsJsDefault = parcelHelpers.interopDefault(_isDiffMapsJs);
var _setJs = require("./set.js");
const IMMUTABLE_MAP_METHODS = new Set([
    ..._setJs.IMMUTABLE_SET_METHODS,
    'get'
]);
const MUTABLE_MAP_METHODS = {
    set: _isDiffMapsJsDefault.default,
    clear: _isDiffMapsJsDefault.default,
    delete: _isDiffMapsJsDefault.default,
    forEach: _isDiffMapsJsDefault.default
};
const HANDLED_MAP_METHODS = new Set([
    ...IMMUTABLE_MAP_METHODS,
    ...Object.keys(MUTABLE_MAP_METHODS),
    ..._setJs.COLLECTION_ITERATOR_METHODS, 
]);

},{"../diff/is-diff-maps.js":"hXRjT","./set.js":"jdE14","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hXRjT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffMaps(clone, value) {
    if (clone.size !== value.size) return true;
    let bValue;
    for (const [key, aValue] of clone){
        bValue = value.get(key);
        if (bValue !== aValue || bValue === undefined && !value.has(key)) return true;
    }
    return false;
}
exports.default = isDiffMaps;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lgRvB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("../methods/array.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneArray extends _cloneObjectJsDefault.default {
    static isHandledMethod(name) {
        return _arrayJs.HANDLED_ARRAY_METHODS.has(name);
    }
}
exports.default = CloneArray;

},{"../methods/array.js":"bfG6E","./clone-object.js":"bFOUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"g6u8X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneDate extends _cloneObjectJsDefault.default {
    undo(object) {
        object.setTime(this.clone.getTime());
    }
    isChanged(value, equals) {
        return !equals(this.clone.valueOf(), value.valueOf());
    }
}
exports.default = CloneDate;

},{"./clone-object.js":"bFOUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"l8mbT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setJs = require("../methods/set.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneSet extends _cloneObjectJsDefault.default {
    static isHandledMethod(name) {
        return _setJs.HANDLED_SET_METHODS.has(name);
    }
    undo(object) {
        for (const value of this.clone)object.add(value);
        for (const value1 of object)if (!this.clone.has(value1)) object.delete(value1);
    }
}
exports.default = CloneSet;

},{"../methods/set.js":"jdE14","./clone-object.js":"bFOUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"etJLp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapJs = require("../methods/map.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneMap extends _cloneObjectJsDefault.default {
    static isHandledMethod(name) {
        return _mapJs.HANDLED_MAP_METHODS.has(name);
    }
    undo(object) {
        for (const [key, value] of this.clone.entries())object.set(key, value);
        for (const key1 of object.keys())if (!this.clone.has(key1)) object.delete(key1);
    }
}
exports.default = CloneMap;

},{"../methods/map.js":"bmYez","./clone-object.js":"bFOUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ctqLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneWeakSet extends _cloneObjectJsDefault.default {
    constructor(value, path, argumentsList, hasOnValidate){
        super(undefined, path, argumentsList, hasOnValidate);
        this._arg1 = argumentsList[0];
        this._weakValue = value.has(this._arg1);
    }
    isChanged(value1) {
        return this._weakValue !== value1.has(this._arg1);
    }
    undo(object) {
        if (this._weakValue && !object.has(this._arg1)) object.add(this._arg1);
        else object.delete(this._arg1);
    }
}
exports.default = CloneWeakSet;

},{"./clone-object.js":"bFOUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cujey":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneWeakMap extends _cloneObjectJsDefault.default {
    constructor(value, path, argumentsList, hasOnValidate){
        super(undefined, path, argumentsList, hasOnValidate);
        this._weakKey = argumentsList[0];
        this._weakHas = value.has(this._weakKey);
        this._weakValue = value.get(this._weakKey);
    }
    isChanged(value1) {
        return this._weakValue !== value1.get(this._weakKey);
    }
    undo(object) {
        const weakHas = object.has(this._weakKey);
        if (this._weakHas && !weakHas) object.set(this._weakKey, this._weakValue);
        else if (!this._weakHas && weakHas) object.delete(this._weakKey);
        else if (this._weakValue !== object.get(this._weakKey)) object.set(this._weakKey, this._weakValue);
    }
}
exports.default = CloneWeakMap;

},{"./clone-object.js":"bFOUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6C2hL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("@swc/helpers");
var _getDate = require("./getDate");
var _getDateDefault = parcelHelpers.interopDefault(_getDate);
var rowRemove = function(button, state, watchedState) {
    var watched = watchedState;
    var cityId = button.dataset.removeCity;
    var rowOfCity = button.closest("[data-row-city=\"".concat(cityId, "\"]"));
    var cities = _helpers.toConsumableArray(state.cities);
    var cityIndexOf = cities.indexOf(Number(cityId));
    if (cityIndexOf >= 0) {
        cities.splice(cityIndexOf, 1);
        rowOfCity.remove();
        watched.cities = cities;
    }
};
var renderTableHeader = function(state, elements, config) {
    var headerWrapper = elements.table.header;
    var emptyArray = new Array(config.days).fill(0);
    var cell = function(date) {
        return " <div class=\"table__cell\">\n  <span class=\"text text--size-x text--weight-7 text--size-s\">".concat(date, "</span>\n  </div>");
    };
    var cells = emptyArray.map(function(item, index) {
        return cell(_getDateDefault.default(index));
    }).join('');
    var row = "<div class=\"table__row table__header-row\">\n  <div class=\"table__cell\">\n  <span class=\"text text--size-x text--weight-7\">City</span>\n  </div>\n  ".concat(cells, "\n  </div>");
    headerWrapper.innerHTML = '';
    headerWrapper.insertAdjacentHTML('afterbegin', row);
};
var renderTableBody = function(state, watchedState, elements) {
    var tableBody = elements.table.body;
    tableBody.innerHTML = '';
    var cell = function(data, param, param1) {
        var ico = param === void 0 ? '' : param, textCls = param1 === void 0 ? 'text--size-x' : param1;
        var tableCell = document.createElement('div');
        tableCell.classList.add('table__cell');
        var tempText = document.createElement('span');
        tempText.classList.add('text', textCls);
        tempText.innerText = data;
        tableCell.append(tempText);
        if (ico !== '') {
            var icoWeather = document.createElement('img');
            icoWeather.classList.add('img', 'table__img');
            icoWeather.src = ico;
            tableCell.append(icoWeather);
        }
        return tableCell;
    };
    // ROWS
    state.weather.map(function(item) {
        var _row;
        var row = document.createElement('div');
        row.classList.add('table__row');
        row.dataset.rowCity = item.id;
        var cellName = cell(item.name);
        var cells = item.data.map(function(dayWeather) {
            var icoSrc = "https://openweathermap.org/img/wn/".concat(dayWeather.ico, ".png");
            var temp = "".concat(dayWeather.temp.toFixed(1), "°C");
            return cell(temp, icoSrc, 'text--size-s');
        });
        // DELETE BUTTON
        var button = document.createElement('button');
        button.dataset.removeCity = item.id;
        button.classList.add('table__row-remove');
        button.innerHTML = '&times;';
        button.addEventListener('click', function() {
            return rowRemove(button, state, watchedState);
        });
        (_row = row).append.apply(_row, [
            cellName
        ].concat(_helpers.toConsumableArray(cells), [
            button
        ]));
        return row;
    }).map(function(item) {
        return tableBody.append(item);
    });
};
var renderTable = function(state, watchedState, elements, config) {
    if (!state.ui.tableHeader) renderTableHeader(state, elements, config);
    renderTableBody(state, watchedState, elements, config);
};
exports.default = renderTable;

},{"@swc/helpers":"erO4s","./getDate":"aYss8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aYss8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var getDate = function(param) {
    var numberOfDay = param === void 0 ? 0 : param;
    var number;
    if (isNaN(Number(numberOfDay))) number = 0;
    switch(true){
        case isNaN(Number(numberOfDay)):
            number = 0;
            break;
        case numberOfDay < 0:
            number = 0;
            break;
        default:
            number = Math.abs(Math.floor(numberOfDay));
    }
    var today = new Date();
    var nextDay = new Date(today);
    var date = nextDay.setDate(nextDay.getDate() + number);
    var newDate = new Date(date);
    return newDate.toLocaleDateString('RU', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    });
};
exports.default = getDate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5PuOd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("@swc/helpers");
var _regeneratorRuntime = require("regenerator-runtime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var apiDataOfCity = _helpers.asyncToGenerator(_regeneratorRuntimeDefault.default.mark(function _callee(url) {
    var data;
    return _regeneratorRuntimeDefault.default.wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.prev = 0;
                _ctx.next = 3;
                return _axiosDefault.default.get(url);
            case 3:
                data = _ctx.sent.data;
                return _ctx.abrupt("return", data);
            case 7:
                _ctx.prev = 7;
                _ctx.t0 = _ctx["catch"](0);
                if (!_axiosDefault.default.isAxiosError(_ctx.t0)) {
                    _ctx.next = 14;
                    break;
                }
                console.log('ERROR', _ctx.t0);
                console.log('ERROR RESPONSE', _ctx.t0.response);
                console.log('ERROR RESPONSE DATA', _ctx.t0.response.data.error);
                return _ctx.abrupt("return", _ctx.t0.response);
            case 14:
                return _ctx.abrupt("return", true);
            case 15:
            case "end":
                return _ctx.stop();
        }
    }, _callee, null, [
        [
            0,
            7
        ]
    ]);
}));
exports.default = apiDataOfCity;

},{"@swc/helpers":"erO4s","regenerator-runtime":"12Ae8","axios":"9qbW2","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9qbW2":[function(require,module,exports) {
module.exports = require('./lib/axios');

},{"./lib/axios":"2WNBm"}],"2WNBm":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.VERSION = require('./env/data').version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require('./helpers/spread');
// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"23n7J","./helpers/bind":"1RCyB","./core/Axios":"d1DFs","./core/mergeConfig":"4TZMD","./defaults":"hx7Ws","./cancel/Cancel":"3qWk5","./cancel/CancelToken":"bkbDS","./cancel/isCancel":"812ai","./env/data":"hZeSU","./helpers/spread":"8whoM","./helpers/isAxiosError":"6tVC4"}],"23n7J":[function(require,module,exports) {
'use strict';
var bind = require('./helpers/bind');
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return toString.call(val) === '[object FormData]';
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return toString.call(val) === '[object URLSearchParams]';
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) return false;
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {
    };
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({
        }, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"./helpers/bind":"1RCyB"}],"1RCyB":[function(require,module,exports) {
'use strict';
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"d1DFs":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
var validator = require('../helpers/validator');
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
        config = config || {
        };
        config.url = configOrUrl;
    } else config = configOrUrl || {
    };
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = 'get';
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {
        }, {
            method: method,
            url: url,
            data: (config || {
            }).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {
        }, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"./../utils":"23n7J","../helpers/buildURL":"7P30A","./InterceptorManager":"7yqEb","./dispatchRequest":"1jBLc","./mergeConfig":"4TZMD","../helpers/validator":"2dOdb"}],"7P30A":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') return;
            if (utils.isArray(val)) key = key + '[]';
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};

},{"./../utils":"23n7J"}],"7yqEb":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"./../utils":"23n7J"}],"1jBLc":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var Cancel = require('../cancel/Cancel');
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new Cancel('canceled');
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {
    };
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {
    }, config.headers[config.method] || {
    }, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"./../utils":"23n7J","./transformData":"a5Zhs","../cancel/isCancel":"812ai","../defaults":"hx7Ws","../cancel/Cancel":"3qWk5"}],"a5Zhs":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var defaults = require('./../defaults');
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"./../utils":"23n7J","./../defaults":"hx7Ws"}],"hx7Ws":[function(require,module,exports) {
var process = require("process");
'use strict';
var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');
var enhanceError = require('./core/enhanceError');
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) headers['Content-Type'] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
    else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') // For node use HTTP adapter
    adapter = require('./adapters/http');
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
                setContentTypeIfUnset(headers, 'application/json');
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === 'SyntaxError') throw enhanceError(e, this, 'E_JSON_PARSE');
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"gRR53","./utils":"23n7J","./helpers/normalizeHeaderName":"7I1Rf","./core/enhanceError":"5Jmql","./adapters/xhr":"j5guG","./adapters/http":"j5guG"}],"gRR53":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"7I1Rf":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"../utils":"23n7J"}],"5Jmql":[function(require,module,exports) {
'use strict';
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};

},{}],"j5guG":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
var defaults = require('../defaults');
var Cancel = require('../cancel/Cancel');
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener('abort', onCanceled);
        }
        if (utils.isFormData(requestData)) delete requestHeaders['Content-Type']; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ('setRequestHeader' in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') request.addEventListener('progress', config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) request.upload.addEventListener('progress', config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"./../utils":"23n7J","./../core/settle":"6X6Ui","./../helpers/cookies":"ao3Fd","./../helpers/buildURL":"7P30A","../core/buildFullPath":"ld6gr","./../helpers/parseHeaders":"gpHDj","./../helpers/isURLSameOrigin":"2y17F","../core/createError":"2UKBy","../defaults":"hx7Ws","../cancel/Cancel":"3qWk5"}],"6X6Ui":[function(require,module,exports) {
'use strict';
var createError = require('./createError');
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
};

},{"./createError":"2UKBy"}],"2UKBy":[function(require,module,exports) {
'use strict';
var enhanceError = require('./enhanceError');
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"5Jmql"}],"ao3Fd":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
(function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push('expires=' + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push('path=' + path);
            if (utils.isString(domain)) cookie.push('domain=' + domain);
            if (secure === true) cookie.push('secure');
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
})() : // Non standard browser env (web workers, react-native) lack needed support.
(function nonStandardBrowserEnv() {
    return {
        write: function write() {
        },
        read: function read() {
            return null;
        },
        remove: function remove() {
        }
    };
})();

},{"./../utils":"23n7J"}],"ld6gr":[function(require,module,exports) {
'use strict';
var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"../helpers/isAbsoluteURL":"axjYU","../helpers/combineURLs":"7Iss4"}],"axjYU":[function(require,module,exports) {
'use strict';
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

},{}],"7Iss4":[function(require,module,exports) {
'use strict';
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

},{}],"gpHDj":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {
    };
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === 'set-cookie') parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};

},{"./../utils":"23n7J"}],"2y17F":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
(function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
})() : // Non standard browser envs (web workers, react-native) lack needed support.
(function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
})();

},{"./../utils":"23n7J"}],"3qWk5":[function(require,module,exports) {
'use strict';
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"812ai":[function(require,module,exports) {
'use strict';
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"4TZMD":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {
    };
    var config = {
    };
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({
        }, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"../utils":"23n7J"}],"2dOdb":[function(require,module,exports) {
'use strict';
var VERSION = require('../env/data').version;
var validators = {
};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var deprecatedWarnings = {
};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new TypeError('options must be an object');
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError('option ' + opt + ' must be ' + result);
            continue;
        }
        if (allowUnknown !== true) throw Error('Unknown option ' + opt);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"../env/data":"hZeSU"}],"hZeSU":[function(require,module,exports) {
module.exports = {
    "version": "0.26.0"
};

},{}],"bkbDS":[function(require,module,exports) {
'use strict';
var Cancel = require('./Cancel');
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"./Cancel":"3qWk5"}],"8whoM":[function(require,module,exports) {
'use strict';
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"6tVC4":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
};

},{"./../utils":"23n7J"}]},["2Lbqw","48AqN"], "48AqN", "parcelRequire0d7f")

//# sourceMappingURL=scripts..js.map
