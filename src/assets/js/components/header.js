const Header = () => {

	const headerContainer = $("<header class='header-container'></header>");
	const search = $("<div class='header-container__search'>Hola soy el header</div>");


	headerContainer.append(search);

	return headerContainer;
}
