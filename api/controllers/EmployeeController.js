/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    createEmployee: async function (req, res, next) {
        var params = req.allParams(); 
        console.log(params);
        var createRecord = await Employee.create({
            fullname: params.fullname,
            email: params.email,
            cnic: params.cnic,
            gender: params.gender,
            phone_no: params.phone_no,
            hire_date: params.hire_date,
            job_id: params.job_id,
            salary: params.salary,
               }).fetch();
                    if(createRecord){
                        res.json({user: createRecord, success: true})
                    } else {
                        res.badRequest({message: 'Is Invalid'});
                
                }
    },
    showemployee: async function (req, res, next) {
        var params = req.allParams();
        console.log(params);
        var findcriteria = {};
        if(params.email){    
            findcriteria['email'] = params.email
        }
        console.log(findcriteria);
        if(params.fullname){
            findcriteria['fullname'] = params.fullname
        }
        if(params.salary){
            findcriteria['salary'] = params.salary
        }
        Employee.find(findcriteria)
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

    },
    updateemployee: async function (req,res, next) {
        var params = req.allParams();
        console.log(params);
        Employee.update({id:params.id}, params)
        .exec(function(err, user){
            if(!err){
                res.json({success: true})
            } else {
                res.badRequest({err});
            }  
        })
       // console.log(updateRecord)
        },
    
   destroyemployee: async function (req,res,next) {
       var params = req.allParams();
       console.log(params)
       Employee.destroyOne({id:params.id})
        .exec(function (err,user){
    //        console.log(err);
    //        console.log(user);
    if(!err){
        res.json({success: true})
    } else {
        res.badRequest({err});

            
        // if(user){
        //     res.json('Deleted record with `id: 3`.')
        // } else {
        //     res.badRequest({message: 'The database does not have a cnic with `id: 3`.'});
        // }

        }
   }
        )}
};

