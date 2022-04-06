const path = require('path');
let db = require("../../database/models");

const  productController  = {
    productList : async (req,res) => {
        try{
            let arrayCantidadDeProductosPorGenero = []
            let productos = await db.Products.findAll({
                include:[{association:'Images'},{association:'Genres'},{association:'Format'}],
            })
            
            let usuarios = await db.Users.findAll()
            let countUsuarios = usuarios.length

            let gen = await db.Genres.findAll({include:[{association:'Products'}]}) 
            let countOfGenres = gen.length;

            let format = await db.Format.findAll()
            let countOfFormat = format.length
            
            for(const genero of gen){
                let objetoGeneroConCantidad = {
                    nombre: genero.name,
                    lengthDeProductos: genero.Products.length
                }
                arrayCantidadDeProductosPorGenero.push(objetoGeneroConCantidad)
            }

            let response = {
                meta: {
                    status : 200,
                    count: productos.length,
                    countOfGenres,
                    countOfFormat,
                    countProductByGenre: arrayCantidadDeProductosPorGenero,
                    countUsuariosTotal: countUsuarios, 
                    url: '/api/products'
                },
                data: {
                    list: []
                }
            };  
            productos.forEach((producto,i)=>{
                response.data.list.push({
                    id:producto.id,
                    name:producto.name,
                    price:producto.price,
                    stock:producto.stock,
                    stock_min:producto.stock_min,
                    stock_max:producto.stock_max,
                    description:producto.description,
                    artist:producto.artist,
                    visibility:producto.visibility,
                    genero:producto.Genres.name,
                    formato:producto.Format.name,
                    imagen:producto.Images.url
                })
            })  
            return res.json(response);
        }
        catch(error){
            res.send({ err: 'Not found' });
            console.log(error)
        }
    },

    detail: async (req,res) => {
        try{
            let producto = await db.Products.findByPk(req.params.id,{include:[{association:'Images'},{association:'Genres'},{association:'Format'}]})

            let response = {
                meta: {
                    status : 200,
                    url: '/api/products'
                },
                data: {
                    name:producto.name,
                    price:producto.price,
                    stock:producto.stock,
                    stock_min:producto.stock_min,
                    stock_max:producto.stock_max,
                    description:producto.description,
                    artist:producto.artist,
                    visibility:producto.visibility,
                    genero:producto.Genres.name,
                    formato:producto.Format.name,
                    imagen:producto.Images.url
                }
            };
            return res.json(response);
        }
        catch(error){
            res.send({ err: 'Not found' });
            console.log(error)
        }
        
    }
}


module.exports = productController;