"use strict";

var githubname = document.getElementById("githubname");
var githubform = document.getElementById("github-form");
var lastusers = document.getElementById("last-users");
var clearlastusers = document.getElementById("clear-last-users"); // const storage=new Storage();

eventListeners(); //static fonksiyonlarda direk js ismi ile çağrılır.

var github = new Github();
var ui = new UI();

function eventListeners(e) {
  githubform.addEventListener("submit", getData);
  clearlastusers.addEventListener("click", getAllClear);
  document.addEventListener("DOMContentLoaded", getAllSearced);
  lastusers.addEventListener("click", chooseItem);
}

function AddData(params) {
  github.GithubgetData(githubname.value.trim()).then(function (response) {
    if (response.repos.message === "Not Found") {
      ui.showUyariInfo("Böyle bir kullanıcı yoktur");
    } else {
      ui.addNameUIelement(githubname.value);
      Storage.addStorageSetData(githubname.value);
      ui.getUserData(response.users);
      ui.reposs(response.repos);
      ui.clearName();
    }
  }).catch(function (err) {
    return console.log(err);
  });
}

function chooseItem(e) {
  console.log(e.target.textContent);
  githubname.value = e.target.textContent;
  AddData();
}

function getData(e) {
  if (githubname.value.trim() === "") {
    ui.showUyariInfo("Boş olamaz");
  } else {
    AddData();
  }

  e.preventDefault();
}

function getAllSearced() {
  ui.allNameUIelement();
}

function getAllClear() {
  if (confirm("Hepsini silmek ister misiniz?")) {
    ui.clearNameUIelement();
    Storage.clearStorageData();
  }
}