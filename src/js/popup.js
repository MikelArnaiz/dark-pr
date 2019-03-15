"use strict";

let isActive = false;
let changeColorButton = document.getElementById("changeColor");

changeColorButton.onclick = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.insertCSS((tabs[0].id, { file: "./styles/styles.css" }));
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
        document.body.classList.toggle('dark-pr');
      `
    });
    isActive = !isActive;
    changeColorButton.innerHTML = isActive ? "Turn off" : "Turn on";
  });
};
