"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Github =
/*#__PURE__*/
function () {
  function Github(url) {
    _classCallCheck(this, Github);

    this.url = "https://api.github.com/users/";
  }

  _createClass(Github, [{
    key: "GithubgetData",
    value: function () {
      var _GithubgetData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(user) {
        var userData, resposData, userDataJson, resposDataJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(this.url + user);

              case 2:
                userData = _context.sent;
                _context.next = 5;
                return fetch(this.url + user + "/repos");

              case 5:
                resposData = _context.sent;
                _context.next = 8;
                return userData.json();

              case 8:
                userDataJson = _context.sent;
                _context.next = 11;
                return resposData.json();

              case 11:
                resposDataJson = _context.sent;
                return _context.abrupt("return", {
                  users: userDataJson,
                  repos: resposDataJson
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GithubgetData(_x) {
        return _GithubgetData.apply(this, arguments);
      }

      return GithubgetData;
    }()
  }]);

  return Github;
}();