	const Photo = () => {
	const photoContainer = $("<div class='fotoContainer'>Hola</div>");
	const videoHtml = $("<video id='video'></video>");
	const imgHtml = $("<img id='img' src=''>");
	const canvasHtml = $("<canvas id='canva'></canvas>");
	const buttonHtml = $("<button id='button'>Toma una foto</button>");
	const fotooo= $('<div id="Selector"><input type="file" name="foto" id="foto" class="SubirFoto" accept="image/*" capture="camera" /><label for="foto"><figure><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> <span>Envía una foto...</span></label></div>');

   	photoContainer.append(videoHtml);
	photoContainer.append(imgHtml);
	photoContainer.append(canvasHtml);
	photoContainer.append(videoHtml);
	photoContainer.append(buttonHtml);
	photoContainer.append(fotooo);

	return photoContainer;	


// 	window.addEventListener('load', init);
// 	function init(){

// 		var video = document.querySelector('#video');
// 		var canvas = document.querySelector('#canva');
// 		var button = document.querySelector('#button');
// 		var img = document.querySelector('#img');

// 		navigator.getUserMedia = (navigator.getUserMedia || 
// 			navigator.webkitGetUserMedia ||
// 			navigator.mozGetUserMedia ||
// 			navigator.msGetUserMedia);
// 		if(navigator.getUserMedia){
// 			navigator.getUserMedia({video:true}, function(stream){
// 				video.src= window.URL.createObjectURL(stream);
// 				video.play();
// 			}, function(error){console.log(error);})
// 		} else alert("Tienes un navegador obsoleto");	

// 		video.addEventListener('loadedmetadata', function(){
// 			console.log(canvas.width);
// 			canvas.width = video.videoWidth;
// 			canvas.height = video.videoHeight;		
// 		}, false);

// 		button.addEventListener('click', function(){
// 			canvas.getContext('2d').drawImage(video,0,0);
// 			var imgData = canvas.toDataURL('image/png');
// 			img.setAttribute('src', imgData);
// 		}) 

	
		
// }

// }	
	
// $(document).ready(function(){


// });
 	

}


