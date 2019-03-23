module.exports = Phrase;

//Adds 'reverse' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

//.processor function: return lower case strings
this.processor = function() {
  return this.content.toLowerCase();
}

// Returns content processed for palindrome testing.
this.processedContent = function processedContent() {
  return this.letters().toLowerCase();
}

//Returns the letters in the content.
this.letters = function letters() {
return (this.content.match(/[a-z]/gi) || []).join("");
}


//Returns true for a palindrome, false otherwise.
this.palindrome = function palindrome () {
  return this.processedContent() ===
  this.processedContent().reverse();
  }

//.louder method: Returns string in all caps
this.louder = function louder () {
  return this.content.toUpperCase();
  }
}

//    NEW OBJECT

// Defines a TranslatePhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

// Returns translation processed for palindrome testing.
this.processedContent = function processedContent() {
  return this.processor(this.translation);
  }
}
TranslatedPhrase.prototype = new Phrase();
