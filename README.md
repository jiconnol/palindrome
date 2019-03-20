Hello world,
this is the README file so that I may be able to introduce you to my code and to show you how best to use my program. Enjoy!


$ npm install --global mhartl-palindrome
$ vim test.js
let Phrase = require("mhartl-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
