let db = require("../database/models");

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false

    let emailsInCookie = req.cookies.userEmail

    // db.Users.findOne({
    //     where: {
    //         email: emailsInCookie
    //     }
    // })
    // .then(function (userFromCoike) {
    //     req.session.userLogged = userFromCoike
    // })



    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    next()
}

module.exports = userLoggedMiddleware;
