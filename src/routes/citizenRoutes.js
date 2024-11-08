const express = require('express');
const router = express.Router();
const { createCitizenPage, createCitizen, getHomePage, getCitizenPage,
    deleteCitizenPage, deleteCitizen, editCitizenPage, editCitizen,
    searchCitizen, searchCitizenRoom
} = require('../controllers/citizenController')

router.get('/', getHomePage)

router.get('/citizen', getCitizenPage)
router.post('/citizenSearch', searchCitizen)
router.post('/citizenRoomSearch', searchCitizenRoom)
router.get('/create-CitizenPage', createCitizenPage)
router.post('/create-Citizen', createCitizen)
router.get('/delete-CitizenPage/:id', deleteCitizenPage)
router.post('/delete-Citizen', deleteCitizen)
router.get('/edit-CitizenPage/:id', editCitizenPage)
router.post('/edit-Citizen', editCitizen)

module.exports = router