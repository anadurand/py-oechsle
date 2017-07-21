"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    state.cloth=1;
    if (state.cloth == null){
      section.append(Header());
      section.append(welcome());
    }else {
      section.append(Header());
      section.append(Outfit());
    }
    root.append(section);
};
const state = {
    clothes: null,
    clothSelected : null
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

  var database = firebase.database();
  database.ref().on("value", function(snap){
    $('#display').html(snap.val());
    console.log(snap.val());
    snap.val()=state.clothes;
  })
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
