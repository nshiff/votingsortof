"use strict;"

let votingstyle = {
	'CONSTANT':'CONSTANT',
}




let CITIZENS = {

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
	
	for(citizen in CITIZENS){
		let nextChoice = CITIZENS[citizen].choice;
		CITIZENS[nextChoice].receivedVotes += 1;
	}
	
	var maximumSoFar = {
		'name':'',
		'receivedVotes':0,
	}
	for(citizen in CITIZENS){
		
		let receivedVotes = CITIZENS[citizen].receivedVotes;
		console.log(citizen + ':' + receivedVotes);

		if(receivedVotes > maximumSoFar.receivedVotes){
			maximumSoFar.name = citizen;
			maximumSoFar.receivedVotes = receivedVotes;
		}
	}
	console.log('Winner:');
	console.log(maximumSoFar);
	
	
});


