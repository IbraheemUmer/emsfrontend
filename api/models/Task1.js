/**
 * Task1.js
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
      columnType: 'datetime',
    },
    gender: {
      type: 'string',
    },
    subjects: {
      type: 'string',
    },
    cnic: {
      type: 'string',
    },
    address: {
      type: 'string',
    },
    email: {
      type: 'string',
    },


      },

};

