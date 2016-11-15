"use strict;"

let votingstyle = {
	'CONSTANT':'CONSTANT',
	'RANDOM':'RANDOM',
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
	'dickinson':{
		'votingstyle':votingstyle.RANDOM,
		'choice':'',
		'receivedVotes':0,
	},


}



function getVote(citizenName){
	let citizenObject = CITIZENS[citizenName];
	if(citizenObject.choice.length > 0){
		return citizenObject.choice;
	}
	
	let keys = Object.keys(CITIZENS);
	let randomSubscript = Math.floor(Math.random() * keys.length);
	return keys[randomSubscript];
	
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
		// let nextChoice = CITIZENS[citizen].choice;
		let nextChoice = getVote(citizen);
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


