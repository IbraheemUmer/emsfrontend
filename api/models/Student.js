/**
 * Student.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true,
    },
    email: {
      type: "string"
    },
    password: {
      type: 'string',
    },
    fname: {
      type: 'string',
    },
    lname: {
      type: 'string',
    },
    dob: {
      type: 'ref',
      columnType: 'datetime'
    },
    phone: {
      type: 'number',
    },
    age: {
      type: 'number',
    },
   
  },

};

