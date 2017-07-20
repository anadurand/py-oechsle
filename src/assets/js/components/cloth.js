const Mixed = () =>{
	const clothContainer = $("<section class='cloth-container'></section>");

	const principalCloth = $("<div class='cloth-container__princNews'>Aquí va la ropa</div>");


	clothContainer.append(principalCloth);


	return clothContainer;
}
