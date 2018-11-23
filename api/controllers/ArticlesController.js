/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
list: (req, res) => {
    articles.find().exec((err, articles)=>{
        if(err){
            res.send(500, {err: err});
        }
        res.view('articles/articles',{articles: articles});
    });
}

};

