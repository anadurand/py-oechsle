const Outfit = () => {

	const photoContainer = $('<section class="photo-container"></section>');
	const photoCont = $('<div class="photo-container__cont"></div>');
  // const divMsj  = $('<div class="cont_text"><h4>Bienvenida al App de Oechsle.<br>Oechsle es la Tienda por Departamento del Grupo Intercorp. Somos parte de un grupo empresarial comprometido con el desarrollo y bienestar de las familias Peruanas. </h4></div>')
  // const imgPhoto = $('<img src="http://cdn.modalia.es/images/stories/2015/febrero/hm-chaquetas-ss15/hm-chaquetas-ss15_6.jpg" class="img-responsive" alt="chaqueta">');
  // const photoFooter = $('<div class="photo-container__footer">'+
  //                         '<div class="img-circle"><i class="glyphicon glyphicon-camera"></i></div>'+
  //                       '</div>');
  photoCont.append(divMsj);
  photoContainer.append(photoCont);
  photoContainer.append(photoFooter);
	return photoContainer;
}
