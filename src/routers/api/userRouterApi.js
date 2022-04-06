const express = require('express');
const router = express.Router();

const userControllerApi = require('../../controllers/api/userControllerApi')

router.get('/', userControllerApi.listarUsers)
router.get('/:id', userControllerApi.userDetail)



module.exports = router;


