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

app.use(express.static('public'));
const PORT = 3000;
app.listen(PORT, function() {
    console.log("Server is listening on port " + PORT + ".");
}); 



//'&comp=' + encodeURIComponent(comp) +

app.get('/api/:comp', function(req, res, next){

   x('http://www.viadeo.com/fr/company/'+req.params.comp, 
	'.page-content',
	[{

	nomEntreprise:'.company-name',
	img:'img@src',
	description:'.pan-desc-description',
	nbrEmp:'div.element-value.gu.gu-last',
	followed:'.hide-s',
	addr:'.pan-desc-map',
	org:'div:nth-child(2) .element-value',

  webS: '.element-value a@href',
  twitter:'.mbs:nth-child(4) a@href', 


person: x('http://www.viadeo.com/fr/company/unicef','#pan-emp .pan-employees .pan-empployee',
[{
	nomP:'.pan-emp-name',
	jobP:'.pan-emp-pos',
	depuis:'.pan-emp-age',
	imgm:'img@src'
	
}])
	// twitter:'.element-value a@href:nth-of-type(2)'
}]).write().pipe(res);

});