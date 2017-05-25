"use strict";

requirejs(["helper/util"], function(util) {
	var valeur,
		button,
		yoda = ["Bonnes relations avec les Wookies, j'entretiens",
				"Quand 900 ans comme moi tu auras, moins en forme tu seras.",
				"La peur est le chemin vers le côté obscur : la peur mène à la colère, la colère mène à la haine, la haine ... mène à la souffrance.",
				"A vos intuitions vous fier, il faut.",
				 "Difficile à voir. Toujours en mouvement est l'avenir.",
				 "Le côté obscur de la Force, redouter tu dois.",
				 "Fais le ou ne le fais pas. Il n'y a pas d'essai."];

	function yodaStart () {
		valeur = Math.floor(Math.random() * 6);
		console.log(valeur);
		switch(valeur){//valeur de 0 à 7 qui à été génére par le mathrandom juste en haut
			case 0 ://si c'est 1 alors...
			quote.text(yoda[0]);//affiche la valeur du tableau index 0
			break;
			case 1 :
			quote.text(yoda[1]);
			break;
			case 2 :
			quote.text(yoda[2]);
			break;
			case 3 :
			quote.text(yoda[3]);
			break;
			case 4 :
			quote.text(yoda[4]);
			break;
			case 5 :
			quote.text(yoda[5]);
			break;
			case 6 :
			quote.text(yoda[6]);
			break;
			default: //none
			}
		}

	function quoteStart(){
		$('.button').click(function(){
			// console.log("clique !");
			yodaStart()
			$('blockquote').prepend($('"' + yoda + '"'));
		});
	}

	function initialize(){
		quote = $('.quote');
		button = $('.button');
	}

	$(document).ready(function () {
		initialize();
		quoteStart();
	});
});



/*
*/
