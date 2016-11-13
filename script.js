"use strict;"

let VotingStyle = {
	'CONSTANT':'CONSTANT',
}

let Voter = function(id, votingStyle, choice){
	this._id = id;
	this._votingStyle = votingStyle;
	this._choice = choice;
	
	this.getId = function(){
		return this._id;
	}
	this.getVote = function(){
		if(this._choice.length < 1){
			// VotingStyle.RANDOM
			let populationSubscript = Math.floor(Math.random() * POPULATION.length);
			this._choice = POPULATION[populationSubscript];
		}
		return this._choice;

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
	
	
	
	
	let v = new Voter('alice', VotingStyle.CONSTANT, 'bobo');
	console.log(v);
	console.log(v.getVote());
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	let winner = 'charlie';
	output('Who did the bots elect?');
	output(winner);
});


