const express = require("express");
const router = express.Router();

router.use(express.static('public'));

router.get('/',(req,res)=>{
    res.render('pages/home');
});
router.get('/about',(req,res)=>{
    res.render('pages/about');
});
router.get('/cadastro',(req,res)=>{
    let users = [
        {name: "Cecilia C. Nogueira", addres:"Rua tal, 90",email:"cecilia@gmail.com",age:19,height:1.67,vote:true},
        {name: "Luis Guilherme da Silva", addres:"Rua tal, 90",email:"guilherme@gmail.com",age:19,height:1.92,vote:true},
        {name: "Maria Eduarda da Silva", addres:"Rua acula, 60",email:"maria@gmail.com",age:17,height:1.67,vote:true}


    ];
    res.render('pages/cadastro',{users});
});
router.get('/cadastro/remove/:id',(req,res)=>{
    res.send("Remoção realizada com sucesso!");
});
router.get('/cadastro/update/:id',(req,res)=>{
    res.send("Atualização realizada com sucesso!");
});
module.exports = router;