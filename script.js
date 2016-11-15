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
	'elaine':{
		'votingstyle':votingstyle.RANDOM,
		'choice':'',
		'receivedVotes':0,
	},
	'fiona':{
		'votingstyle':votingstyle.RANDOM,
		'choice':'',
		'receivedVotes':0,
	},
	'grace':{
		'votingstyle':votingstyle.RANDOM,
		'choice':'',
		'receivedVotes':0,
	},
	'hershey':{
		'votingstyle':votingstyle.RANDOM,
		'choice':'',
		'receivedVotes':0,
	},
	'iguana':{
		'votingstyle':votingstyle.RANDOM,
		'choice':'',
		'receivedVotes':0,
	},

}






let PollingPlace = {

	_getVote: function getVote(citizenName){
		let citizenObject = CITIZENS[citizenName];
		if(citizenObject.choice.length > 0){
			return citizenObject.choice;
		}
	
		let keys = Object.keys(CITIZENS);
		let randomSubscript = Math.floor(Math.random() * keys.length);
		return keys[randomSubscript];
	
	},

	_resetVoteCounts:function(){
		for(citizen in CITIZENS){
			CITIZENS[citizen].receivedVotes = 0;
		}
	},


	runElection: function(){
		PollingPlace._resetVoteCounts();
		
		for(citizen in CITIZENS){
			let nextChoice = PollingPlace._getVote(citizen);
			CITIZENS[nextChoice].receivedVotes += 1;
		}
		
		let maximumSoFar = {
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
		return maximumSoFar.name;
	}



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
	
	output('Running elections...');
	let winners = {};
	for(let i=0; i<20; i++){
		let winner = PollingPlace.runElection();
		if(!winners[winner]){
			winners[winner] = 0;
		}
		winners[winner] += 1;
	}
	output(JSON.stringify(winners));
	
});


