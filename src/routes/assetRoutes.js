const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { createAssetPage, createAsset,
    editAssetPage, editAsset,
    deleteAssetPage, deleteAsset,
    getAssetPage
} = require('../controllers/assetController')

router.get('/asset/:AssetCatID', verifyToken, getAssetPage)
router.get('/create-AssetPage', createAssetPage)
router.post('/create-Asset', createAsset)
router.get('/asset/edit-AssetPage/:id', editAssetPage)
router.post('/edit-Asset', editAsset)
router.get('/asset/delete-AssetPage/:id', deleteAssetPage)
router.post('/delete-Asset', deleteAsset)

module.exports = router;