const express= require('express');

const router = express.Router();
const path = require('path');

const rootPath = require('../utils/rootPath');

router.use('/social',(req, res, next) => {
    res.sendFile(path.join(rootPath,'views','social.html'));
});

module.exports = router;
