module.exports= {
    userlogin: async function(req, res, next){
    var params=req.allParams()
    console.log(params)
    User.findOne({full_name: params.full_name, password: params.password})
    .exec(function(err, user){
        console.log(err);
        console.log(user);
        
        if(user){
            res.json({user: user, success: true})
        } else {
            res.badRequest({message: 'User/Password is incorrect'});
        }
    })
   
},
testCall: function(req, res, next){
    console.log("hello");
    
}
};
