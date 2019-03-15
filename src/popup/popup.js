"use strict";

let isActive = false;
let changeColorButton = document.getElementById("changeColor");

changeColorButton.onclick = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.insertCSS(
      (tabs[0].id, { file: "./actions/changeBackground/changeBackground.css" })
    );
    chrome.tabs.executeScript(tabs[0].id, {
      file: "./actions/changeBackground/changeBackground.js"
    });
    isActive = !isActive;
    changeColorButton.innerHTML = isActive ? "Turn off" : "Turn on";
  });
};
