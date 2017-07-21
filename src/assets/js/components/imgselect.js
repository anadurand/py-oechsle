'use strict';
const imgBuy = ( detail, update) => {

    const cont_Img = $("<div class='item'></div>");
    const divImg   = $('<div class="cont_img"></div>');
    const img      = $('<img src="assets/img/'+ detail.image +'" class="img-responsive">');
    const divText  = $('<div class="cont_text"></div>');
    const name     = $('<h4>'+ detail.name +'</h4>');
    const price    = $('<h4>Precio : S/.'+ detail.price + '</h4>');

    cont_Img.append(divImg);
    cont_Img.append(divText);
    divImg.append(img);
    divText.append(name);
    divText.append(price);

  return cont_Img;
}
