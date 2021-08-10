let imgs = [];
img1 = document.getElementById("alexanderImg");
img2 = document.getElementById("jonnaImg");
img3 = document.getElementById("andreasImg");
img4 = document.getElementById("alexImg");
img5 = document.getElementById("fannyImg");
img6 = document.getElementById("joelImg");
img7 = document.getElementById("vilgotImg");
imgs.push(img1, img2, img3, img4, img5, img6, img7);

let txts = [];
txt1 = document.getElementById("alexanderText");
txt2 = document.getElementById("jonnaText");
txt3 = document.getElementById("andreasText");
txt4 = document.getElementById("alexText");
txt5 = document.getElementById("fannyText");
txt6 = document.getElementById("joelText");
txt7 = document.getElementById("vilgotText");
txts.push(txt1, txt2, txt3, txt4, txt5, txt6, txt7);

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", bindClick(i));
    txts[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
    return function() {
        // i ger index
        if (imgs[i].className == "profileImg cardShadow displayTrue") {
            imgs[i].className = "profileImg cardShadow displayFalse";
            txts[i].className = "textbox cardShadow displayTrue";
            txts[i].style.transition = `all 0.3s ease`;
        }  else {
            imgs[i].className = "profileImg cardShadow displayTrue";
            txts[i].className = "textbox cardShadow displayFalse";
            txts[i].style.transition = `all 0.3s ease`;
        }
    }
}