'use strict';

const filterByLocal= (locals,query) => {
 const location = locals.filter( (local) => {
   return (local.location.toLowerCase().indexOf(query.toLowerCase())!= -1);
 });
console.log(location);
 return location;
}
