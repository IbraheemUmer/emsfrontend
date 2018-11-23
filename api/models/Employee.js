/**
 * Employee.js
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
    fullname: {
      type: 'string',
    },
    cnic: {
      type: 'string',
    },
    gender: {
      type: 'string',
    },
    phone_no: {
      type: 'number',
    },
    hire_date: {
      type: 'string',
      columnType: 'datetime'
    },
    job_id: {
      type: 'number',
    },
    salary: {
      type: 'number',
    },
  },

};

