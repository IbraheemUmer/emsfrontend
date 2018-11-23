/**
 * Task1Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createtask1: async function(req, res, next){
        var params = req.allParams();
        console.log(params);
        var createRecord = await Task1.create({
            full_name: params.full_name,
            birth_date: params.birth_date,
            gender: params.gender,
            subjects: params.subjects,
            cnic: params.cnic,
            address: params.address,
            email: params.email,
        // var usersNamedabc = await Task1.find({name:'full_name'})

        // sails.log('Wow, there are %d users named abc.  Check it out:', usersNamedabc.length, usersNamedabc);
        // return res.json(usersNamedabc);
                }).fetch();
                console.log(createRecord);
            },

            onceagain: async function (req, res, next) {
                Task1.find()
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
 } 