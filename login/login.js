let namn = document.getElementById('f1');
let losen = document.getElementById('f2');

function localS(){
        localStorage.setItem('element1', namn.value);
        localStorage.setItem('element2', losen.value)
}

let logNamn = document.getElementById('a1');
let logLosen = document.getElementById('a2');

let element3 = localStorage.getItem('element1');
let element4 = localStorage.getItem('element2');

function kolla() {
    console.log(element3)
    if(logNamn.value === element3){
        document.body.style.backgroundColor = "#AA0000";
    } else {
        if(!logNamn.vlaue === a){

        }
    }
}
