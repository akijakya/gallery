'use strict';

let images = [
    {src: "static\\img\\IMG_20191015_173524.jpg", alt: "Egerbakta", description: "A beautiful sunset from the hill"},
    {src: "static\\img\\IMG_20191016_084110.jpg", alt: "Egerbakta", description: "The view of the village from the hill in the morning"},
    {src: "static\\img\\IMG_20191016_095716.jpg", alt: "Eger", description: "The castle of Eger on the inside"},
    {src: "static\\img\\IMG_20191016_141747.jpg", alt: "Szalajka-völgy", description: "The field which is the end station of the little engine from Szilvásvárad"},
    {src: "static\\img\\IMG_20191016_142132.jpg", alt: "Szalajka-völgy", description: "A beautiful lake from which the water streams in the direction of the road back to Szilvásvárad"},
    {src: "static\\img\\IMG_20191016_143841.jpg", alt: "Szalajka-völgy", description: "The so-called \"Fátyol-vízesés\""},
    {src: "static\\img\\IMG_20191016_144513.jpg", alt: "Szalajka-völgy", description: "The forest roads are beautiful in the autumn"},
    {src: "static\\img\\IMG_20191016_145017.jpg", alt: "Szalajka-völgy", description: "The source of a stream"},
    {src: "static\\img\\IMG_20191017_111420.jpg", alt: "Sirok", description: "The entrance of the Sirok castle"},
    {src: "static\\img\\IMG_20191017_112516.jpg", alt: "Sirok", description: "The view on the village of Sirok from the castle"}
]

let pictureList = document.getElementById("picture-list").getElementsByTagName("ul")[0];
console.log(pictureList);

for (let i = 0; i < images.length; i++) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", images[i].src);
    newImg.setAttribute("alt", images[i].alt);
    newImg.setAttribute("description", images[i].description);
    let newLi = document.createElement("li");
    newLi.appendChild(newImg);
    pictureList.appendChild(newLi);
}

let pictureBox = document.getElementsByClassName("picture-box")[0];
let newPicture = document.createElement("img");
newPicture.setAttribute("src", images[0].src);
newPicture.setAttribute("alt", images[0].alt);
newPicture.setAttribute("description", images[0].description);
newPicture.setAttribute("class", "picture");
pictureBox.appendChild(newPicture);

let textBox = document.createElement("div");
textBox.setAttribute("class", "text-box");
let currentPicture = document.getElementsByClassName("picture-box")[0].getElementsByTagName("img")[0];
let newHeader = document.createElement("h1");
newHeader.textContent = currentPicture.alt;
let newParagraph = document.createElement("p");
newParagraph.textContent = currentPicture.description;
console.log(currentPicture);
textBox.appendChild(newHeader);
textBox.appendChild(newParagraph);
pictureBox.appendChild(textBox);