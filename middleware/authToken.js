const jwt = require("jsonwebtoken");

function auth(req, res, next) {

    const jwtsecret = "GZa2f95C*zA@P#ca4U%XjBrW9zrDoPhpOCScb6CQ"
    const authToken = req.headers['authorization'];

    if (authToken != undefined) {
        const bearer = authToken.split(' ');
        var token = bearer[1];
        
        jwt.verify(token, jwtsecret, (err, data) => {
            if (err) {
                res.sendStatus(401)
            } else {
                req.token = token;
                req.loggerdUser = data.prefixo
                next();
            }
        })

    } else {
       res.sendStatus(400)
    }

}

module.exports = auth;