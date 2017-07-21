"use strict";
var render = function (root) {
    root.empty();
    var section = $("<section class=\"components\"></section>");
    section.append(Header());
    section.append(Mixed());
    section.append(Photo());
    section.append(Footer());
    root.append(section);
};
// const state = {
//     cloth: null,
//     clothSelected : null
// };

$(function (_) {
    // $.get('',(json) => {
    //     if(!json){
    //       return alert("error");
    //     }
    // state.cloth = json;
    // console.log(state.cloth);
    var root = $("#root");
    render(root);
    // });

    // var socket = io();
    // $('form').submit(function(){
    //   socket.emit('chat message', $('#m').val());
    //   $('#m').val('');
    //   return false;
    // });
    // socket.on('chat message', function(msg){
    //   $('#messages').append($('<li>').text(msg));
    //   window.scrollTo(0, document.body.scrollHeight);
    // });
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
	var videoHtml = $("<video id='video'></video>");
	var imgHtml = $("<img id='img' src=''>");
	var canvasHtml = $("<canvas id='canva'></canvas>");
	var buttonHtml = $("<button id='button'>Toma una foto</button>");

	photoContainer.append(videoHtml);
	photoContainer.append(imgHtml);
	photoContainer.append(canvasHtml);
	photoContainer.append(videoHtml);
	photoContainer.append(buttonHtml);

	return photoContainer;
};

// $(document).ready(function(){


// });


// }

window.addEventListener("load", init);
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
		console.log(canvas.width);
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
	}, false);

	button.addEventListener("click", function () {
		canvas.getContext("2d").drawImage(video, 0, 0);
		var imgData = canvas.toDataURL("image/png");
		img.setAttribute("src", imgData);
	});


}
"use strict";

var Header = function () {
	var headerContainer = $("<header class='header-container'></header>");
	var search = $("<div class='header-container__search'>Hola soy el header</div>");


	headerContainer.append(search);

	return headerContainer;
};