'use strict';
const request =require('request');
const Xray=require('x-ray');
var x = Xray();



// Partie Entreprise 
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
	// twitter:'.element-valuea@href:nth-of-type(2)'


person: x('http://www.viadeo.com/fr/company/ubisoft','#pan-emp .pan-employees .pan-empployee',
[{
	nom:'.pan-emp-name',
	job:'.pan-emp-pos',
	depuis:'.pan-emp-age'
	
}])
}]).write('test.json')
