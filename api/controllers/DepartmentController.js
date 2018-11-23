/**
 * DeparmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    newDepartment: async function(req, res, next){
        console.log("it is easy");
        var params = req.allParams();
        console.log(params);
        
        var createdRecord = await Department.create({
            tech_department: params.tech_department,
            project_managers: params.project_managers,
            graphic_designers: params.graphic_designers
        }).fetch();
        console.log(createdRecord);
        
    },
    device: async function (req, res, next) {
        Department.find()
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

