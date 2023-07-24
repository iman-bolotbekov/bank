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
})({"js.js":[function(require,module,exports) {
"use strict";

var account1 = {
  owner: "Dmitrii Fokeev",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
  movementsDates: ["2019-11-18T21:31:17.178Z", "2019-12-23T07:42:02.383Z", "2020-01-28T09:15:04.904Z", "2020-04-01T10:17:24.185Z", "2020-05-08T14:11:59.604Z", "2023-01-29T17:01:17.194Z", "2023-01-31T23:36:17.929Z", "2023-02-02T10:51:36.790Z"],
  currency: "RUB",
  locale: "pt-PT"
};
var account2 = {
  owner: "Anna Filimonova",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
  movementsDates: ["2019-11-01T13:15:33.035Z", "2019-11-30T09:48:16.867Z", "2019-12-25T06:04:23.907Z", "2020-01-25T14:18:46.235Z", "2020-02-05T16:33:06.386Z", "2020-04-10T14:43:26.374Z", "2020-06-25T18:49:59.371Z", "2020-07-26T12:01:20.894Z"],
  currency: "USD",
  locale: "en-US"
};
var account3 = {
  owner: "Polina Filimonova",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
  movementsDates: ["2019-11-01T13:15:33.035Z", "2019-11-30T09:48:16.867Z", "2019-12-25T06:04:23.907Z", "2020-01-25T14:18:46.235Z", "2020-02-05T16:33:06.386Z", "2020-04-10T14:43:26.374Z", "2020-06-25T18:49:59.371Z", "2020-07-26T12:01:20.894Z"],
  currency: "EUR",
  locale: "es-PE"
};
var account4 = {
  owner: "Stanislav Ivanchenko",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
  movementsDates: ["2019-11-01T13:15:33.035Z", "2019-11-30T09:48:16.867Z", "2019-12-25T06:04:23.907Z", "2020-01-25T14:18:46.235Z", "2020-02-05T16:33:06.386Z"],
  currency: "USD",
  locale: "ru-RU"
};
var accounts = [account1, account2, account3, account4];

// Elements
var labelWelcome = document.querySelector(".welcome");
var labelDate = document.querySelector(".date");
var labelBalance = document.querySelector(".balance__value");
var labelSumIn = document.querySelector(".summary__value--in");
var labelSumOut = document.querySelector(".summary__value--out");
var labelSumInterest = document.querySelector(".summary__value--interest");
var labelTimer = document.querySelector(".timer");
var containerApp = document.querySelector(".app");
var containerMovements = document.querySelector(".movements");
var btnLogin = document.querySelector(".login__btn");
var btnTransfer = document.querySelector(".form__btn--transfer");
var btnLoan = document.querySelector(".form__btn--loan");
var btnClose = document.querySelector(".form__btn--close");
var btnSort = document.querySelector(".btn--sort");
var inputLoginUsername = document.querySelector(".login__input--user");
var inputLoginPin = document.querySelector(".login__input--pin");
var inputTransferTo = document.querySelector(".form__input--to");
var inputTransferAmount = document.querySelector(".form__input--amount");
var inputLoanAmount = document.querySelector(".form__input--loan-amount");
var inputCloseUsername = document.querySelector(".form__input--user");
var inputClosePin = document.querySelector(".form__input--pin");

//Даты
function formatMovementDate(date) {
  var calcDaysPassed = function calcDaysPassed(date1, date2) {
    return Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
  };
  var daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return "Сегодня";
  if (daysPassed === 1) return "Вчера";
  if (daysPassed >= 2 && daysPassed <= 4) return "\u041F\u0440\u043E\u0448\u043B\u043E ".concat(daysPassed, " \u0434\u043D\u044F");
  if (daysPassed <= 7) return "\u041F\u0440\u043E\u0448\u043B\u043E ".concat(daysPassed, " \u0434\u043D\u0435\u0439");
  var year = date.getFullYear();
  var month = "".concat(date.getMonth() + 1).padStart(2, 0);
  var day = "".concat(date.getDate()).padStart(2, 0);
  var hours = "".concat(date.getHours()).padStart(2, 0);
  var minutes = "".concat(date.getMinutes()).padStart(2, 0);
  return "".concat(day, "/").concat(month, "/").concat(year, " ").concat(hours, ":").concat(minutes);
}

// Вывод на страницу всех приходов и уходов
function displayMovements(acc) {
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  containerMovements.innerHTML = "";
  var movs = sort ? acc.movements.slice().sort(function (a, b) {
    return a - b;
  }) : acc.movements;
  movs.forEach(function (value, i) {
    var type = value > 0 ? "deposit" : "withdrawal";
    var typeMessage = value > 0 ? "внесение" : "снятие";
    // Перебор массива с датами
    var date = new Date(acc.movementsDates[i]);
    var displayDate = formatMovementDate(date);
    var html = "\n    <div class=\"movements__row\">\n          <div class=\"movements__type movements__type--".concat(type, "\">\n            ").concat(i + 1, " ").concat(typeMessage, "\n          </div>\n          <div class=\"movements__date\">").concat(displayDate, "</div>\n          <div class=\"movements__value\">").concat(value, "\u20BD</div>\n        </div>\n    ");
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

// Создание логина из ФИО в объекте
function createLogIn(accs) {
  accs.forEach(function (acc) {
    acc.logIn = acc.owner.toLowerCase().split(" ").map(function (val) {
      return val[0];
    }).join("");
  });
}
createLogIn(accounts);

// Подсчет и вывод на страницу общего баланса
function calcPrintBalance(acc) {
  acc.balance = acc.movements.reduce(function (acc, val) {
    return acc + val;
  });
  labelBalance.textContent = "".concat(acc.balance, " RUB");
}

// Сумма и вывод на страницу прихода и ухода в footer
function calcDisplaySum(movements) {
  var incomes = movements.filter(function (mov) {
    return mov > 0;
  }).reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelSumIn.textContent = "".concat(incomes, "\u20BD");
  var out = movements.filter(function (mov) {
    return mov < 0;
  }).reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelSumOut.textContent = "".concat(Math.abs(out), "\u20BD");
  labelSumInterest.textContent = "".concat(incomes + out, "\u20BD");
}

//Обновление интерфейса сайта
function updateUi(acc) {
  displayMovements(acc);
  calcPrintBalance(acc);
  calcDisplaySum(acc.movements);
}

//Время - timeout & interval
function startLogOut() {
  var time = 600;
  function tick() {
    var min = String(Math.trunc(time / 60)).padStart(2, 0);
    var seconds = String(time % 60).padStart(2, 0);
    labelTimer.textContent = "".concat(min, ":").concat(seconds);
    if (time == 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
    }
    time--;
  }
  tick();
  var timer = setInterval(tick, 1000);
  return timer;
}

//Кнопка входа в аккаунт
var currentAccount;
var timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Login");
  currentAccount = accounts.find(function (acc) {
    return acc.logIn === inputLoginUsername.value;
  });
  console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    inputLoginPin.value = inputLoginUsername.value = "";

    //Обновление текущей даты после входа в акк
    var local = navigator.language;
    var options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "long",
      hour12: false
    };
    labelDate.textContent = Intl.DateTimeFormat(local, options).format(new Date());
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOut();
    updateUi(currentAccount);
  }
});

//Перевод денег на другой аккаунт
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  var reciveAcc = accounts.find(function (acc) {
    return acc.logIn === inputTransferTo.value;
  });
  var amount = Number(inputTransferAmount.value);
  console.log(amount, reciveAcc);
  if (reciveAcc && amount > 0 && currentAccount.balance >= amount && reciveAcc.logIn !== currentAccount.logIn) {
    currentAccount.movements.push(-amount);
    reciveAcc.movements.push(amount);

    //Добавление даты в mov
    currentAccount.movementsDates.push(new Date().toISOString());

    //Обновление таймера при переводе
    clearInterval(timer);
    timer = startLogOut();
    updateUi(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = "";
  }
});

//Удаление аккаунта
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.logIn && Number(inputClosePin.value) === currentAccount.pin) {
    var index = accounts.findIndex(function (acc) {
      return acc.logIn === currentAccount.logIn;
    });
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

//Внесение денег на счет
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  var amount = Number(inputLoanAmount.value);
  if (amount > 0) {
    currentAccount.movements.push(amount);

    //Добавление даты в массив movementsDates
    currentAccount.movementsDates.push(new Date().toISOString());

    //Обновление таймера при внесении средств
    clearInterval(timer);
    timer = startLogOut();
    updateUi(currentAccount);
  }
  inputLoanAmount.value = "";
});

// Общий баланс длинно
// const accMov = accounts.map(function (acc) {
//   return acc.movements;
// });
// const allMov = accMov.flat();

// const allBalance = allMov.reduce(function (acc, mov) {
//   return acc + mov;
// }, 0);
// console.log(allBalance);

// Общий баланс коротко
var overalBalance = accounts.map(function (acc) {
  return acc.movements;
}).flat().reduce(function (acc, mov) {
  return acc + mov;
}, 0);

// console.log(overalBalance);

//Сортировка по приходам и уходам
var sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

//Изменение значка валюты
labelBalance.addEventListener("click", function () {
  Array.from(document.querySelectorAll(".movements__value"), function (val, i) {
    return val.innerText = val.textContent.replace("₽", "RUB");
  });
});

////

var timer1 = setTimeout(function (word1, word2) {
  console.log("".concat(word1, " ").concat(word2));
}, 2000, "Hello", "world");
var timer2 = setInterval(function () {
  console.log("Hi");
}, 1000);
if (true) {
  clearTimeout(timer1);
  clearInterval(timer2);
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55175" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js.js"], null)
//# sourceMappingURL=/js.00934245.js.map