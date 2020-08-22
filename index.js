const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const jwt = require("jsonwebtoken");


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const port = "9000";
const serv = "localhost";

app.get("/", (req,res)=>{
    const jwtsecret = "GZa2f95C*zA@P#ca4U%XjBrW9zrDoPhpOCScb6CQ"
    jwt.sign({ "" : "" }, jwtsecret, { expiresIn: '2h' }, (err, token) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.json({ token: token })
            res.sendStatus(200)
        }
    })
})




const Product = require("./router/product");
app.use("/", Product)



app.listen(port, serv, function (erro) {
    if (erro) {
        console.log("Erro ao Iniciar Servidor");

    } else {
        console.log("Servidor Inciado com Sucesso");
    }
});