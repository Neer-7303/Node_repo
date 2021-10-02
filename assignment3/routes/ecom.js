const express= require('express');

const router = express.Router();
const path = require('path');
const rootPath = require('../utils/rootPath');

router.use('/ecom',(req, res, next) => {
    res.sendFile(path.join(rootPath,'views','ecom.html'));
});

module.exports = router;