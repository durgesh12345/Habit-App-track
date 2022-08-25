const express = require('express');

const router = express.Router();
console.log('router loded');

// using express create A CONTROLLER and providing routes

const homeController = require('../controllers/home_Controller'); 

router.get('/home', homeController.home); 

const calController = require('../controllers/calender_control'); 

router.get('/calender1',calController.calender1);

router.get('/daydata',homeController.daydata);

module.exports = router;







 






