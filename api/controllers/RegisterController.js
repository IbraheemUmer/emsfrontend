module.exports= {
    register: async function(req, res, next){
    var params=req.allParams()
    console.log(params);
    
        var createRecord = await User.create({
            full_name: params.full_name,
            email: params.email,
            password: params.password,
            birth_date: params.birth_date,
            gender: params.gender,
            address: params.address,
            salary: params.salary,
            phone_no: params.phone_no,
            cnic: params.cnic,
        }).fetch();
        if(createRecord){
            res.json({user: createRecord, success: true})
        } else {
            res.badRequest({message: 'Is Invalid'});
    
    }
   
},
testCall: function(req, res, next){
    console.log("hello");
    
}
};