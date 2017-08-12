'use strict';
const request =require('request');
const Xray=require('x-ray');
var x = Xray();



// Partie Entreprise 
x('http://www.viadeo.com/fr/company/unicef', 
	'.page-content',
	[{

	nomEntreprise:'.company-name',
	img:'img@src',
	description:'.pan-desc-description',
	nbrEmp:'div.element-value.gu.gu-last',
	followed:'.hide-s',
	addr:'.pan-desc-map',

	org:'.pan-desc-footer-element @element-value',

  webS: '.element-value a@href',
  twitter:'.mbs:nth-child(4) a@href', // or use div.element-value.gu.gu-last a@href


person: x('http://www.viadeo.com/fr/company/unicef','#pan-emp .pan-employees .pan-empployee',
[{
	nomP:'.pan-emp-name',
	jobP:'.pan-emp-pos',
	depuis:'.pan-emp-age'
	
}])
}]).write('test.json')
