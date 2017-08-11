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
	twitter:'.span .element-title a@href'


	
}]).write('result.json')


//Partie employées


x('http://www.viadeo.com/fr/company/ubisoft', 
	'#pan-emp .pan-employees .pan-empployee',
	[{
	nom:'.pan-emp-name',
	job:'.pan-emp-pos',
	depuis:'.pan-emp-age'
	
}]).write('test.json')









var Xray = require('x-ray');
var x = Xray();

x('http://stackoverflow.com/questions', '#questions .question-summary .summary', [{

  title: 'h3',
  link: 'h3 a@href',
  details: x('h3 a@href', {
    title: 'h1',
    question: '.question .post-text',
  })

}])
(function(err, obj) {

  console.log(err);
  console.log(obj);

})