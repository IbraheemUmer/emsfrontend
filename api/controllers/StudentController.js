/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    createStudent: async function (req, res, next) {
        var params = req.allParams();  
        console.log(params);
        var createRecord = await Student.create({
            email: params.email,
            password:params.password,
            fname: params.fname,
            lname: params.lname,
            dob: params.dob,
            phone: params.phone,
            age: params.age,
                    }).fetch();
        console.log(createRecord);
    },
    showstudent: async function (req, res, next) {
        var params = req.allParams();
        console.log(params);
        var findcriteria = {};
        if(params.email){    
            findcriteria['email'] = params.email
        }
        if(params.fname){
            findcriteria['fname'] = params.fname
        }
        console.log(findcriteria);

        Student.find(findcriteria)
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
    updatestudent: async function (req,res, next) {
        var params = req.allParams();
        console.log(params);
        params.dob = new Date(params.dob);
        console.log(params.dob);
        
        // params.dob = DATE(params.dob)
        Student.update({id:params.id}, params)
        .exec(function(err, user){
            console.log(err);
            
            console.log(user)
        })
       // console.log(updateRecord)
   }
};

