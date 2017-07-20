"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    state.cloth=1;
    if (state.cloth == null){
      section.append(Header());
      section.append(welcome());
    }else {
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
        console.log(state.cloth);
})
