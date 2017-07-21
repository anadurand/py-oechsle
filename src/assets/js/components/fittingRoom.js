const FittingRoom = (update) => {
  const secFRoom = $("<section id='fittingRoom' class='container-fluid'></section>");
  const row = $("<div class='row'>"+
  "<div class='col-xs-2 col-sm-2 container-flex-row'><i class='glyphicon glyphicon-remove'></i></div>"+
  "<div class='col-xs-10 col-sm-10 container-flex-row'><p>Fitting Room</p></div>"+
  "</div>");
  const conta = $("<div class='container'></div>");
  const rowc = $("<div class='row'><div class='col-xs-12 col-sm-12 container-flex-colum-flxStart'></div></div>");
  const div = $("<div></div>");
  const p = $("<p>select a location</p>");
  // const iconSearch = $('<span  class="glyphicon glyphicon-search input-group-addon" id="basic-addon1"></span>');
  const inputFilter = $("<input type='text' class='fitRoom--input-class' placeholder=''>");
  const mapa = $("<div id='mapa'></div>");
  const div2 = $("<div><p>select a date and time</p>"+
  "<input type='date' class='fitRoom--input-class'></div>");
  const rows = $("<div class='row'><div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>10:30 - 12:00</span></div>"+
    "<div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>13:30 - 15:00</span></div></div>"+
    "<div class='row'><div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>15:30 - 17:00</span></div>"+
    "<div class='col-xs-6 col-sm-6 container-flex-row'><span class='fitRoom--span-class fitRoom--span-pd'>17:30 - 19:00</span></div></div>" );
  const row_btn=$("<div class='row'></div>" );
  const div_cont=$("<div class='col-xs-12 col-sm-12 container-flex-row'></div>");
  const btn_next=$("<button type='button' name='button' class='col-xs-12 col-sm-12 fitRoom--button-class fitRoom--span-pd'>Book appointment</button>");


secFRoom.append(row);
secFRoom.append(conta);
conta.append(rowc)
rowc.append(div);
div.append(p);
div.append(inputFilter);
div.append(mapa);
rowc.append(div2);
conta.append(rows);
div_cont.append(btn_next);
row_btn.append(div_cont)
conta.append(row_btn);

inputFilter.on('keyup',(e) => {
  const find = filterByLocal(state.locals,inputFilter.val());

  reRender (mapa, find, update);
});
const reRender = (mapa, find, update) => {
 mapa.empty();
 find.forEach((local)=>{
   mapa.append(localItem(local,update,_=> {reRender(mapa, find);}));
 });
}
const localItem = (local, update, reRender ) => {
 const contLocal=  $('<div class=""></div>');
 const contName= $('<div class=""></div>');
 const name = $('<span>'+ local["data-store"] +'</span>');
 const contLink = $('<div class=""></div>');
 const mapIcon = $('<i class="glyphicon glyphicon-map-marker"></i>');
 const contAddres = $('<div class=""></div>');
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
   $("#mapa").empty();

   initMap(local);
 });

 return contLocal;
}
btn_next.on('click', function(){
  console.log("Nos vemos  ");
   state.page =  4;
   update();
 });

function initMap(local) {
 console.log(local);

 const  map = new google.maps.Map(document.getElementById('mapa'), {
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


const unSelect = (e)=>{
  e.style.opacity="1";
  ac = false;
}
const Select = (e)=>{
  console.log("select" + e);
  ac = true;
  e.style.opacity="0.5";
}
let ac = false;
// $(".fitRoom--span-class").click((e)=>{
//   if(!ac){
//       Select(e.target);
//   }else{
//     unSelect(e.target);
//   }
//   console.log(e.target);
// });

  return secFRoom;
}
