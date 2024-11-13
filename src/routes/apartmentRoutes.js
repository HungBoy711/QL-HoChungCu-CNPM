const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getApartmentPage, getApartmentDetail, editApartmentPage, editApartment,
    createApartment, createApartmentPage, deleteApartment, deleteApartmentPage
} = require('../controllers/apartmentController')

router.get('/apartment', verifyToken, getApartmentPage)
router.get('/apartmentDetail/:ApartID', verifyToken, getApartmentDetail)
router.get('/create-ApartmentPage', createApartmentPage)
router.post('/create-Apartment', createApartment)
router.get('/delete-ApartmentPage/:id', deleteApartmentPage)
router.post('/delete-Apartment', deleteApartment)
router.get('/edit-ApartmentPage/:id', editApartmentPage)
router.post('/edit-Apartment', editApartment)

module.exports = router