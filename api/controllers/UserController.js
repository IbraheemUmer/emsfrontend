/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createUser: async function (req, res, next) {
        console.log("User controller hai");
        var params = req.allParams();
        console.log(params);
        var createRecord = await User.create({
            full_name: params.full_name,
            birth_date: params.birth_date,
            gender: params.gender,
            salary: params.salary,
            cnic: params.cnic,
            address: params.address,
            phone_no: params.phone_no,
            photo: params.photo,
            email: params.email,
            password: params.password,
        }).fetch();
        console.log(createRecord);



    },
    showUser: async function (req, res, next) {
        User.find()
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

