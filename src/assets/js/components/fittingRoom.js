'use strict';

// const FittingRoom = () => {
// //     const secFRoom = $("<section id='fittingRoom' class='container-fluid'><div class='row'><div class='col-xs-2 col-sm-2 container-flex-row'>"+
// //     "<i class='glyphicon glyphicon-remove'></i></div>"+
// //     "<div class='col-xs-10 col-sm-10 container-flex-row'><p>Fitting Room</p></div></div>"+
// //     "<div class='container'><div class='row'><div class='col-xs-12 col-sm-12 container-flex-colum-flxStart'>"+
// //     "<p>select a location</p><input type='text' class='fitRoom--input-class'><div id='mapa'></div>"+
// //     "<p>select a date and time</p><input type='text' class='fitRoom--input-class'></div></div>"+
// //     "<div class='row'><div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>10:30 - 12:00</span></div>"+
// //     "<div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>13:30 - 15:00</span></div></div>"+
// //     "<div class='row'><div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>15:30 - 17:00</span></div>"+
// //     "<div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>17:30 - 19:00</span></div></div>"+
// //     "<div class='row'><div class='col-xs-12 col-sm-12 container-flex-row'><button type='button' name='button' class='col-xs-12 col-sm-12 shopCart--button-class fitRoom--span-pd'>Book appointment</button>"+
// //     "</div></div></div></section>");
// //
// // return secFRoom;
//
//   const map =$(`<section class="container"></section>`);
//
//   map.innerHTML = "hola";
//
//   return map;
// }

const localItem = (local, update, reRender ) => {
  // console.log(update);
  const contLocal=  $('<div class="col-xs-12"></div>');

  const contName= $('<div class="col-xs-9"></div>');
  const name = $('<h5>'+ locals.name +'</h5>');

  const contLink = $('<div class="col s3 btn-map center-align"></div>');
  const mapIcon = $('<i class="fa fa-map"></i>');

  const contAddres = $('<div class="col s12 item-station"></div>');
  const address= $('<p>'+ station.address+'<br>'+ station.district +'</p>');

  contName.append(name);
  contLink.append(mapIcon);
  contAddres.append(address);

  contStation.append(contName);
  contStation.append(contLink);
  contStation.append(contAddres);

  mapIcon.on('click',(e) => {
    e.preventDefault();

    state.selectedStation = station;
    update();
  });

  return contStation ;
}

const stationSearch = (update) => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row search"></div>');
  const iconSearch = $('<span  class="material-icons">search</span>');
  const search = $('<input class="input-search col s12" placeholder="Ingresa tu distrito a buscar"></input>');
  const rowContainer = $('<div class="row stations"></div>');



  container.append(row);
  container.append(rowContainer);


    search.on('keyup',(e) => {
      const find = filterByLocal(state.locals,search.val());

      reRender (rowContainer, find, update);
    });


  return container;
}

const reRender = (rowContainer, find, update) => {
  rowContainer.empty();

  find.forEach((local)=>{
    rowContainer.append(localItem(local,update,_=> {reRender(rowContainer, find);}));

  });
}
