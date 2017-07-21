"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    // section.append(Header());
    // section.append(Mixed());
    section.append(Photo());
    section.append(Footer());
    root.append(section);
    init();
};

const state = {
    cloth: null,
    clothSelected : null,
    photoTaken: null
};

$( _ => {

 
        const root = $('#root');
        render(root);


})
