const express = require('express');
const router = express.Router();
const productControllerApi = require('../../controllers/api/productControllerApi')

router.get('/:id',productControllerApi.detail);

router.get('/',productControllerApi.productList);



module.exports = router;