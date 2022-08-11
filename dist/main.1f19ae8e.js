// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"selection_sort.js":[function(require,module,exports) {
var a = [2, 12, 13, -7, 11, 5, 3]; //选择排序 -- 循环
//求最小值下标

var minIndex = function minIndex(arr) {
  var index = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[index]) {
      index = i;
    }
  }

  return index;
}; //递归--求最小值 -- 递归特点,函数不断调用自己,每次调用的参数略有不同,当满足某个简单条件时,则实现一个简单的调用,得到一个返回值,最终算出结果.


var min = function min(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  if (arr.length > 2) {
    return min([arr[0], min(arr.slice(1))]);
  } else {
    var result = Math.min.apply(null, arr);
    return result;
  }
}; //sort 排序 将数组从小到大排列 --递归方式


var sort = function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var k = arr.length;

  if (k > 2) {
    var index = minIndex(arr);
    var _min = arr[index];
    arr.splice(index, 1);
    return [_min].concat(sort(arr));
  } else {
    return arr[0] > arr[1] ? arr.reverse() : arr;
  }
}; //sort 排序 将数组由小到大排列 -- 循环方式


var swap = function swap(arr, index, i) {
  var temp = arr[index];
  arr[index] = arr[i];
  arr[i] = temp;
};

var sort2 = function sort2(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("_____");
    var index = minIndex(arr.slice(i)) + i;
    console.log("i:".concat(i));
    console.log("index:".concat(index));
    console.log("min:".concat(arr[index]));
    console.log("_____");

    if (index !== i) {
      swap(arr, index, i);
    }
  }

  return arr;
}; // sort2(a)
},{}],"quickSort.js":[function(require,module,exports) {
var quickSort = function quickSort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }

  var pivotIndex = Math.floor(numbers.length / 2);
  var pivot = numbers.splice(pivotIndex, 1)[0];
  var left = [],
      right = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return sort(left).concat([pivot], sort(right));
};

var b = [2, 12, 13, -7, 11, 5, 3];
},{}],"mergeSort.js":[function(require,module,exports) {
// 归并排序算法实现排序的思路是：
// 将整个待排序序列划分成多个不可再分的子序列，每个子序列中仅有 1 个元素；
// 所有的子序列进行两两合并，合并过程中完成排序操作，最终合并得到的新序列就是有序序列。
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变,提取起始处的索引（从 0 开始），从该索引开始提取原数组元素.返回值,一个含有被提取元素的新数组
var c = [2, 12, 13, -7, 11, 5, 3];

var mergeSort = function mergeSort(arr) {
  var k = arr.length;

  if (k <= 1) {
    return arr;
  }

  var left = arr.slice(0, Math.floor(k / 2));
  var right = arr.slice(Math.floor(k / 2));
  console.log("left:".concat(left));
  console.log("right:".concat(right));
  return merge(mergeSort(left), mergeSort(right));
};

var merge = function merge(a, b) {
  console.log("a:".concat(a, ",b:").concat(b));

  if (a.length === 0) {
    return b;
  }

  if (b.length === 0) {
    return a;
  }

  return a[0] > b[0] ? [b[0]].concat(merge(a, b.slice(1))) : [a[0]].concat(merge(a.slice(1), b));
};
},{}],"countSort.js":[function(require,module,exports) {
//计数排序的特点 
// 使用了额外的hashTable 只遍历数组一遍(不过还要遍历一次hashTable)
// 这叫做[空间换时间]
var d = [2, 12, 13, -7, 11, 5, 3];

var countSort = function countSort(arr) {
  var hashTable = {},
      result = [],
      max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in hashTable) {
      hashTable[arr[i]] += 1;
    } else {
      hashTable[arr[i]] = 1;
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(hashTable);

  for (var j = -10000000; j <= max; j++) {
    if (j in hashTable) {
      for (var _i = 0; _i < hashTable[j]; _i++) {
        result.push(j);
      }
    }
  }

  return result;
};

console.log(countSort(d));
},{}],"main.js":[function(require,module,exports) {
"use strict";

require("./selection_sort");

require("./quickSort");

require("./mergeSort");

require("./countSort");
},{"./selection_sort":"selection_sort.js","./quickSort":"quickSort.js","./mergeSort":"mergeSort.js","./countSort":"countSort.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63824" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map