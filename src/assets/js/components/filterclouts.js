'use strict';

const filterBycloths= (ropa,query ) => {
  const select =ropa.filter(function(index) {
    return (index.Type == query);
  });
  // console.log(select);
  return select;
}

const filtradosBycolors =(colors ,values) =>{
  const colorselec =colors.filter(function(index){
    return (index.color == values);
  });
  return colorselec;
  // console.log(colorselec);
}
