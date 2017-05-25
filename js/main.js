"use strict";

requirejs(["helper/util","jquery"], function(util, $) {
	var valeur,
		blockquote,
		button,
		tabCitations = ["When nine hundred years old you reach, look as good you will not.", "Truly wonderful, the mind of a child is.", "A Jedi uses the Force for knowledge and defense, never for attack.", "Adventure. Excitement. A Jedi craves not these things.", "Judge me by my size, do you?", "Fear is the path to the dark side…fear leads to anger…anger leads to hate…hate leads to suffering.", "Wars not make one great.", "Luminous beings are we…not this crude matter.", "Do. Or do not. There is no try.", "Patience you must have my young padawan.", "Feel the force!", "You must unlearn what you have learned.", "Many of the truths that we cling to depend on our point of view.", "May the Force be with you.", "You will find only what you bring in."];

	function remplirLaBulleDeYoda () {
		valeur = Math.floor(Math.random() * 15);
		//valeur = 0;
		console.log(valeur);
		//console.log(quote);
		switch(valeur){//valeur de 0 à 7 qui à été génére par le mathrandom juste en haut
			case 0 ://si c'est 1 alors...
			blockquote.text('"'+tabCitations[0]+'"');//affiche la valeur du tableau index 0
			break;	
			case 1 :
			blockquote.text('"'+tabCitations[1]+'"');
			break;
			case 2 :
			blockquote.text('"'+tabCitations[2]+'"');
			break;
			case 3 :
			blockquote.text('"'+tabCitations[3]+'"');
			break;
			case 4 :
			blockquote.text('"'+tabCitations[4]+'"');
			break;
			case 5 :
			blockquote.text('"'+tabCitations[5]+'"');
			break;
			case 6 :
			blockquote.text('"'+tabCitations[6]+'"');
			break;
			case 7 :
			blockquote.text('"'+tabCitations[7]+'"');
			break;
			case 8 :
			blockquote.text('"'+tabCitations[8]+'"');
			break;
			case 9 :
			blockquote.text('"'+tabCitations[9]+'"');
			break;
			case 10 :
			blockquote.text('"'+tabCitations[10]+'"');
			break;
			case 11 :
			blockquote.text('"'+tabCitations[11]+'"');
			break;
			case 12 :
			blockquote.text('"'+tabCitations[12]+'"');
			break;
			case 13 :
			blockquote.text('"'+tabCitations[13]+'"');
			break;
			case 14 :
			blockquote.text('"'+tabCitations[14]+'"');
			break;
			default: //none
			}
		}

	function quoteStart(){
		$('.button').click(function(){
			remplirLaBulleDeYoda();
		});
	}

	function initialize(){
		blockquote = $('#blockquote');
		button = $('.button');
	}

	$(document).ready(function () {
		initialize();
		quoteStart();
	});
});
