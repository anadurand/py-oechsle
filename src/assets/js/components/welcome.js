const Welcome = () => {
  const secWelcome = $("<section class='container-fluid'>"+
            "<div class='row'>"+
            "<div class='col-xs-12 col-md-12'>"+
            "<div class='welcome-logo'>"+
            "<img src='assets/img/logoOe.png' alt='LogoOe' height='100%' width='100%'>"+
            "</div></div></div>"+
            "</section>");
            setTimeout(function(){ Header(); }, 1000);
  return secWelcome;
}
