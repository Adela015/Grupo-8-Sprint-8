

    

    let form = document.querySelector('form');
    let nombre = document.getElementById('name');
    let nombreError = document.getElementById('error-nombre')
    let artista = document.getElementById('artist');
    let artistaError = document.getElementById('error-artista')
    let descripcion = document.getElementById('description');
    let descripcionError = document.getElementById('error-descripcion')
    let precio = document.getElementById('price');
    let precioError = document.getElementById('error-precio')
    let imagen = document.getElementById('image');
    let imagenError = document.getElementById('error-imagen')
    let button = document.querySelector('button');

    console.log('Hola')
    console.log(nombre)


    // form.addEventListener('submit', function(){

    //     let errores = {}

    //     if (nombre.value.length == 0){
    //         errores.nombre = 'Debes ingresar un nombre para el producto'
    //     } else if (nombre.value.length < 5){
    //         errores.nombre = 'El nombre debe tener más de 5 caracteres'
    //     }

    //     if (artista.value.length == 0){
    //         errores.artista = 'Debes ingresar un nombre para el artista o marca'
    //     } else if (artista.value.length < 5){
    //         errores.artista = 'El artista o marca debe tener más de 5 caracteres'
    //     }

    //     if (descripcion.value.length == 0){
    //         errores.descripcion = 'Debes agregar una descripcion al producto'
    //     } else if (descripcion.value.length < 20){
    //         errores.descripcion = 'La descripción debe tener al menos 20 caracteres'
    //     }

    //     if(precio.value.length == 0){
    //         errores.precio = 'Debes agregar un precio al producto'
    //     }

    //     if(imagen.value === null){
    //         errores.imagen = 'Debes agregar una imagen'
    //     }

    //     if(Object.keys(errores).length >= 1 ){

    //         e.preventDefault();

    //         nombreError.innerHTML = '<li>' + errores.nombre + '</li>'
    //         artistaError.innerHTML = '<li>' + errores.artista + '</li>'
    //         descripcionError.innerHTML = '<li>' + errores.descripcion + '</li>'
    //         precioError.innerHTML = '<li>' + errores.precio + '</li>'
    //         imagenError.innerHTML = '<li>' + errores.imagen + '</li>'

    //     } else {
            
    //         form.submit()

    //     }


    // })

