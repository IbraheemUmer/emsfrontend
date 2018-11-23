/**
 * ServicesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    newService: async function(req, res, next){
        console.log("shopistn.pk");
        var params = req.allParams();
        console.log(params);
        var createRecord = await Services.create({
            transportation: params.transportation,
            lunch: params.lunch,
        }).fetch();
        console.log(createRecord);
    },

    testcall: function(req, res, next){
        console.log("hello");
    }
  

};

