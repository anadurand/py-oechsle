"use strict";
const render = (root)=>{
  root.empty();
  const section = $('<section class="components"></section>');

  if (state.page == 0){
    section.append(Header());
    section.append(welcome());
  }else if(state.page == 1) {
    section.append(Header());
    section.append(Outfit());
  }
  root.append(section);
};
const state = {
  page: 0,
  cloth: null,
  clothSelected : null,
  locals:null
};

$( _ => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdX8FyCVHBS3WkdCi7KeW-5BFw7KlC3g4",
    authDomain: "base-7937c.firebaseapp.com",
    databaseURL: "https://base-7937c.firebaseio.com",
    projectId: "base-7937c",
    storageBucket: "",
    messagingSenderId: "305091668120"
  };
  firebase.initializeApp(config);
  //
  var database = firebase.database();
  database.ref().on("value", function(snap){
    //   // $('#display').html(snap.val());
    console.log(snap.val());
    state.cloth = snap.val();
    state.locals = snap.val().locals;
    console.log(state.locals);
  });
  const root = $('#root');
  render(root);
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  })
})
