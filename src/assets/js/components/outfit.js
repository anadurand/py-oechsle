const Outfit = () => {

  const contOutfit = $('<section class="cont_outfit"></section>');
  const controw    =$('<div class="row"></div>');
  const divSelect  = $('<div id="img_fixed" class="col-xs-8 col-xs-offset-2"></div>');
  const imgSelect  = $('<img src="assets/img/blouse-c2.jpg"  class="img-responsive" alt="foto_selecionada">');
  const divOptions_1 = $('<div id="img_variable_1" class="col-xs-8 col-xs-offset-2"></div>');
  const secCarousel_1 = $("<div class='owl-carousel owl-theme'>"+
                            "<div class='item'><img src='assets/img/jean-1.jpg' class='img-responsive'></div>"+
                            "<div class='item'><img src='assets/img/jean-2.jpg' class='img-responsive'></div>"+
                            "<div class='item'><img src='assets/img/pants-b1.jpg' class='img-responsive'></div>"+
                            "<div class='tem'><img src='assets/img/pants-b2.jpg'></div>"+
                            "<div class='item'><img src='assets/img/pants-be1.jpg'></div>"+
                            "<div class='item'><img src='assets/img/pants-be2.jpg'></div>"+
                            "<div class='item'><img src='assets/img/pants-n1.jpg'></div>"+
                            "<div class='item'><img src='assets/img/pants-n2.jpg'></div>"+
                          "</div>");
  const divOptions_2 = $('<div id="img_variable_2" class="col-xs-7 col-xs-offset-3"></div>')
  const secCarousel_2 = $("<div class='owl-carousel owl-theme'>"+
                      "<div class='item'><img src='assets/img/shoe-b1.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/shoe-b2.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/shoe-be1.jpg' class='img-responsive'></div>"+
                      "<div class='tem'><img src='assets/img/shoe-be2.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n1.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n2.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n3.jpg' class='img-responsive'></div>"+
                      "<div class='item'><img src='assets/img/shoe-n4.jpg' class='img-responsive'></div>"+
                      "</div>");
  const footerOutfit =$('<div class="outfit-container__footer">'+
                          '<div class="img-circle"><i class="glyphicon glyphicon-camera"></i></div>'+
                        '</div>');

  contOutfit.append(divSelect);
  divSelect.append(imgSelect) ;
  divOptions_1.append(secCarousel_1);
  divOptions_2.append(secCarousel_2);
  controw.append(divSelect);
  controw.append(divOptions_1);
  controw.append(divOptions_2);
  contOutfit.append(controw);
  contOutfit.append(footerOutfit);
  return contOutfit;
}
