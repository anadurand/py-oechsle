const welcome = (update) => {

	const photoContainer = $('<section class="photo-container"></section>');
	const photoCont = $('<div class="photo-container__cont"></div>');
  const divMsj  = $('<div class="cont_text"><h4>Bienvenida al App de Oechsle.<br>Oechsle es la Tienda por Departamento del Grupo Intercorp. Somos parte de un grupo empresarial comprometido con el desarrollo y bienestar de las familias Peruanas. </h4></div>')

	const videoHtml = $("<video id='video' width='150' height='150'></video>");
	    const imgHtml = $("<img id='img' src='' width='150' height='150'>");
	    const canvasHtml = $("<canvas id='canva' width='150' height='150'></canvas>");
	    const buttonHtml = $("<div id='button' class='img-circle'><i id='camara' class='glyphicon glyphicon-camera'></i></div>");
	    //const downloadHtml = $("<a href='#' class='button' id='btn-download' download='blouse-n2.jpg'>Download</a>");


	const imgPhoto = $('<img src="http://cdn.modalia.es/images/stories/2015/febrero/hm-chaquetas-ss15/hm-chaquetas-ss15_6.jpg" class="img-responsive" alt="chaqueta">');
  const photoFooter = $('<div class="photo-container__footer"></div>');
  const ok = $('<div id="seleccionar"  class="img-circle"><i  class="glyphicon glyphicon-ok"></i></div>');

  photoCont.append(divMsj);
  photoContainer.append(photoCont);


	photoContainer.append(videoHtml);
	    photoContainer.append(imgHtml);
	    photoContainer.append(canvasHtml);
	    photoContainer.append(videoHtml);

			photoFooter.append(ok);
			photoFooter.append(buttonHtml);
  photoContainer.append(photoFooter);

	ok.on('click', function(){
		const prenda = state.prendaRandon;

		$.each(state.cloth.clothes, function( i, value ) {
			if (value.image == prenda) {
				state.page =  1;
				state.clothSelected = value;
				 }
			});
			update();
		});
	return photoContainer;
}

function init(){
		 var video = document.querySelector('#video');
		 var canvas = document.querySelector('#canva');
		 var button = document.querySelector('#button');
		 var img = document.querySelector('#img');
		 canvas.style.display = 'none';
		 img.style.display = 'none';
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

				 img.style.display = 'block';
				 video.style.display = 'none';
		 });
		 // var btn = document.getElementById('btn-download');
		 // btn.addEventListener('click', function (e) {
		 // var dataURL = canvas.toDataURL('image/png');
		 // btn.href = dataURL;

		 // });

}
