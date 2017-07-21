"use strict";
var render = function (root) {
    root.empty();
    var section = $("<section class=\"components\"></section>");
    // section.append(Header());
    // section.append(Mixed());
    section.append(Photo());
    section.append(Footer());
    root.append(section);
    init();
};

var state = {
    cloth: null,
    clothSelected: null,
    photoTaken: null
};

$(function (_) {


    var root = $("#root");
    render(root);

});
"use strict";

var Mixed = function () {
	var clothContainer = $("<section class='cloth-container'></section>");

	var principalCloth = $("<div class='cloth-container__princNews'>Aquí va la ropa</div>");


	clothContainer.append(principalCloth);


	return clothContainer;
};
"use strict";

var Footer = function () {
	var footerContainer = $("<footer class='footer-container'></footer>");


	var icon = $("<div class='footer-container__icon'>Aquí va el footer</div>");



	footerContainer.append(icon);

	return footerContainer;
};
"use strict";

var Photo = function () {
	var photoContainer = $("<div class='fotoContainer'>Hola</div>");
	var videoHtml = $("<video id='video' width='150' height='150'></video>");
	var imgHtml = $("<img id='img' src='' width='150' height='150'>");
	var canvasHtml = $("<canvas id='canva' width='150' height='150'></canvas>");
	var buttonHtml = $("<button id='button'>Toma una foto</button>");
	var downloadHtml = $("<a href='#' class='button' id='btn-download' download='blouse-n2.jpg'>Download</a>");


	photoContainer.append(videoHtml);
	photoContainer.append(imgHtml);
	photoContainer.append(canvasHtml);
	photoContainer.append(videoHtml);
	photoContainer.append(buttonHtml);
	photoContainer.append(downloadHtml);


	return photoContainer;
};

// window.addEventListener('load');
function init() {
	var video = document.querySelector("#video");
	var canvas = document.querySelector("#canva");
	var button = document.querySelector("#button");
	var img = document.querySelector("#img");

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	if (navigator.getUserMedia) {
		navigator.getUserMedia({ video: true }, function (stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, function (error) {
			console.log(error);
		});
	} else alert("Tienes un navegador obsoleto");

	video.addEventListener("loadedmetadata", function () {
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
	}, false);

	button.addEventListener("click", function () {
		canvas.getContext("2d").drawImage(video, 0, 0);
		var imgData = canvas.toDataURL("image/png");
		img.setAttribute("src", imgData);
		state.photoTaken = imgData;
		console.log(state.photoTaken);
		canvas.style.display = "none";
		video.style.display = "none";
	});

	var btn = document.getElementById("btn-download");
	btn.addEventListener("click", function (e) {
		var dataURL = canvas.toDataURL("image/png");
		btn.href = dataURL;
	});






}
"use strict";

var Header = function () {
	var headerContainer = $("<header class='header-container'></header>");
	var search = $("<div class='header-container__search'>Hola soy el header</div>");


	headerContainer.append(search);

	return headerContainer;
};