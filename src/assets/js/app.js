"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    if (state.page == 0){
      section.append(Header());
      section.append(welcome( _ => {
      render(root);}));
    } else if(state.page == 1) {
      section.append(Header());
      section.append(Outfit());
    }else if(state.page == 2){
    }
    root.append(section);
    init();//inicializa camara
};

const state = {
    page: 0,
    cloth: null,
    clothSelected : null,
    prendaRandon:null
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
