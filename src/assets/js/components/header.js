const Header = (update) => {
	const headerContainer = $("<header class='header-container'></header>");
	const divnavbar       = $('<nav class="navbar navbar-default"><div class="container-fluid"></div></nav>');
	const div_header      = $('<div class="navbar-header">'+
															'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
																'<span class="sr-only">Toggle navigation</span>'+
																'<span class="icon-bar"></span>'+
																'<span class="icon-bar"></span>'+
																'<span class="icon-bar"></span>'+
															'</button></div>');
	const  logo		= $('<a class="navbar-brand center" href="#"><div class="img-size"><img src="assets/img/logo.png" class="img-responsive" alt="logo"></div></a>');
	const  btn_buy				= $('<a class="navbar-brand right" href="#compras"><i class="glyphicon glyphicon-shopping-cart"></i></a>');

	const div_collapse      = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
															'<ul class="nav navbar-nav">'+
																'<li class="active"><a href="#">Inicio <span class="sr-only">(current)</span></a></li>'+
																'<li><a href="#">Mis compras </a></li>'+
																'<li><a href="#">Mis citas </a></li>'+
															'</ul>'+
														'</div>');
	div_header.append(logo);
	div_header.append(btn_buy);
	headerContainer.append(divnavbar);;
	divnavbar.append(div_header);
	divnavbar.append(div_collapse);

	btn_buy.on('click', function(){
		console.log("compra de articulos");
		state.page =  2;
		update();
	});
	return headerContainer;
}
