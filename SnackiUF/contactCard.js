let btns = [];
const btn1 = document.getElementById("contactBtn1");
const btn2 = document.getElementById("contactBtn2");
const btn3 = document.getElementById("contactBtn3");
btns.push(btn1, btn2, btn3);

let ccs = [];
const cc1 = document.getElementById("contactCard1");
const cc2 = document.getElementById("contactCard2");
const cc3 = document.getElementById("contactCard3");
ccs.push(cc1, cc2, cc3);

let cbs = [];
const cb1 = document.getElementById("contactCloseBtn1");
const cb2 = document.getElementById("contactCloseBtn2");
const cb3 = document.getElementById("contactCloseBtn3");
cbs.push(cb1, cb2, cb3);

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", bindClick(i));
    cbs[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
    return function() {
        if (i == 0) {
            if (ccs[0].className == 'contactCard1 displayFalse') {
                ccs[0].className = 'contactCard1 displayTrue';
            } else {
                ccs[0].className = 'contactCard1 displayFalse';
            }
        } else if (i == 1) {
            if (ccs[1].className == 'contactCard2 displayFalse') {
                ccs[1].className = 'contactCard2 displayTrue';
            } else {
                ccs[1].className = 'contactCard2 displayFalse';
            }
        } else if (i == 2) {
            if (ccs[2].className == 'contactCard3 displayFalse') {
                ccs[2].className = 'contactCard3 displayTrue';
            } else {
                ccs[2].className = 'contactCard3 displayFalse';
            }
        }
    }
}
