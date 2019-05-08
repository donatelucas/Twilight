console.log("See ya, Space Cowboy");

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var firstExtended = document.getElementById('first-extended');
var innerContainer = document.getElementsByClassName('inner-container')[0];
var stretched = false;
var mainSize = "90%";
var secondarySize = "2.5%";

innerContainer.addEventListener('click', stretch);
first.addEventListener('click', firstClick);
second.addEventListener('click', secondClick);
third.addEventListener('click', thirdClick);

function stretch() {
    stretched = !stretched;
    console.log(stretched);
    return stretched;
}

function updateFirst() {
    first.style.width = mainSize;
    second.style.width = secondarySize;
    third.style.width = secondarySize;
    hideInitialContent();
    firstNewContent();
}

function updateSecond() {
    second.style.width = mainSize;
    first.style.width = secondarySize;
    third.style.width = secondarySize;
    hideInitialContent();
}

function updateThird() {
    third.style.width = mainSize;
    first.style.width = secondarySize;
    second.style.width = secondarySize;
    hideInitialContent();
}

// If a click happens, switch the boolean value, and return it
function firstClick() {
    updateFirst();
    secondClick;
    thirdClick;
}

function secondClick() {
    updateSecond();
    firstClick;
    thirdClick;
}

function thirdClick() {
    updateThird();
    secondClick;
    firstClick;
}

function hideInitialContent() {
    first.querySelector("h2").innerText = "";
    first.querySelector("p").innerText = "";
    second.querySelector("h2").innerText = "";
    second.querySelector("p").innerText = "";
    third.querySelector("h2").innerText = "";
    third.querySelector("p").innerText = "";
}

function firstNewContent() {
    let block = document.querySelector("#first-extended");
    if (stretched) {
        if (block.style.display === "none") {
            block.style.display = "block";
        } else {
            block.style.display = "none";
        }
    }
}
