const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getApartmentPage, getApartmentDetail, editApartment,
    createApartment, deleteApartment,
} = require('../controllers/apartmentController')

router.get('/apartment', verifyToken, getApartmentPage)
router.get('/apartmentDetail/:ApartID', verifyToken, getApartmentDetail)
router.post('/create-Apartment', createApartment)
router.post('/delete-Apartment', deleteApartment)
router.post('/edit-Apartment', editApartment)

module.exports = router