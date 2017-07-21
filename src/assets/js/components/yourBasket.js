const  Yourbasket = () =>{
  const secYourBasket = $("<section id='yourBasket' class='container-fluid'><div class='row'>"+
  "<div class='col-xs-2 col-sm-2 container-flex-row'><i class='glyphicon glyphicon-remove'></i></div>"+
  "<div class='col-xs-10 col-sm-10 container-flex-row'><p>Your Basket (<span id='nItems'></span> items)</p></div></div>"+
  "<div class='container'><div class='row><div id='imgSelected'></div></div>"+
  "<div class='row'><div class='col-xs-12 col-sm-12 container-flex-row'>"+
  "<button type='button' name='button' class='col-xs-12 col-sm-12 shopCart--button-class pd'>Buy</button>"+
  "<button type='button' name='button' class='col-xs-12 col-sm-12 shopCart--button-class pd'>Send to fitting room</button>"+
  "</div></div></div></section>");
  return secYourBasket;
}
