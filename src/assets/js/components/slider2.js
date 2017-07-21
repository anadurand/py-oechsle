'use strict';
  let buyselect2 =[];
  const slider2 = ( detail, update) => {

    const enlace2  =$('<a></a>');
    const cont_Img = $("<div class='item'></div>");
    const divImg   = $('<div class="cont_img"></div>');
    const img      = $('<img src="assets/img/'+ detail.image +'" class="img-responsive">');
    const divText  = $('<div class="cont_text"></div>');
    const name     = $('<h6>'+ detail.name +'</h6>');
    const price    = $('<p>Precio : '+ detail.price + '</p>');

    cont_Img.append(divImg);
    cont_Img.append(divText);
    divImg.append(img);
    divText.append(name);
    divText.append(price);
    enlace2.append(cont_Img);

    enlace2.on('click', function(){
      buyselect2.push(detail);
      console.log(buyselect2);
    });
    return enlace2;
}
