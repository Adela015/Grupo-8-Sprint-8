const { log } = require('console');
const req = require('express/lib/request');
const { format } = require('path');
const path = require('path');
// const jsonDB = require ('../model/jsonDatabase');
// const productModel = jsonDB('products');
let db = require("../../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {

    productList:(req,res) => {
        let arrayAdela = []
        let arrayProductos = []
        db.Products.findAll(
            {
                include: [{association: "Format"}]
            }
        ) //
        .then(function (productos) {

            db.Genres.findAll({
                include: [{association: "Products"}]
            })
            .then(function(generos)
            {
                for(const genero of generos){
                    let objetoLimberth = {
                        nombre: genero.name,
                        lengthDeProductos: genero.Products.length
                    }
                    /*let objetoLimberth = {}
                    objetoLimberth[genero.name] = genero.Products.length*/
                    arrayAdela.push(objetoLimberth)
                }

                for(const producto of productos)
                {
                    let objetoProductos = {
                        id: producto.id,
                        name: producto.name,
                        description: producto.description,
                        arrayFormatos: producto.Format,
                        detail: '/api/product/'+producto.id
                    }

                    arrayProductos.push(objetoProductos)
                }


                let estructura = {
                    count: productos.length,
                    countByGenre: arrayAdela,
                    products: arrayProductos
                }
    
                return res.json(estructura)

            })

            /*let estructura = {
                count: productos.length,
                countByGenre: arrayAdela
            }

            return res.json(estructura)*/
        })
    }
}


module.exports = productController;