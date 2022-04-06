const { log } = require('console');
const req = require('express/lib/request');
const { format } = require('path');
const path = require('path');
// const jsonDB = require ('../model/jsonDatabase');
// const productModel = jsonDB('products');
let db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

db.Genres.findAll()
    .then(res => genres = res)
db.Format.findAll()
    .then(res => formats = res)


const productController = {

    productList:(req,res) => {
        db.Products.findAll({
            include:[{association:'Images'},{association:'Format'}],
        })
        .then(function (productos) {
            res.render('productList',{
                productos, mil:toThousand
            })
        })
    }, 

    create:(req,res) => {
        console.log('----------------------------');
        console.log(req.body.category);
        db.Images.create({
            url: req.file ? req.file.filename : ''
        })
        .then(img => {
            console.log(img)
            db.Products.create({
                name: req.body.name,
                artist: req.body.artist,
                IDImages:img.dataValues.id,
                IDgenre: req.body.genre,
                IDformat: req.body.format,
                description: req.body.description,
                price: Number(req.body.price),
            })
        })
        
        res.redirect("/products/productList");
    },

    detail:function (req,res) {
        db.Products.findByPk(req.params.id,{
                include:[{association:'Images'},{association:'Format'},{association:'Genres'}],
            })
        .then (function (producto) {
            res.render('productDetail',{producto,mil:toThousand})
        })
    },

    editarAccion:(req,res) => {
        db.Images.create({
            url: req.file ? req.file.filename : ''
        })
        .then(img => {
            console.log(img)
            db.Products.findByPk(req.params.id)
            .then(function(producto){
                db.Products.update({
                    name: req.body.productName,
                    artist: req.body.productArt,
                    IDImages: req.file ? img.dataValues.id : producto.IDImages,
                    IDgenre: req.body.genre,
                    IDformat: req.body.format,
                    description: req.body.productDescription,
                    price: Number(req.body.productPrice),
                },{
                    where: {
                        id: req.params.id
                    }})
                    .then(function () {
                        res.redirect("/products/productList")
                    })
            })
            
        })
    },

    edit:(req,res) => {
        let producto = db.Products.findByPk(req.params.id)
        let formatos = db.Format.findAll()
        let generos = db.Genres.findAll()
        Promise.all([producto, formatos, generos])
        .then(function ([producto, formatos, generos]) {
            res.render("productEdit",{producto, formatos, generos})
        })
        
    },

    delete:(req,res) => {
        db.Products.destroy({
            where: {
                id: req.params.id //saca el id de la ruta
            }
        })
        .then(function () {
            res.redirect("/products/productList")
        })
    },

    productCart:(req,res) => {
        res.render('productCart');
    },

    productAdd:(req,res) => {
        db.Genres.findAll()
            .then(function(genres) {
                return res.render('productAdd', {genres})
            })
        
    },
    wishList:(req,res) => {
        res.render('wishList');
    },
    Search:(req,res) => {
        db.Products.findAll({
            where:{
                name: req.query.search
            },
            include:[{association:'Images'},{association:'Format'}]
        })
        .then(function (productos) {
            res.render('productList', {productos, mil:toThousand})
        })
    }
}


module.exports = productController;