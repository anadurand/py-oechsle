const Seeyou = () => {
  const secSeeu = $("<section id='seeyou' class='container-fluid vh-100'></section>");
  const row1 = $("<div class='row vh-10'><div class='col-xs-2 col-sm-2 container-flex-row'><i class='glyphicon glyphicon-remove'></i></div>"+
  "<p>See you soon!</p></div></div>");
  const cont1 =$("<div class='container'><div class='row'><div class='col-xs-12 col-sm-12 container-flex-row'><div class=''><img src='assets/img/final.jpg' class='img-responsive'></div></div></div></div>");
  const conta2 = $("<div class='container-fluid seeyou--bg-color vh-50'><div class='container-flex-colum'><div class='row'><div class='col-xs-12 col-sm-12 container-flex-row'><p class='seeyou--text-color seeyou--p-pd'></p></div></div></div></div>");
  const text1 = $("<span>Great! Your basket will be shipped to our fitting room in </span>");
  const locationtxt = $("<span id='location'></span>");
  const txt = $("<span>Nos vemos en Oechsle  "+ state.localSelected["data-store"] +"</span>");
  const date =$("<span id='date '></span>");
  const txt2 =$("<span>between</span>");
  const time =$("<span id='time'>15:30 and 17:00</span>");
  const row3 = $("<div class='row'><div class='col-xs-12 col-sm-12 container-flex-row'><p class='seeyou--text-color small seeyou--p-pd'>P.S: You pay only for what you decide to take from the fitting room!</p></div></div>");
  secSeeu.append(row1);
  secSeeu.append(cont1);
  secSeeu.append(conta2);
  conta2.append(text1);
  conta2.append(locationtxt);
  conta2.append(txt);
  conta2.append(date);
  conta2.append(txt2);
  conta2.append(time);
  secSeeu.append(row3);
  return secSeeu;
}
