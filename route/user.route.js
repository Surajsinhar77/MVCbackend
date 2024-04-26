const express = require('express');
const {signup} = require('../controller/user.controller.js');
const router = express.Router();


router.post('/user/signup', signup);

router.post('/user/login', (req, res)=>{

});


export default router;