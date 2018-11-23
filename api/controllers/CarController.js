/**
 * CarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createCar: async function(req, res, next){
        var params = req.allParams();
        var createRecord = await Car.create({
            car_type: params.car_type,
            color: params.color,
            model: params.model,
            engine_no: params.engine_no,
            chassis_no: params.chassis_no,
        }).fetch();
        console.log(createRecord);

    //     sails.log('Wow, there are %d users named abc.  Check it out:', usersNamedabc);
    //     return res.json(usersNamedabc);
    // //     }).fetch();
    //     console.log(createRecord);
    // },

    // testcall: function(req, res, next){
    //     console.log("hello");
    },
    showData: async function (req, res, next) {
        Car.find()
            .exec(function (err, users) {
                if (err) {
                    res.badRequest(err);
                } else {
                    res.json({ users: users });
                }
            })
    },
    testCall: function (req, res, next) {
        console.log("hello"); 

    }
  
  
};

