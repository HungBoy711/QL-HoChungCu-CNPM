const express = require('express');
const router = express.Router();

const { getAssetCatPage, createAssetCatPage, createAssetCat
    , editAssetCatPage, editAssetCat,
    deleteAssetCatPage, deleteAssetCat,

} = require('../controllers/assetCatController')


router.get('/assetCategory/', getAssetCatPage)
router.get('/create-AssetCatPage', createAssetCatPage)
router.post('/create-AssetCat', createAssetCat)
router.get('/edit-AssetCatPage/:id', editAssetCatPage)
router.post('/edit-AssetCat', editAssetCat)
router.get('/delete-AssetCatPage/:id', deleteAssetCatPage)
router.post('/delete-AssetCat', deleteAssetCat)
module.exports = router;