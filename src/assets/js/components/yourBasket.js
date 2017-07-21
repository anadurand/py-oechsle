"use strict";
const  Yourbasket = (update) => {
 const secYourBasket = $("<section class='container-fluid'></section>");
 const row1 = $("<div class='row'><div class='col-xs-2 col-sm-2 container-flex-row'><i class='glyphicon glyphicon-remove'></i></div>"+
 "<div class='col-xs-10 col-sm-10 container-flex-row'><p>Your Basket (<span id='nItems'></span> items)</p></div></div>");
 const conta = $("<div class='container'></div>");
 const rowc = $("<div class='row'></div>");
 const imgSelected = $("<div id='imgSelected'class='col-xs-12'></div>");

 var total = 0;

 buyselect1.forEach( function( index) {
   imgSelected.append(imgBuy (index, update));
   total += index.price;
 });

 buyselect2.forEach( function( index) {
   imgSelected.append(imgBuy (index, update));
   total += index.price;
 });

 const rowc2 = $("<div class='row cont_2'></div>");
 const cont_btn =  $(" <div class='col-xs-12 col-sm-12 container-flex-row'></div>");
 const btn_comprar=$('<button type="button" name="button">Buy</button>');
 const btn_cita=$('<button type="button" name="button">Cita</button>');

 secYourBasket.append(row1);
 secYourBasket.append(conta);
 conta.append(rowc);
 rowc.append(imgSelected);
 conta.append(rowc2);
 rowc2.append(cont_btn);
 cont_btn.append(btn_comprar);
 cont_btn.append(btn_cita);

 btn_cita.on('click', function(){
   console.log("Entra a ala cita ");
    state.page =  3;
    update();
  });
 return secYourBasket;
}
