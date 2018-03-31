var dbConnection = require('../../config/dbConnection')
module.exports = function(app){

    app.get('/noticias', function(req, res){
        
        var connection = dbConnection();

        connection.query('select * from noticias', function(erro, resultado){
            // res.send(resultado);
            res.render("noticias/noticias", {noticias: resultado});
        });

    });
}