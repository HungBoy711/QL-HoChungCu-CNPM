const express = require('express');
const router = express.Router();

const { getAssetCatPage, createAssetCatPage, createAssetCat
} = require('../controllers/assetController')

router.get('/assetCategory', getAssetCatPage)
router.get('/create-AssetCatPage', createAssetCatPage)
router.post('/create-AssetCat', createAssetCat)

module.exports = router;