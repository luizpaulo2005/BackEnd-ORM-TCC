var express = require("express");
var app = express();
var cors = require('cors');
var {campus} = require("./models");
var {curso} = require("./models");
var {discente} = require("./models");
var {docente} = require("./models");
var {tcc} = require("./models");
var porta = 4000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())

//Campus

app.get("/campus", async function(req, res){
    var mostrar = await campus.findAll();
    res.json(mostrar);
})

app.post("/campus", async function(req, res){
    var adicionar = await campus.create(req.body);
    res.json(adicionar);
})

app.put("/campus/:id", async function(req, res){
    var atualizar = await campus.update(req.body, {where: {id:req.params.id}});
    res.json(atualizar);
})

app.delete("/campus/:id", async function(req, res){
    var apagar = await campus.destroy({where: {id:req.params.id}});
    res.json(apagar);
})



app.listen(porta, function(){
    console.log("O servidor está rodando na porta http://localhost:" + porta)
})