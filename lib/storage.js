"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, null, [{
    key: "storageAllData",
    value: function storageAllData() {
      var data;

      if (localStorage.getItem("searched") === null) {
        data = [];
      } else {
        data = JSON.parse(localStorage.getItem("searched"));
      }

      return data;
    }
  }, {
    key: "addStorageSetData",
    value: function addStorageSetData(username) {
      var datauser = this.storageAllData();

      if (datauser.indexOf(username) === -1) {
        datauser.push(username);
      }

      localStorage.setItem("searched", JSON.stringify(datauser));
    }
  }, {
    key: "clearStorageData",
    value: function clearStorageData() {
      localStorage.removeItem("searched");
    }
  }]);

  return Storage;
}();