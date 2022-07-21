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

//Curso

app.get("/curso", async function(req, res){
    var mostrar = await curso.findAll();
    res.json(mostrar);
})

app.post("/curso", async function(req, res){
    var adicionar = await curso.create(req.body);
    res.json(adicionar);
})

app.put("/curso/:id", async function(req, res){
    var atualizar = await curso.update(req.body, {where: {id:req.params.id}});
    res.json(atualizar);
})

app.delete("/curso/:id", async function(req, res){
    var apagar = await curso.destroy({where: {id:req.params.id}})
    res.json(apagar)
})

//Docente

app.get("/docente", async function(req, res){
    var mostrar = await docente.findAll();
    res.json(mostrar);
})

app.post("/docente", async function(req, res){
    var adicionar = await docente.create(req.body);
    res.json(adicionar);
})

//Discente

app.get("/discente", async function(req, res){
    var mostrar = await discente.findAll();
    res.json(mostrar);
})

app.post("/discente", async function(req, res){
    var adicionar = await discente.create(req.body);
    res.json(adicionar);
})

//TCC

app.get("/tcc", async function(req, res){
    var mostrar = await tcc.findAll();
    res.json(mostrar);
})

app.post("/tcc", async function(req, res){
    var adicionar = await tcc.create(req.body);
    res.json(adicionar);
})

app.listen(porta, function(){
    console.log("O servidor está rodando na porta http://localhost:" + porta)
})