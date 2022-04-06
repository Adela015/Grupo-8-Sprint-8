const path = require('path');
let db = require("../../database/models");  //Fijate q esto esta mal importado xd

const User = db.Users; //forma corta y larga de declarar el db
const Rol = db.Roles;

const userController = {
    listarUsers: async (req, res) =>{
        try{
            let users = await db.Users.findAll()
            let response = {
                meta: {
                    status : 200,
                    url: '/api/products'
                },
                data:{
                    list:[]
                } 
            }
            
            users.forEach(user => {
                response.data.list.push({
                    id:user.id,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email:user.email,
                    password:user.password,
                    img:user.user_image,
                    rol:user.roles_ID
                })
                
            })
            return res.json(response);
        }
        catch(error){
            res.send({ err: 'Not found' });
            console.log(error)
        }
        
    },
    userDetail: async (req,res) =>{
        try{
            let user = await db.Users.findByPk(req.params.id)
            
            let response = {
                meta: {
                    status : 200,
                    url: '/api/products'
                },
                data:{
                    id:user.id,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email:user.email,
                    password:user.password,
                    img:user.user_image,
                    rol:user.roles_ID
                } 
            }
            return res.json(response);
        }
        catch(error){
            res.send({ err: 'Not found' });
            console.log(error)
        }
    }
}


module.exports = userController;