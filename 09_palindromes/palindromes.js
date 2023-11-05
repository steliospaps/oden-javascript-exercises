const palindromes = function (word) {
  word=word.toLowerCase().replaceAll(/[^a-z0-9]/gi,"");
  const reverse=word.split("").reverse().join("");
  return reverse === word
};

// Do not edit below this line
module.exports = palindromes;
