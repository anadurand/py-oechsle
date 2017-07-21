'use strict';

const filterBycloths= (ropa,query ) => {
  const select =ropa.filter(function(index) {
    return (index.Type. (query)!=-1);
  });
  return select;
}

const filtradosBycolors =(colors ,values) =>{
  const colorselec =colors.filter(function(index){
    return (index.color.indexOf(values)!=-1)
  });
  return colorselec;
  console.log(colorselec);
}
