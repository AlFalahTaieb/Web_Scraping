const express = require('express');
const  app = express();

const router = express.Router()

router.get('/api',function (req,res) {
	// body...
res.send({type:'GET'})
})