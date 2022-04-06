const req = require('express/lib/request');
const path = require('path');
const fs = require('fs');
// const jsonDB = require ('../model/jsonDatabase');
// const productModel = jsonDB('user');
let db = require("../database/models");
const bcrypt= require('bcryptjs')
const {validationResult} = require('express-validator');
const { send } = require('express/lib/response');
const bcryptjs = require('bcryptjs');

const User = db.Users; //forma corta y larga de declarar el db
const Rol = db.Roles;

const userController = {

    register:(req,res) => {
        res.render('register')
    },

    create: (req,res)=>{
            const errores = validationResult(req)
            if (errores.errors.length > 0) {
                return res.render('register', {
                    errors: errores.mapped(),
                    oldData: req.body
                });
                
            }
            db.Users.findOne ({
                where:{
                    email: req.body.email
                }
            })
            .then(function (userInDb) {
                if(userInDb) {
                    return res.render('register', {
                        errors: {
                            email:{
                                msg: 'Este correo ya está registrado'
                            }
                        },
                        oldData: req.body
                    })
                
            }else{
                let usuario = {
                    firstname: req.body.nombre,
                    lastname: req.body.apellido,
                    user_image: req.file?req.file.filename:' ',
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.contraseña, 10),
                    roles_ID: (String(req.body.email).includes('@zero.com'))? 1:2
                };
                console.log(usuario);
                db.Users.create(usuario)
                .then(function () {
                    res.redirect('login');                
                })
            }})
    },
    
    login:(req,res) => {
        res.render('login');
    },
    access: (req,res) =>{
        db.Users.findOne ({
            where:{
                email: req.body.email
            }
        })
        .then(function (users) {
                let confirm = bcrypt.compareSync(req.body.contraseña, users.password)
                if(confirm){
                    delete users.contraseña
                    req.session.userLogged = users
                    if(req.body.remember){
                        res.cookie('email', req.body.email, {maxAge: 1000*60*60})
                    }
                    return res.redirect('/')
                }
            else{
                return res.render('login',{
                    errors: {
                        contraseña: {
                            msg: 'La contraseña no es válida'
                        }
                    }
                })
            }
            
        }).catch(function () {
            return res.render('login',{
                errors: { 
                    email: { msg: 'Por favor, ingresá un email válido'},
                },
            })
        })},
        
    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
}


module.exports = userController;