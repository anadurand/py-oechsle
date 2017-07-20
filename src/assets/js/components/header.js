const Header = () => {

	const headerContainer = $("<header class='container-fluid'>"+
														"<div class='row'><div class='col-xs-2 col-sm-2'>"+
														"<div class='header--icoHamburger'><i class='glyphicon glyphicon-menu-hamburger header--boxes-margin'></i></div>"+
														"</div>"+
														"<div class='col-xs-8 col-sm-8'><div class='header--message'><p class='header--boxes-margin'>Snap a picture</p></div></div>"+
														"<div class='col-xs-2 col-sm-2'>"+
														"<i class='glyphicon glyphicon-shopping-cart header--boxes-margin'></i>"+
														"</div>"+
														"</div></header>");

	// const search = $("<div class=''></div>");


	// headerContainer.append(search);

	return headerContainer;

}
