	const Photo = () => {
	const photoContainer = $("<div class='fotoContainer'>Hola</div>");
	const videoHtml = $("<video id='video' width='150' height='150'></video>");
	const imgHtml = $("<img id='img' src='' width='150' height='150'>");
	const canvasHtml = $("<canvas id='canva' width='150' height='150'></canvas>");
	const buttonHtml = $("<button id='button'>Toma una foto</button>");
	const downloadHtml = $("<a href='#' class='button' id='btn-download' download='blouse-n2.jpg'>Download</a>");
	

   	photoContainer.append(videoHtml);
	photoContainer.append(imgHtml);
	photoContainer.append(canvasHtml);
	photoContainer.append(videoHtml);
	photoContainer.append(buttonHtml);
	photoContainer.append(downloadHtml);
	

	return photoContainer;	

}

	// window.addEventListener('load');
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

			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;		
		}, false);

		button.addEventListener('click', function(){
			canvas.getContext('2d').drawImage(video,0,0);
			var imgData = canvas.toDataURL('image/png');
			img.setAttribute('src', imgData);
			state.photoTaken = imgData;
			console.log(state.photoTaken);
			canvas.style.display = 'none';
			video.style.display = 'none';

		});

		var btn = document.getElementById('btn-download');
		btn.addEventListener('click', function (e) {
		var dataURL = canvas.toDataURL('image/png');
		btn.href = dataURL;
	 
		});





	
		
}
