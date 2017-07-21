	const Photo = () => {
	const photoContainer = $("<div class='fotoContainer'>Hola</div>");
	const videoHtml = $("<video id='video'></video>");
	const imgHtml = $("<img id='img' src=''>");
	const canvasHtml = $("<canvas id='canva'></canvas>");
	const buttonHtml = $("<button id='button'>Toma una foto</button>");

	photoContainer.append(videoHtml);
	photoContainer.append(imgHtml);
	photoContainer.append(canvasHtml);
	photoContainer.append(videoHtml);
	photoContainer.append(buttonHtml);

	return photoContainer;	


	window.addEventListener('load', init);
	function init(){

		var video = document.querySelector('#video');
		var canvas = document.querySelector('#canva');
		var button = document.querySelector('#button');
		var img = document.querySelector('#img');

		navigator.getUserMedia = (navigator.getUserMedia || 
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia);
		if(navigator.getUserMedia){
			navigator.getUserMedia({video:true}, function(stream){
				video.src= window.URL.createObjectURL(stream);
				video.play();
			}, function(error){console.log(error);})
		} else alert("Tienes un navegador obsoleto");	

		video.addEventListener('loadedmetadata', function(){
			console.log(canvas.width);
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;		
		}, false);

		button.addEventListener('click', function(){
			canvas.getContext('2d').drawImage(video,0,0);
			var imgData = canvas.toDataURL('image/png');
			img.setAttribute('src', imgData);
		}) 

	
		
}

}	
	
// $(document).ready(function(){


// });
 	

// }


