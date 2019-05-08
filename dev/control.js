console.log("See ya, Space Cowboy");

var stretched = false;
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var firstFlag = false;
var secondFlag = false;
var thirdFlag = false;

function updateFirst() {
    first.style.width = "90%";
    second.style.width = "2.5%";
    third.style.width = "2.5%";
    second.querySelector("h2").innerText = "";
    second.querySelector("p").innerText = "";
    third.querySelector("h2").innerText = "";
    third.querySelector("p").innerText = "";
    // let listNode = document.createElement("UL");
    // let liNode = document.createElement("LI");
    // listNode.appendChild(liNode);
}

function updateSecond() {
    second.style.width = "90%";
    first.style.width = "2.5%";
    third.style.width = "2.5%";
    first.querySelector("h2").innerText = "";
    first.querySelector("p").innerText = "";
    third.querySelector("h2").innerText = "";
    third.querySelector("p").innerText = "";
}

function updateThird() {
    third.style.width = "90%";
    first.style.width = "2.5%";
    second.style.width = "2.5%";
    first.querySelector("h2").innerText = "";
    first.querySelector("p").innerText = "";
    second.querySelector("h2").innerText = "";
    second.querySelector("p").innerText = "";
}

function check() { // Checks if a panel is stretched
    stretched = !stretched;
    return stretched;
}

// If a click happens, switch the boolean value, and return it
function firstClick() {
    firstFlag = !firstFlag;
    secondClick;
    thirdClick;
    console.log("First Flag is " + firstFlag);
    return firstFlag;
}

function secondClick() {
    secondFlag = !secondFlag;
    firstClick;
    thirdClick;
    console.log("Second Flag is " + secondFlag);
    return secondFlag;
}

function thirdClick() {
    thirdFlag = !thirdFlag;
    secondClick;
    firstClick;
    console.log("Third Flag is " + thirdFlag);
    return thirdFlag;
}
