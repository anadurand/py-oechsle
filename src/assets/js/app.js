"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    section.append(Welcome());
    // section.append(Mixed());
    // section.append(Footer());
    root.append(section);
};
// const state = {
//     cloth: null,
//     clothSelected : null
// };

$( _ => {

    // $.get('',(json) => {
    //     if(!json){
    //       return alert("error");
    //     }
        // state.cloth = json;
        // console.log(state.cloth);
        const root = $('#root');
        render(root);
    // });

        // var socket = io();
        // $('form').submit(function(){
        //   socket.emit('chat message', $('#m').val());
        //   $('#m').val('');
        //   return false;
        // });
        // socket.on('chat message', function(msg){
        //   $('#messages').append($('<li>').text(msg));
        //   window.scrollTo(0, document.body.scrollHeight);
        // });

})
