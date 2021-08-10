// Scroll på specified section of the page



// Products
let productsBtnsArray = [];

const productsBtn1 = document.getElementById("productsBtn1");
const productsBtn2 = document.getElementById("productsBtn2");
const productsBtn3 = document.getElementById("productsBtn3");

productsBtnsArray.push(productsBtn1, productsBtn2, productsBtn3);

for (let i = 0; i < productsBtnsArray.length; i++) {
    productsBtnsArray[i].addEventListener("click", bindClickProducts(i));
}

function bindClickProducts(i) {
    return function() {
        const productsSection = document.getElementById("productsSection");
        productsSection.scrollIntoView();
    }
}



// Process
let processBtnsArray = [];

const processBtn1 = document.getElementById("processBtn1");
const processBtn2 = document.getElementById("processBtn2");
const processBtn3 = document.getElementById("processBtn3");

processBtnsArray.push(processBtn1, processBtn2, processBtn3);

for (let i = 0; i < processBtnsArray.length; i++) {
    processBtnsArray[i].addEventListener("click", bindClickProcess(i));
}

function bindClickProcess(i) {
    return function() {
        const processSection = document.getElementById("processSection");
        processSection.scrollIntoView();
    }
}



// About Us
let aboutUsBtnsArray = [];

const aboutUsBtn1 = document.getElementById("aboutUsBtn1");
const aboutUsBtn2 = document.getElementById("aboutUsBtn2");
const aboutUsBtn3 = document.getElementById("aboutUsBtn3");

aboutUsBtnsArray.push(aboutUsBtn1, aboutUsBtn2, aboutUsBtn3);

for (let i = 0; i < aboutUsBtnsArray.length; i++) {
    aboutUsBtnsArray[i].addEventListener("click", bindClickAboutUs(i));
}

function bindClickAboutUs(i) {
    return function() {
        const aboutUsSection = document.getElementById("aboutUsSection");
        aboutUsSection.scrollIntoView();
    }
}