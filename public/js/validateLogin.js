window.addEventListener('load', function(){


    let form = document.querySelector('form')

    let correo = document.querySelector('#correo')
    let errorCorreo = document.querySelector('#error-correo')

    let contraseña = document.querySelector('#contra')
    let errorContraseña = document.querySelector('#error-contraseña')

    let erroresFront = document.querySelector('div.errores-front ul')
    let button = document.querySelector('#submit')



    correo.addEventListener('focus', function() {
        errorCorreo.innerHTML = ''
    })

    correo.addEventListener('blur', function() {
        if (correo.value === ''){
            errorCorreo.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })

    contraseña.addEventListener('focus', function() {
        errorContraseña.innerHTML = ''
    })

    contraseña.addEventListener('blur', function() {
        if (contraseña.value === ''){
            errorContraseña.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })




    button.addEventListener('click', function(e){

        let errores = [];

        

        if (correo.value === '' || correo.value === null){
            errores.push('Debes ingresar un correo')
        } 

        if (contraseña.value === '' || contraseña.value === null){
            errores.push('Debes ingresar una contraseña')
        }


        if (errores.length > 0) {
        
            e.preventDefault();
            erroresFront.innerHTML = ''
            for (let i = 0; i < errores.length; i++) {
                erroresFront.innerHTML += '<li>' + errores[i] + '</li>'

        } 

        } else {

            button.submit()

        }



    })


})