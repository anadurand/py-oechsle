const Outfit = () => {

  const contOutfit = $('<section class="contOutfit"></section>');
  const divSelect  = $('<div id="img_fixed size_img"></div>');
  const imgSelect  = $('<img src="assets/img/blouse-c2.jpg" alt="foto_selecionada">');
  const divOptions_1 = $('<div id="img_variable_1 size_img_carousel" class="img-responsive"></div>');
  const secCarousel_1 = $("<div class='owl-carousel owl-theme'>"+
                      "<div class='item'><img src='assets/img/jean-1.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/jean-2.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/pants-b1.jpg'></div>"+
                      "<div class='tem'><img src='assets/img/pants-b2.jpg'></div>"+
                      "<div class='item'><img src='assets/img/pants-be1.jpg'></div>"+
                      "<div class='item'><img src='assets/img/pants-be2.jpg'></div>"+
                      "<div class='item'><img src='assets/img/pants-n1.jpg'></div>"+
                      "<div class='item'><img src='assets/img/pants-n2.jpg'></div>"+
                      "</div>");
  const divOptions_2 = $('<div id="img_variable_2 size_img_carousel"></div>')
  const secCarousel_2 = $("<div class='owl-carousel owl-theme'>"+
                      "<div class='item'><img src='assets/img/shoe-b1.jpg'></div>"+
                      "<div class='item'><img src='assets/img/shoe-b2.jpg'></div>"+
                      "<div class='item'><img src='assets/img/shoe-be1.jpg'></div>"+
                      "<div class='tem'><img src='assets/img/shoe-be2.jpg'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n1.jpg'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n2.jpg'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n3.jpg'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n4.jpg'></div>"+
                      "</div>");
  const footerOutfit =$('<div class="photo-container__footer">'+
                          '<div class="img-circle"><i class="glyphicon glyphicon-camera"></i></div>'+
                        '</div>');

  contOutfit.append(divSelect);
  divSelect.append(imgSelect) ;
  divOptions_1.append(secCarousel_1);
  divOptions_2.append(secCarousel_2);
  contOutfit.append(divSelect);
  contOutfit.append(divOptions_1);
  contOutfit.append(divOptions_2);
  contOutfit.append(footerOutfit);
  return contOutfit;
}
