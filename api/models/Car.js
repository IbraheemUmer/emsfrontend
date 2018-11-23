/**
 * Car.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      columnName:'idcar'
    },
    car_type: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    model: {
      type: 'string',
    },
    engine_no: {
      type: 'number',
    },
    chassis_no: {
      type: 'number',
    },
  },

};

