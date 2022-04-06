let db = require("../database/models");
const path = require('path')


const mainController = {

    index: (req,res) => {
        res.render('index');
    },
    about: (req,res) => {
        res.render('about');
    },
    newsLetter: (req,res) => {
        res.render('newsLetter');
    },
    profile: (req,res) => {
        res.render('profile');
    },
    profileEdit:(req, res) => {
        res.render('profileEdit', {oldData: req.session.userLogged})
    },
    edit: (req,res) => {
        console.log("-------------------------------------------------------")
        
        console.log(req.body.nombre)
        console.log(req.body.firstname)
        console.log(req.body.apellido)
        console.log(req.params.id);
        db.Users.update({
            firstname: req.body.nombre,
            lastname: req.body.apellido,
            user_image: (req.file)?req.file.filename: req.session.userLogged.user_image
        },{where: {
            id: req.params.id
        }})
        .then(function (respuesta) {
            db.Users.findOne({
                where:{
                    email: req.session.userLogged.email
                }
            })
            .then(function (edicion) {
                req.session.userLogged = edicion
                res.redirect('/profile')
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

}


module.exports = mainController;