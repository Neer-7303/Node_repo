const express= require('express');

const router = express.Router();
const path = require('path');
const rootPath = require('../utils/rootPath');

router.use('/home',(req, res, next) => {
    res.sendFile(path.join(rootPath,'views','navig.html'));
});

module.exports = router;
