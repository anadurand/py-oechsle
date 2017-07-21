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

    // section.append(Footer());
    root.append(section);
};
const state = {
    cloth: null,
    clothSelected : null
};

$( _ => {
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
