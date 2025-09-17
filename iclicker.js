// ==UserScript==
// @name        techfun's iclicker script
// @namespace   techfun's iclicker script
// @match       https://student.iclicker.com/*
// @grant       none
// @version     1.0
// @author      techfun
// @description auto join and answer iclicker questions
// ==/UserScript==

const SEND_ANSWER_DELAY = 10500
const JOIN_DELAY = 13500
const MCQ_CHOICES = ["a", "b"]
var clicked = false;

console.log("techfun's iclicker script is running...")

const sendRandomAnswer = () => {
    console.log("Choosing answer")
    setTimeout(() => {
        const randChoice = MCQ_CHOICES[Math.floor(Math.random() * MCQ_CHOICES.length)]
        document.getElementById(`multiple-choice-${randChoice}`).click()
    }, SEND_ANSWER_DELAY)
}

const clickIfExists = (elementId) => {
    var element = document.getElementById(elementId);
    if (element) {
        if (!clicked) {sendRandomAnswer()}
        clicked = true;
    } else {
        clicked = false;
    }
};

const clickIfExists2 = (elementId) => {
    var element = document.getElementById(elementId);
    if (element && !element.disabled) {
        console.log("Joining class")
        element.click()
    }
};

const elementIdToCheck = 'multiple-choice-a';

const checkInterval = setInterval(() => {
    clickIfExists(elementIdToCheck);
}, 500);

const checkInterval2 = setInterval(() => {
    clickIfExists2('btnJoin');
}, JOIN_DELAY);