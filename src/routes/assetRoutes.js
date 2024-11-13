const express = require('express');
const router = express.Router();
const { createAssetPage, createAsset,
    editAssetPage, editAsset,
    deleteAssetPage, deleteAsset,
    getAssetPage
} = require('../controllers/assetController')

router.get('/asset/:AssetCatID', getAssetPage)
router.get('/create-AssetPage', createAssetPage)
router.post('/create-Asset', createAsset)
router.get('/asset/edit-AssetPage/:id', editAssetPage)
router.post('/edit-Asset', editAsset)
router.get('/asset/delete-AssetPage/:id', deleteAssetPage)
router.post('/delete-Asset', deleteAsset)

module.exports = router;