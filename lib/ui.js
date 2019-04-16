"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);

    this.profile = document.getElementById("profile");
    this.cardbody = document.querySelector(".card-body");
    this.githubname = document.getElementById("githubname");
    this.reposadd = document.getElementById("repos");
    this.listgroup = document.getElementById("last-users");
  }

  _createClass(UI, [{
    key: "getUserData",
    value: function getUserData(user) {
      this.profile.innerHTML = "\n        <div class=\"card card-body mb-3\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <a href=\"".concat(user.html_url, "\" target = \"_blank\">\n             <img class=\"img-fluid mb-2\" src=\"").concat(user.avatar_url, "\"> </a>\n             <hr>\n             <div id=\"fullName\"><strong> ").concat(user.name, "</strong></div>\n             <hr>\n             <div id=\"bio\">").concat(user.bio, "</div>\n            </div>\n          <div class=\"col-md-8\">\n                <button class=\"btn btn-secondary\">\n                      Takip\xE7i  <span class=\"badge badge-light\">").concat(user.followers, "</span>\n                </button>\n                <button class=\"btn btn-info\">\n                     Takip Edilen  <span class=\"badge badge-light\">").concat(user.following, "</span>\n                  </button>\n                <button class=\"btn btn-danger\">\n                    Repolar  <span class=\"badge badge-light\"><a href=\"").concat(user.repos_url, "\">").concat(user.repos_url, "</a></span>\n                </button>\n                <hr>\n                <li class=\"list-group\">\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/company.png\" width=\"30px\"> <span id=\"company\">").concat(user.company, "</span>\n                        \n                    </li>\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/location.png\" width=\"30px\"> <span id = \"location\">").concat(user.location, "</a>\n                        \n                    </li>\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/mail.png\" width=\"30px\"> <span id=\"mail\">").concat(user.email, "</span>\n                        \n                    </li>\n                    \n                </div>\n                   \n                \n          </div>\n    </div>\n        ");
    }
  }, {
    key: "showUyariInfo",
    value: function showUyariInfo(message) {
      var div = document.createElement("div");
      div.className = "alert alert-danger";
      div.textContent = message;
      this.cardbody.appendChild(div);
      setTimeout(function () {
        div.remove();
      }, 2000);
    }
  }, {
    key: "clearName",
    value: function clearName() {
      this.githubname.value = "";
    }
  }, {
    key: "reposs",
    value: function reposs(repos) {
      var _this = this;

      this.reposadd.innerHTML = "";
      repos.forEach(function (repo) {
        _this.reposadd.innerHTML += "\n          <div class=\"mb-2 card-body\">\n          <div class=\"row\">\n              <div class=\"col-md-2\">\n              <span></span> \n              <a href=\"".concat(repo.html_url, "\" target = \"_blank\" id = \"repoName\">").concat(repo.description, "</a>\n              </div>\n              <div class=\"col-md-6\">\n                  <button class=\"btn btn-secondary\">\n                      Starlar  <span class=\"badge badge-light\" id=\"repoStar\">").concat(repo.stargazers_count, "</span>\n                  </button>\n\n                  <button class=\"btn btn-info\">\n                      Forklar  <span class=\"badge badge-light\" id =\"repoFork\">").concat(repo.forks_count, "</span>\n                  </button>\n          \n              </div>\n      </div>\n\n      </div>\n          ");
      });
    }
  }, {
    key: "clearNameUIelement",
    value: function clearNameUIelement() {
      while (this.listgroup.firstElementChild !== null) {
        this.listgroup.removeChild(this.listgroup.firstElementChild);
      }
    }
  }, {
    key: "addNameUIelement",
    value: function addNameUIelement(username) {
      // console.log(username);
      // console.log(Storage.storageAllData())
      if (Storage.storageAllData().indexOf(username) === -1) {
        // <!-- <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> -->   
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = username;
        this.listgroup.appendChild(li);
      }
    }
  }, {
    key: "allNameUIelement",
    value: function allNameUIelement() {
      var _this2 = this;

      Storage.storageAllData().forEach(function (username) {
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = username;

        _this2.listgroup.appendChild(li);
      });
    }
  }]);

  return UI;
}();