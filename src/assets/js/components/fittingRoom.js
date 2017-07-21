const FittingRoom = () => {
  const secFRoom = $("<section id='fittingRoom' class='container-fluid'><div class='row'><div class='col-xs-2 col-sm-2 container-flex-row'>"+
  "<i class='glyphicon glyphicon-remove'></i></div>"+
  "<div class='col-xs-10 col-sm-10 container-flex-row'><p>Fitting Room</p></div></div>"+
  "<div class='container'><div class='row'><div class='col-xs-12 col-sm-12 container-flex-colum-flxStart'>"+
  "<p>select a location</p><input type='text' class='fitRoom--input-class'><div id='mapa'></div>"+
  "<p>select a date and time</p><input type='text' class='fitRoom--input-class'></div></div>"+
  "<div class='row'><div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>10:30 - 12:00</span></div>"+
  "<div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>13:30 - 15:00</span></div></div>"+
  "<div class='row'><div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>15:30 - 17:00</span></div>"+
  "<div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>17:30 - 19:00</span></div></div>"+
  "<div class='row'><div class='col-xs-12 col-sm-12 container-flex-row'><button type='button' name='button' class='col-xs-12 col-sm-12 shopCart--button-class fitRoom--span-pd'>Book appointment</button>"+
  "</div></div></div></section>");

  return secFRoom;
}
