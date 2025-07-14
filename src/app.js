

let who = ['The dog', 'My grandma', 'The mailman', 'My kids'];
let action = ['ate', 'ripped', 'wet', 'broke'];
let what = ['my homework', 'my phone', 'my keys'];
let when = ['before the class', 'when I was sleeping', 'while I was showering', 'during my lunch', 'while I was praying'];

function randomfrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function genexcuse() {
    const excuse = `${randomfrom(who)} ${randomfrom(action)} ${randomfrom(what)} ${randomfrom(when)}.`;
    document.getElementById("excuse").textContent = excuse;
}


window.onload = function () {
    genexcuse(); 

   
    document.getElementById("new-excuse").addEventListener("click", genexcuse);
};


