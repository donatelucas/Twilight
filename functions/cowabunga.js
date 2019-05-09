console.log("See ya, Space Cowboy");

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var firstExtended = document.getElementById('first-extended');
var innerContainer = document.getElementsByClassName('inner-container')[0];
var stretched = false;
var mainSize = "90%";
var secondarySize = "2.5%";
var active = null;

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
}

function updateSecond() {
    second.style.width = mainSize;
    first.style.width = secondarySize;
    third.style.width = secondarySize;
}

function updateThird() {
    third.style.width = mainSize;
    first.style.width = secondarySize;
    second.style.width = secondarySize;
}

function firstClick() {
    active = 0;
    hideShowContent();
    secondClick;
    thirdClick;
}

function secondClick() {
    active = 1;
    hideShowContent();
    firstClick;
    thirdClick;
}

function thirdClick() {
    active = 2;
    hideShowContent();
    secondClick;
    firstClick;
}

function hideInitialContent() {
    setTimeout(function() {
        if (active !== null)
        {
            first.querySelector("h2").innerText = "";
            first.querySelector("p").innerText = "";
            second.querySelector("h2").innerText = "";
            second.querySelector("p").innerText = "";
            third.querySelector("h2").innerText = "";
            third.querySelector("p").innerText = "";
        }
    }, 350);
}

function hideShowContent(){
    hideInitialContent();
    setTimeout(function() {
        switch(active) {
        case 0:
            updateFirst();
            document.querySelector("#second-extended").style.display = "none";
            document.querySelector("#third-extended").style.display = "none";
            document.querySelector("#first-extended").style.display = "block";
            break;
        case 1:
            updateSecond();
            document.querySelector("#first-extended").style.display = "none";
            document.querySelector("#third-extended").style.display = "none";
            document.querySelector("#second-extended").style.display = "block";
            break;
        case 2:
            updateThird();
            document.querySelector("#first-extended").style.display = "none";
            document.querySelector("#second-extended").style.display = "none";
            document.querySelector("#third-extended").style.display = "block";
            break;
        }
    }, 500);
}
