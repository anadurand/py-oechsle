const Footer = () =>{
	const footerContainer = $("<footer class='footer-container'></footer>");


	const icon = $("<div class='footer-container__icon'>Aquí va el footer</div>");



	footerContainer.append(icon);

	return footerContainer;
}
