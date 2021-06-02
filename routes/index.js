const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/addingtodatabase',homeController.adding);
router.post('/deletingfromdatabase',homeController.deleting);

module.exports = router;
