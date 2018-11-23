/**
 * EnginedetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createEnginedetails: async function(req, res, next){
        var params = req.allParams();
        console.log(params);

        // Enginedetails.find({manufacturer: params.manufacturer})
        //               .populate('idcar')
        Enginedetails.query('SELECT * FROM Enginedetails WHERE manufacturer = $1', ['12233'] ,function(err, Result){
            console.log(Result)
        }  )







          //  .populate('engine_no')

            //.exec(function(err, res)
            //     if(err){
            //         return res.json(err);
            //     }
            //     return res.json(res);
            // .exec(function(err,res){
            //     console.log(err)
            //     console.log(res)
    
        
    }
};