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

const localsSearch = (update) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row "></div>');
  const iconSearch = $('<span  class="">search</span>');
  const search = $('<input class="input-search col s12" placeholder="Ingresa tu distrito a buscar"></input>');
  const rowContainer = $('<div class="row " id="locals"></div>');

  row.append(iconSearch);
  row.append(search);

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

const localItem = (local, update, reRender ) => {
  const contLocal=  $('<div class="col-xs-12"></div>');

  const contName= $('<div class="col-xs-9"></div>');
  const name = $('<h5>'+ local["data-store"] +'</h5>');
  const contLink = $('<div class="col-xs-3 center-align"></div>');
  const mapIcon = $('<i class="glyphicon glyphicon-map-marker"></i>');

  const contAddres = $('<div class="col-xs-12 item-local"></div>');
  const address= $('<p>'+ local.address +'<br>'+ "-" + local["data-province"]+'</p>');

  contName.append(name);
  contLink.append(mapIcon);
  contAddres.append(address);

  contLocal.append(contName);
  contLocal.append(contLink);
  contLocal.append(contAddres);

  mapIcon.on('click',(e) => {
    e.preventDefault();
    state.localSelected = local;
    $("#locals").empty();

    initMap(local);
  });

  return contLocal;
}

function initMap(local) {
  console.log(local);

  const  map = new google.maps.Map(document.getElementById('locals'), {
    center: {lat: parseFloat(local.lat), lng: parseFloat(local.lng)},
    zoom: 17
  });

  const marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: parseFloat(local.lat), lng:parseFloat(local.lng)}
  });
  marker.addListener('load', toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
