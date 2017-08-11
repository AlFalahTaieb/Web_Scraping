var express = require('express');
var app = express();
var fs =require('fs');
const request =require('request');
const Xray=require('x-ray');
var x = Xray();

// app.get('/',function(req,res){
// 	fs.readFileSync('test.json')
// })


// var content = fs.readFileSync('test.json','utf8');
// console.log(content)

const PORT = 3000;
app.listen(PORT, function() {
    console.log("Server is listening on port " + PORT + ".");
}); // the callback function simply runs once the server starts

app.get('/api/', function(req, res, next){

   x('http://www.viadeo.com/fr/company/ubisoft', 
	'.page-content',
	[{

	name:'.company-name',
	img:'img@src',
	bio:'.pan-desc-description',
	
	followed:'.hide-s',
	addr:'.pan-desc-map',

	org:'.pan-desc-footer-element @element-value',
	link: '.element-value a@href',
	// twitter:'.element-value a@href:nth-of-type(2)'


	
}])
.write().pipe(res);

});