'use strict';
const request =require('request');
const Xray=require('x-ray');
var x = Xray();



// x('http://www.viadeo.com/fr/company/unicef', 
// 	'#pan-emp .pan-employees .pan-employee',
// 	'.company-header .company-info', 
// 	[{
// 	nom:'.pan-emp-name',
// 	job:'.pan-emp-pos',
// 	depuis:'.pan-emp-age',
// 	company:'img@src',
	
// }]).write('result.json')
const company='unicef';
x('http://www.viadeo.com/fr/company/unicef', 
	'.page-content',
	[{
	// nom:'.pan-emp-name',
	// job:'.pan-emp-pos',
	// depuis:'.pan-emp-age',
	// company:'.company-name',
	img:'img@src',
	bio:'.pan-desc-description',
	// nbremp:'.pan-desc-footer-element #element-value',
	org:'.pan-desc-footer-element @element-value',
	link: '.element-value a@href',
	twitter:'.element-value a@href'


	
}]).write('result.json')






// x('http://www.viadeo.com/fr/company/unicef', ['p'])


// x('https://www.meetup.com/fr-FR/BellevueJS/members/', 
// 	'.memberInfo'
// ,[{
// 	name:'.memName'
// 	// job:'#profile #overview-summary-current ol'
// }])
// .write('result.json')



// var Xray = require('x-ray');
// var x = Xray();

// x('http://stackoverflow.com/questions', '#questions .question-summary .summary', [{

//   title: 'h3',
//   link: 'h3 a@href',
//   details: x('h3 a@href', {
//     title: 'h1',
//     question: '.question .post-text',
//   })

// }])
// (function(err, obj) {

//   console.log(err);
//   console.log(obj);

// })