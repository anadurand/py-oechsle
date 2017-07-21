"use strict";
const render = (root)=>{
   root.empty();

   const section = $('<section class="components"></section>');

   if (state.page == 0){
    //  section.append(Header (
     section.append(Header(_ => {
     render(root);}));
     section.append(welcome( _ => {
     render(root);}));

   } else if(state.page == 1) {
     section.append(Header( _ => {
     render(root);}));
     section.append(Outfit( _ => {
     render(root);}));

   } else if(state.page == 2){
     section.append(Yourbasket( _ => {
     render(root);}));

   } else if(state.page == 3){
     section.append(FittingRoom(_ => {
     render(root);}));
   } else if(state.page == 4){
     section.append(Seeyou());
   }

   root.append(section);
   init();
};

const state = {
   page: 0,
   cloth: null,
   buy:null,
   clothSelected : null,
   prendaRandon:null,
   locals: null,
   localSelected: null
};

const update = function (){
 render(root);
};

$( _ => {
 var config = {
   apiKey: "AIzaSyBdX8FyCVHBS3WkdCi7KeW-5BFw7KlC3g4",
   authDomain: "base-7937c.firebaseapp.com",
   databaseURL: "https://base-7937c.firebaseio.com",
   projectId: "base-7937c",
   storageBucket: "",
   messagingSenderId: "305091668120"
 };
 firebase.initializeApp(config);
 var database = firebase.database();
  database.ref().on("value", function(snap){

  state.cloth = snap.val();
  state.locals = snap.val().locals;
  var array = [];
for (var i = 0; i < state.cloth.clothes.length; i++) {
 if(state.cloth.clothes[i].Type=="pants" || state.cloth.clothes[i].Type=="blouse"){
   array.push(state.cloth.clothes[i].image);
 }
};
const  randno = array[Math.floor( Math.random() * array.length )];
// $('.archivoNombre').text( randno );
   state.prendaRandon= randno;
   console.log(randno);

  const root = $('#root');
  render(root);

 });
})
