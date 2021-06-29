const express = require('express');
const router = express.Router();

const snippetsRoutes = require('./tiket');

router.use("/tiket", tiketRoutes);


module.exports = router;
