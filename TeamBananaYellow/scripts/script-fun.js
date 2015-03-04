/**
 * Created by user on 4.3.2015 г..
 */
var messages = [
    "Има два типа хора...",
    "Когато получа изпитните задачи",
    "Николай Банкин води лекции",
    "Защо джаварите носят очила",
    "Стил Чък Норис",
    "Еволюция на стила на кодене :Р",
    "Мислите ли?",
    "Ако все още някой не е схванал...",
    "Клас = Нинджа :)",
    "Да, това съм аз, 1 ден преди презентацията :)"
];

var globalIndex = 0;

function changeImage() {
    globalIndex = Math.floor(Math.random() * messages.length);
    var message = "<p>" + messages[globalIndex] + "</p><img src=\"images/fun/gallery/" +
        globalIndex + ".jpg\"/>";
    document.getElementById("gallery").innerHTML = message;
}