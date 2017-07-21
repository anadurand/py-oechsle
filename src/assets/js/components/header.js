const Header = () => {

	const headerContainer = $("<header class='header-container'></header>");
	const divnavbar       = $('<nav class="navbar navbar-default"><div class="container-fluid"></div></nav>');
	const div_header      = $('<div class="navbar-header">'+
															'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
																'<span class="sr-only">Toggle navigation</span>'+
																'<span class="icon-bar"></span>'+
																'<span class="icon-bar"></span>'+
																'<span class="icon-bar"></span>'+
															'</button>'+
															'<a class="navbar-brand center" href="#"><div class="img-size"><img src="assets/img/logo.png" class="img-responsive" alt="logo"></div></a>'+
															'<a class="navbar-brand right" href="#"><i class="glyphicon glyphicon-shopping-cart"></i></a>'+
														'</div>');
	const div_collapse      = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
															'<ul class="nav navbar-nav">'+
																'<li class="active"><a href="#">Inicio <span class="sr-only">(current)</span></a></li>'+
																'<li><a href="#">Mis compras </a></li>'+
																'<li><a href="#">Mis citas </a></li>'+
															'</ul>'+
														'</div>');

	headerContainer.append(divnavbar);
	divnavbar.append(div_header);
	divnavbar.append(div_collapse);
	return headerContainer;
}
