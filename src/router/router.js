const express = require('express');
const router = express.Router();
const { getAlbum } = require('../controller/albumPhotoController');


router.get('/', function (req, res) {   //This is the landing router
    return res.status(200).json({
        status: 200,
        message: 'Welcome and get ready for the photos'
    });
});

router.get('/api/albums/:id', getAlbum);  // The router of getting alpum photos by id

module.exports = router;