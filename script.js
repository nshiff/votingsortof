"use strict;"

let votingstyle = {
	'CONSTANT':'CONSTANT',
}




let INPUT = {

	'alice':{
		'votingstyle':votingstyle.CONSTANT,
		'choice':'bobo',
		'receivedVotes':0,
	},
	'bobo':{
		'votingstyle':votingstyle.CONSTANT,
		'choice':'bobo',
		'receivedVotes':0,
	},
	'charlie':{
		'votingstyle':votingstyle.CONSTANT,
		'choice':'charlie',
		'receivedVotes':0,
	},




}




// ----------------- MAIN -----------------

function output(message){
	let selector_output = '#output';
	jQuery(selector_output).append(message);
	jQuery(selector_output).append('<br>');
}
jQuery(document).ready(function(){
	output('=== It\'s voting! ===');
	output('...sort of');
	output('');
	
	
	

	
	
	let v = INPUT.alice;
	console.log(v.votingstyle);
	console.log(v.choice);
	console.log(v.receivedVotes);
	v.receivedVotes += 1;
	console.log(v.receivedVotes);
	
	
});


