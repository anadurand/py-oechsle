"use strict";var render=function(s){s.empty();var i=$('<section class="components"></section>');i.append(Welcome()),s.append(i)};$(function(s){var i=$("#root");render(i)});var Carousel=function(){return $("<div class='owl-carousel owl-theme'><div class='item'><img src='assets/img/jean-1.jpg'></div><div class='item'><img src='assets/img/jean-2.jpg'></div><div class='item'><img src='assets/img/pants-b1.jpg'></div><div class='tem'><img src='assets/img/pants-b2.jpg'></div><div class='item'><img src='assets/img/pants-be1.jpg'></div><div class='item'><img src='assets/img/pants-be2.jpg'></div><div class='item'><img src='assets/img/pants-n1.jpg'></div><div class='item'><img src='assets/img/pants-n2.jpg'></div></div>")},Mixed=function(){var s=$("<section class='cloth-container'></section>"),i=$("<div class='cloth-container__princNews'>Aquí va la ropa</div>");return s.append(i),s},Footer=function(){var s=$("<footer class='footer-container'></footer>"),i=$("<div class='footer-container__icon'>Aquí va el footer</div>");return s.append(i),s},Header=function(){return $("<header class='container-fluid'><div class='row'><div class='col-xs-2 col-sm-2'><div class='header--icoHamburger'><i class='glyphicon glyphicon-menu-hamburger header--boxes-margin'></i></div></div><div class='col-xs-8 col-sm-8'><div class='header--message'><p class='header--boxes-margin'>Snap a picture</p></div></div><div class='col-xs-2 col-sm-2'><i class='glyphicon glyphicon-shopping-cart header--boxes-margin'></i></div></div></header>")},TakePicture=function(){Header()},Welcome=function(){var s=$("<section class='container-fluid'><div class='row'><div class='col-xs-12 col-md-12'><div class='welcome-logo'><img src='assets/img/logoOe.png' alt='LogoOe' height='100%' width='100%'></div></div></div></section>");return setTimeout(function(){Header()},1e3),s};