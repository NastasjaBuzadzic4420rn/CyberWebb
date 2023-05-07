function overlayMenu() {
    var overlay = document.getElementById("overlay");
    if (overlay.style.width === "70%") {
        overlay.style.width = "0";
        document.getElementsByClassName("main-container")[0].classList.remove("darker-background");
    } else {
        overlay.style.width = "70%";
        document.getElementsByClassName("main-container")[0].classList.add("darker-background");
    }
}

function exitMenu(){
    var overlay = document.getElementById("overlay");
    if (overlay.style.width === "70%") {
        overlay.style.width = "0";
        document.getElementsByClassName("main-container")[0].classList.remove("darker-background");
    }
}

function openWebHosting() {
    window.location.href = "web-hosting.html";
}

function changeColorWeb(element) {
    element.style.backgroundColor = '#033D3F';

    document.getElementById("wh-big").style.color = "#E3E7D3"
    document.getElementById("wh-ul-big").style.color = "#CAD5C2"
    document.getElementById("wh-pr-big").style.color = "#B1C2B1"
}

function returnColorWeb(element) {
    element.style.backgroundColor = '#E3E7D3';

    document.getElementById("wh-big").style.color = "#033D3F"
    document.getElementById("wh-ul-big").style.color = "#18504B"
    document.getElementById("wh-pr-big").style.color = "#4B766B"
}

function openBusinessHosting() {
    window.location.href = "business-hosting.html";
}

function changeColorBusiness(element) {
    element.style.backgroundColor = '#033D3F';

    document.getElementById("bh-ul-big").style.color = "#CAD5C2"
    document.getElementById("bh-pr-big").style.color = "#B1C2B1"
}

function returnColorBusiness(element) {
    element.style.backgroundColor = '#E3E7D3';

    document.getElementById("bh-ul-big").style.color = "#18504B"
    document.getElementById("bh-pr-big").style.color = "#4B766B"
}

document.getElementById("ponudaButton").addEventListener("click", function(){
    window.location.href = "ponuda.html";
})

document.getElementById("naslovnaButton").addEventListener("click", function(){
    window.location.href = "naslovna.html";
})

document.getElementById("oNamaButton").addEventListener("click", function(){
    window.location.href = "o-nama.html";
})