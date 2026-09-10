let currentImage = 1;

let image = document.getElementById("memeImage");
let counter = document.getElementById("counter");

function showMeme() {
    image.setAttribute("src", "image" + currentImage + ".png");
    counter.innerHTML = currentImage;
}

function nextMeme() {
    
    currentImage++;

    if (currentImage > 12) {
        currentImage = 1;
    }

    showMeme();
}

function previousMeme() {
    
    currentImage--;

    if (currentImage < 1) {
        currentImage = 12;
    }

    showMeme();
}

showMeme();

