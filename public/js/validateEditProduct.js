let form = document.querySelector('form');
let nombre = document.querySelector('#product-name');
let errorNombre = document.querySelector('#error-nombre')

let artista = document.querySelector('#artist');
let errorArtista = document.querySelector('#error-artista')

let descripcion = document.querySelector('#product-description');
let errorDescripcion = document.querySelector('#error-descripcion')

let precio = document.querySelector('#product-price');
let errorPrecio = document.querySelector('#error-precio')

let imagen = document.querySelector('#productImage');
let button = document.querySelector('#buttonSubmit');
let ulErrores = document.querySelector('div.errores-front ul')

window.addEventListener('load', function(){

    console.log('script funcionando')


    nombre.addEventListener('focus', function() {
        errorNombre.innerHTML = ''
    })

    nombre.addEventListener('blur', function() {
        if (nombre.value === ''){
            errorNombre.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })


    artista.addEventListener('focus', function() {
        errorArtista.innerHTML = ''
    })

    artista.addEventListener('blur', function() {
        if (artista.value === ''){
            errorArtista.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })


    descripcion.addEventListener('focus', function() {
        errorDescripcion.innerHTML = ''
    })

    descripcion.addEventListener('blur', function() {
        if (descripcion.value === ''){
            errorDescripcion.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })


    precio.addEventListener('focus', function() {
        errorPrecio.innerHTML = ''
    })

    precio.addEventListener('blur', function() {
        if (precio.value === ''){
            errorPrecio.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })



    
    button.addEventListener('click', function(e){

        

        let errores = [];
        


        if (nombre.value.length == 0) {
            errores.push('Debes ponerle un nombre al producto')
        } else if (nombre.value.length < 5){
            errores.push('El nombre del producto debe tener más de 5 caracteres')
        }


        if (artista.value.length == 0) {
            errores.push('Debes ponerle un nombre al artista o marca')
        } else if (artista.value.length < 5){
            errores.push('El nombre del artista o marca debe tener más de 5 carácteres')
        }


        if (descripcion.value.length == 0) {
            errores.push('La descripción no puede estar vacía')
        } else if (descripcion.value.length < 20){
            errores.push('La descripción debe tener al menos 20 caracteres')
        }


        if(precio.value.length == 0){
            errores.push('El producto tiene que tener un precio')
        }




        if(errores.length > 0){

            e.preventDefault()

            ulErrores.innerHTML = ''
            
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }

        } else {
            button.submit()
            console.log('entré por acá!!!!!!!!')
        }

    })

})