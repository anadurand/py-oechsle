'use strict';

const filterBycloths= (ropa,query ) => {
  const select =ropa.filter(function(index) {
    return (index.Type == query);
  });
  return select;
  console.log(select);
};

const filtradosBycolors =(colors ,values) =>{
  const colorselec =colors.filter(function(index){
    return (index.color == values);
  });
  return colorselec;
}
