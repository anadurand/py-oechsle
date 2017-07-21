'use strict';

const filterBycloths= (stations,query) => {
  const select =stations.filter(function(index) {
    return (index.color.indexOf(query)!=-1);
  })
  return select;
}
