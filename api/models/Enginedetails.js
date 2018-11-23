/**
 * Enginedetails.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
id: {
  type: 'number',
  autoIncrement: true,
  columnName:'engine_id'
},
manufacturer:{
  type: 'string',
},
dateofmanufacturing: {
  type: 'string', 
  columnType: 'datetime',
},
power: {
  type: 'string',
},
idcar: {
  model: 'car',
},
 
   
  },

};

