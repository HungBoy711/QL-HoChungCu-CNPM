const express = require('express');
const AssetCategory = require('../models/assetCategory')

const getAssetCatPage = async (req, res) => {
    let results = await AssetCategory.find({});
    return res.render('asset/assetCategory.ejs', { listAssetCats: results })
}

const createAssetCatPage = (req, res) => {
    return res.render('asset/create-AssetCat.ejs')
}
const createAssetCat = async (req, res) => {
    let AssetCatID = req.body.AssetCatID
    let Name = req.body.Name
    let Description = req.body.Description
    await AssetCategory.create({
        AssetCatID: AssetCatID,
        Name: Name,
        Description: Description,
    }
    )
    res.redirect('/assetCategory')
}
module.exports = {
    getAssetCatPage, createAssetCatPage, createAssetCat
}