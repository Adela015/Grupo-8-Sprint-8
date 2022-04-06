const express = require('express');
const mainController = require('../controllers/mainController');
const imageRegisterMulter = require ('../middlewares/imageRegisterMulter')
const router = express.Router();


router.get('/', mainController.index);  //http://localhost:3000/

router.get('/about', mainController.about); //http://localhost:3000/about

router.get('/newsLetter', mainController.newsLetter); //http://localhost:3000/newsLetter

router.get('/profile', mainController.profile);

router.get('/profileEdit/:id', mainController.profileEdit);

router.put('/profileEdit/:id', imageRegisterMulter.single('avatar'), mainController.edit);

module.exports = router;