const Outfit = (update) => {
  const contOutfit = $('<section class="cont_outfit"></section>');
  const controw    =$('<div class="row"></div>');
  const divSelect  = $('<div id="img_fixed" class="col-xs-8 col-xs-offset-2"></div>');
  const imgSelect  = $('<img src="assets/img/'+ state.clothSelected.image +'"  class="img-responsive" alt="foto_selecionada">');
  const divOptions_1 = $('<div id="img_variable_1" class="col-xs-8 col-xs-offset-2"></div>');
  const secCarousel_1 = $("<div class='owl-carousel owl-theme'></div>");
  const divOptions_2 = $('<div id="img_variable_2" class="col-xs-7 col-xs-offset-3"></div>');
  const secCarousel_2 = $("<div class='owl-carousel owl-theme'></div>");

  let filtrados = null ;
  let filt_shoes =null;
  let colores = [];
  let col_shoes = [] ;

  if (state.clothSelected.Type == "blouse"){
      var palabras = state.clothSelected.combinations.split(", ");
          filtrados = filterBycloths(state.cloth.clothes ,"pants");
          filt_shoes = filterBycloths(state.cloth.clothes ,"shoe");

          $.each(filtrados, function(e,item){
             var filtra=  palabras.indexOf(item.color);
             if(filtra!=-1){
              colores.push(item);
             }
          });
          $.each(filt_shoes, function(e,item){
             var filtra_shoe=  palabras.indexOf(item.color);
             if(filtra_shoe!=-1){
              col_shoes.push(item);
             }
          });
      colores.forEach( function( index) {
        secCarousel_1.append(slider1(index, update));
      });

      col_shoes.forEach( function( index) {
        secCarousel_2.append(slider2(index, update));
      });

      divSelect.append(imgSelect) ;
      controw.append(divSelect);
      divOptions_1.append(secCarousel_1);
      controw.append(divOptions_1);
      divOptions_2.append(secCarousel_2);
      controw.append(divOptions_2);

  } else if (state.clothSelected.Type == "pants"){
    var palabras = state.clothSelected.combinations.split(", ");
    console.log(palabras);

    $.each(state.cloth.clothes , function(i,value){
       filtrados = filterBycloths(state.cloth.clothes ,"blouse");
      $.each(palabras ,function(i,value){
        colores = filtradosBycolors(filtrados ,value);
      })
    });

    colores.forEach( function( index) {
      secCarousel_1.append(slider1(index, update));
    });

    divOptions_1.append(secCarousel_1);
    controw.append(divOptions_1)
    divSelect.append(imgSelect) ;
    controw.append(divSelect);
  }

  const footerOutfit =$('<div class="outfit-container__footer">'+
                          '<div class="img-circle"><i class="glyphicon glyphicon-camera"></i></div>'+
                        '</div>');

  contOutfit.append(controw); //Secundario
  contOutfit.append(footerOutfit);
  $( _ => {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
      });
  });
  return contOutfit;
}
