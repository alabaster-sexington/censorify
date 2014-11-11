var censoredWords = ["sad", "mad", "bad"];
var customCensoredWords = new Array();

function censor(inStr) {
	//first, replace words in passed in string with default bad words
	for(idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], "****");
		//console.log(inStr);
	}

	//now, replace words in passed in string with custom (self added) bad words
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}

	//this is the final result
	return inStr;

}

function addCensoredWord(word) {
	customCensoredWords.push(word);
}

function getCensoredWords() {
	return censoredWords.concat(customCensoredWords);
}

//for node.js...

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;

