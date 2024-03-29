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

function addNewPicture (index, classToSet) {
    let newPicture = document.createElement("img");

    newPicture.setAttribute("src", images[index].src);
    newPicture.setAttribute("class", classToSet);
    newPicture.setAttribute("id", index);

    if (images[index].needRotation === true) {
        newPicture.setAttribute("style", "transform: rotate(90deg)");
    }

    return newPicture;
}

function showBigPicture (index) {
    let currentPicture = document.getElementsByClassName("clicked")[0];
    currentPicture.setAttribute("class", "notclicked");
    let clickedPicture = document.getElementById(index);
    clickedPicture.setAttribute("class", "clicked");

    let pictureBox = document.getElementsByClassName("picture-box")[0];

    if (pictureBox.getElementsByTagName("img")[0] !== undefined) {
        pictureBox.removeChild(pictureBox.getElementsByTagName("img")[0]);
        pictureBox.removeChild(pictureBox.getElementsByClassName("text-box")[0]);
    }

    pictureBox.appendChild(addNewPicture(index, "picture"));

    let textBox = document.createElement("div");
    textBox.setAttribute("class", "text-box");
    
    let newHeader = document.createElement("h1");
    newHeader.textContent = images[index].alt;
    let newParagraph = document.createElement("p");
    newParagraph.textContent = images[index].description;

    textBox.appendChild(newHeader);
    textBox.appendChild(newParagraph);
    pictureBox.appendChild(textBox);
}

function pageLoad () {
    // adding thumbnails with onlcick event
    let thumbnailList = document.getElementById("picture-list").getElementsByTagName("ul")[0];

    for (let i = 0; i < images.length; i++) {
        let thumbnail;
        if (i === 0) {
            thumbnail = addNewPicture(i, "clicked");
        } else {
            thumbnail = addNewPicture(i, "notclicked");
        }
    
        let newLi = document.createElement("li");
        newLi.appendChild(thumbnail);
        thumbnailList.appendChild(newLi);
    
        thumbnail.onclick = function () {
            showBigPicture(i);
        }
    }

    //adding the big picture
    showBigPicture(0);
}

let leftArrow = document.getElementById("arrow-left");
leftArrow.onclick = function() {
    let currentPicture = document.getElementsByClassName("clicked")[0];
	if (parseInt(currentPicture.id) > 0) {
        showBigPicture(parseInt(currentPicture.id) - 1);
	} 
}

let rightArrow = document.getElementById("arrow-right");
rightArrow.onclick = function() {
    let currentPicture = document.getElementsByClassName("clicked")[0];
	if (parseInt(currentPicture.id) < images.length - 1) { 
        showBigPicture(parseInt(currentPicture.id) + 1);
	} 
}

window.onload = function () {
    pageLoad();
}

// let currentPicture = document.getElementsByClassName("picture-box")[0].getElementsByTagName("img")[0];
// let currentIndex = 0;

// function showPicture (x) {
//     currentIndex = x;

//     let pictureBox = document.getElementsByClassName("picture-box")[0];

//     if (currentPicture !== undefined) {
//         pictureBox.removeChild(pictureBox.getElementsByTagName("img")[0]);
//         pictureBox.removeChild(pictureBox.getElementsByClassName("text-box")[0]);
//     }
    
//     let newPicture = document.createElement("img");
//     newPicture.setAttribute("src", images[x].src);
//     newPicture.setAttribute("alt", images[x].alt);
//     newPicture.setAttribute("data-desc", images[x].description);
//     newPicture.setAttribute("class", "picture");
//     newPicture.setAttribute("data-index", x);

//     if (images[x].needRotation === true) {
//         newPicture.setAttribute("style", "transform: rotate(90deg)");
//     }

//     pictureBox.appendChild(newPicture);
//     currentPicture = newPicture;

//     let textBox = document.createElement("div");
//     textBox.setAttribute("class", "text-box");
    
//     let newHeader = document.createElement("h1");
//     newHeader.textContent = images[x].alt;
//     let newParagraph = document.createElement("p");
//     newParagraph.textContent = images[x].description;

//     textBox.appendChild(newHeader);
//     textBox.appendChild(newParagraph);
//     pictureBox.appendChild(textBox);
// }

// showPicture(currentIndex);

// let thumbnailList = document.getElementById("picture-list").getElementsByTagName("ul")[0];
// let clickedThumbnail;

// for (let i = 0; i < images.length; i++) {
//     let thumbnail = document.createElement("img");
//     thumbnail.setAttribute("src", images[i].src);
//     thumbnail.setAttribute ("class", "notclicked");
//     thumbnail.setAttribute ("id", i);

//     if (images[i].needRotation === true) {
//         thumbnail.setAttribute("style", "transform: rotate(90deg)");
//     }

//     if (i === 0) {
//         clickedThumbnail = thumbnail;
//         clickedThumbnail.setAttribute ("class", "clicked");
//     }

//     let newLi = document.createElement("li");
//     newLi.appendChild(thumbnail);
    
//     thumbnailList.appendChild(newLi);

//     thumbnail.onclick = function() {
//         clickedThumbnail.setAttribute ("class", "notclicked");
//         clickedThumbnail = thumbnail;
//         clickedThumbnail.setAttribute ("class", "clicked");
//         showPicture(i);
//     }
// }

// let leftArrow = document.getElementById("arrow-left");
// leftArrow.onclick = function() {
// 	if (currentPicture.dataset.index > 0) {
//         let thumbnailIndex = parseInt(clickedThumbnail.id);
//         clickedThumbnail.setAttribute ("class", "notclicked");
//         clickedThumbnail = thumbnailList.getElementsByTagName("li")[thumbnailIndex - 1].getElementsByTagName("img")[0];
//         clickedThumbnail.setAttribute ("class", "clicked");
// 		showPicture(currentIndex - 1);
// 	} 
// }

// let rightArrow = document.getElementById("arrow-right");
// rightArrow.onclick = function() {
// 	if (currentPicture.dataset.index < images.length - 1) { 
//         let thumbnailIndex = parseInt(clickedThumbnail.id);
//         clickedThumbnail.setAttribute ("class", "notclicked");
//         clickedThumbnail = thumbnailList.getElementsByTagName("li")[thumbnailIndex + 1].getElementsByTagName("img")[0];
//         clickedThumbnail.setAttribute ("class", "clicked");
//         showPicture(currentIndex + 1);
// 	} 
// }