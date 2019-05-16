console.log("See ya, Space Cowboy");

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var blockOne = document.getElementById('one');
var blockTwo = document.getElementById('two');
var blockThree = document.getElementById('three');

first.addEventListener('click', switchFirst);
second.addEventListener('click', switchSecond);
third.addEventListener('click', switchThird);

function switchFirst() {
    getComputedStyle(blockOne).display == "none" ? blockOne.style.display = "block" : blockOne.style.display = "none";
}

function switchSecond() {
    getComputedStyle(blockTwo).display == "none" ? blockTwo.style.display = "block" : blockTwo.style.display = "none";
}

function switchThird() {
    getComputedStyle(blockThree).display == "none" ? blockThree.style.display = "block" : blockThree.style.display = "none";
}
