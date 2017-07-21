'use strict';

const filterBycloths= (ropa,query) => {
  console.log(ropa);
  console.log("Maia");
  const select =ropa.filter(function(index) {
    return (index.color.indexOf(query)!=-1);
  })
  console.log(select);
  return select;
}
