'use strict';

const filterByLocal= (locals,query) => {
 const location = locals.filter( (local) => {
   return (local["data-store"].toLowerCase().indexOf(query.toLowerCase())!= -1);
 });
 return location;
}
