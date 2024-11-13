const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { createCitizenPage, createCitizen, getCitizenPage,
    deleteCitizenPage, deleteCitizen, editCitizenPage, editCitizen,
    searchCitizen, searchCitizenRoom
} = require('../controllers/citizenController')


router.get('/citizen', verifyToken, getCitizenPage)
router.post('/citizenSearch', searchCitizen)
router.post('/citizenRoomSearch', searchCitizenRoom)
router.get('/create-CitizenPage', createCitizenPage)
router.post('/create-Citizen', createCitizen)
router.get('/delete-CitizenPage/:id', deleteCitizenPage)
router.post('/delete-Citizen', deleteCitizen)
router.get('/edit-CitizenPage/:id', editCitizenPage)
router.post('/edit-Citizen', editCitizen)

module.exports = router