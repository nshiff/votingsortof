"use strict;"

var Voter = function(id, votingStyle, choice){
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
	jQuery('#output').append(message);
	jQuery('#output').append('<br>');
}
output('=== It\'s voting! ===');
output('...sort of');
output('');



let winner = 'charlie';
output('Who did the bots elect?');
output(winner);



