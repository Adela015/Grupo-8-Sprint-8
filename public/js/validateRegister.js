window.addEventListener('load', function(){

    
    let form = document.querySelector('form.form-register')
    let nombre = document.querySelector('#nombre')
    let errorNombre = document.querySelector('#error-nombre')

    let apellido = document.querySelector('#apellido')
    let errorApellido = document.querySelector('#error-apellido')

    let email = document.querySelector('#email')
    let errorEmail = document.querySelector('#error-email')

    let password = document.querySelector('#contraseña')
    let errorPassword = document.querySelector('#error-contraseña')

    let nacimiento = document.querySelector('#nacimiento')
    let avatar = document.querySelector('#avatar')

    let ulErrores = document.querySelector('div.errores-front ul')


    nombre.addEventListener('focus', function() {
        errorNombre.innerHTML = ''
    })

    nombre.addEventListener('blur', function() {
        if (nombre.value === ''){
            errorNombre.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })


    apellido.addEventListener('focus', function() {
        errorApellido.innerHTML = ''
    })

    apellido.addEventListener('blur', function() {
        if (apellido.value === ''){
            errorApellido.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })


    email.addEventListener('focus', function() {
        errorEmail.innerHTML = ''
    })


    email.addEventListener('blur', function() {
        if (email.value === ''){
            errorEmail.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })


    password.addEventListener('focus', function() {
        errorPassword.innerHTML = ''
    })


    password.addEventListener('blur', function() {
        if (password.value === ''){
            errorPassword.innerHTML += '<li> Este campo no puede estar vacío </li>'
        }
    })



    form.addEventListener('submit', function(e){

        let errores = [];

        

        if (nombre.value === '') {
            errores.push('Debes ingresar un nombre')
        } else if (nombre.value.length < 3) {
            errores.push('El nombre debe tener al menos 2 caracteres ')
        }


        
        
        if (apellido.value === '') {
            errores.push('Debes ingresar un apellido')
        } else if (nombre.value.length < 3) {
            errores.push('El apellido debe tener al menos 2 caracteres ')
        }


        let regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (email.value === '' || (email.value== null)) {
            errores.push('Debes ingresar un email')
        } else if (!email.value.match(regexEmail)){
            errores.push('El email debe ser válido')
        }

        
        if (password.value === ''){
            errores.push('Debes ingresar una contraseña')
        } else if (password.value.length < 8){
            errores.push('La contraseña debe tener al menos 8 caracteres')
        }
        
        

        if (errores.length > 0) {
            e.preventDefault();

            ulErrores.innerHTML = ''
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        } else {
            form.submit()
        }

    })
})