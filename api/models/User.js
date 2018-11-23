/**
 * User.js
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
    full_name: {
      type: 'string',
    },
    birth_date: {
      type: 'string',
     
    },
    gender: {
      type: 'string',
    },
    salary: {
      type: 'number',
    },
    cnic: {
      type: 'string',
    },
    address: {
      type: 'string',
    },
    phone_no: {
      type: 'number',
    },
    photo: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },

  },

};

