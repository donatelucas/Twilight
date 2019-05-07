console.log("See ya, Space Cowboy");

var first = document.getElementsByClassName('first')[0];
var second = document.getElementsByClassName('second')[0];
var third = document.getElementsByClassName('third')[0];
var stretched = false;

function panel(){
    let panels = document.getElementsByClassName('panel');
    check();
}

function check() { // Checks if a panel is stretched
    stretched = !stretched;
}

document.getElementById('first').addEventListener('click', panel);
document.getElementById('second').addEventListener('click', panel);
document.getElementById('third').addEventListener('click', panel);
