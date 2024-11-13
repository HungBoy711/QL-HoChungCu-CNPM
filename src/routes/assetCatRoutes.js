const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getAssetCatPage, createAssetCatPage, createAssetCat
    , editAssetCatPage, editAssetCat,
    deleteAssetCatPage, deleteAssetCat,

} = require('../controllers/assetCatController')


router.get('/assetCategory/', verifyToken, getAssetCatPage)
router.get('/create-AssetCatPage', createAssetCatPage)
router.post('/create-AssetCat', createAssetCat)
router.get('/edit-AssetCatPage/:id', editAssetCatPage)
router.post('/edit-AssetCat', editAssetCat)
router.get('/delete-AssetCatPage/:id', deleteAssetCatPage)
router.post('/delete-AssetCat', deleteAssetCat)
module.exports = router;