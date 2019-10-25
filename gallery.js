'use strict';

let images = [
    {src: "static\\img\\IMG_20191015_173524.jpg", alt: "Egerbakta", description: "A beautiful sunset from the hill"},
    {src: "static\\img\\IMG_20191016_084110.jpg", alt: "Egerbakta", description: "The view of the village from the hill in the morning"},
    {src: "static\\img\\IMG_20191016_095716.jpg", alt: "Eger", description: "The castle of Eger on the inside"},
    {src: "static\\img\\IMG_20191016_141747.jpg", alt: "Szalajka-völgy", description: "The field which is the end station of the little engine from Szilvásvárad"},
    {src: "static\\img\\IMG_20191016_142132.jpg", alt: "Szalajka-völgy", description: "A beautiful lake from which the water streams in the direction of the road back to Szilvásvárad"},
    {src: "static\\img\\IMG_20191016_143841.jpg", alt: "Szalajka-völgy", description: "The so-called \"Fátyol-vízesés\"", needRotation: true},
    {src: "static\\img\\IMG_20191016_144513.jpg", alt: "Szalajka-völgy", description: "The forest roads are beautiful in the autumn"},
    {src: "static\\img\\IMG_20191016_145017.jpg", alt: "Szalajka-völgy", description: "The source of a stream", needRotation: true},
    {src: "static\\img\\IMG_20191017_111420.jpg", alt: "Sirok", description: "The entrance of the Sirok castle", needRotation: true},
    {src: "static\\img\\IMG_20191017_112516.jpg", alt: "Sirok", description: "The view on the village of Sirok from the castle"}
]

let pictureList = document.getElementById("picture-list").getElementsByTagName("ul")[0];

for (let i = 0; i < images.length; i++) {
    let thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", images[i].src);
    thumbnail.setAttribute("alt", images[i].alt);
    thumbnail.setAttribute("data-desc", images[i].description);

    if (images[i].needRotation === true) {
        thumbnail.setAttribute("style", "transform: rotate(90deg)");
    }

    let newLi = document.createElement("li");
    newLi.setAttribute("id", i);

    newLi.appendChild(thumbnail);
    pictureList.appendChild(newLi);
}

let currentPicture = document.getElementsByClassName("picture-box")[0].getElementsByTagName("img")[0];
let currentIndex = 0;

function showPicture (x) {
    currentIndex = x;

    let pictureBox = document.getElementsByClassName("picture-box")[0];

    if (currentPicture !== undefined) {
        pictureBox.removeChild(pictureBox.getElementsByTagName("img")[0]);
        pictureBox.removeChild(pictureBox.getElementsByClassName("text-box")[0]);
    }
    
    let newPicture = document.createElement("img");
    newPicture.setAttribute("src", images[x].src);
    newPicture.setAttribute("alt", images[x].alt);
    newPicture.setAttribute("data-desc", images[x].description);
    newPicture.setAttribute("class", "picture");
    newPicture.setAttribute("data-index", x);

    if (images[x].needRotation === true) {
        newPicture.setAttribute("style", "transform: rotate(90deg)");
    }

    pictureBox.appendChild(newPicture);
    currentPicture = newPicture;

    let textBox = document.createElement("div");
    textBox.setAttribute("class", "text-box");
    
    let newHeader = document.createElement("h1");
    newHeader.textContent = images[x].alt;
    let newParagraph = document.createElement("p");
    newParagraph.textContent = images[x].description;

    textBox.appendChild(newHeader);
    textBox.appendChild(newParagraph);
    pictureBox.appendChild(textBox);
}

showPicture(currentIndex);

let leftArrow = document.getElementById("arrow-left");

leftArrow.onclick = function() {
	if (currentPicture.dataset.index > 0) {
		showPicture(currentIndex - 1);
	} 
}

let rightArrow = document.getElementById("arrow-right");

rightArrow.onclick = function() {
	if (currentPicture.dataset.index < images.length - 1) { 
        showPicture(currentIndex + 1);
	} 
}