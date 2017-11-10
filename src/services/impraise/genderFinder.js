FemaleNames = require('./nameFemales.json');
MaleNames = require('./nameMales.json');

const find = function (firstName) {
  var toMatch = firstName.toLowerCase();

  var isMale = (MaleNames.indexOf(toMatch) != -1);
  if (isMale) {
    return {
      pronoun: "he",
      pronounCaps: "He",
      personalPronoun: "him",
      personalPronounCaps: "Him",
      possessive: "his",
      possessiveCaps: "His",
      pastPronoun: "himself",
      pastPronounCaps: "Himself"
    }
  }
  
  var isFemale = (FemaleNames.indexOf(toMatch) != -1);
  if (isFemale) {
    return {
      pronoun: "she",
      pronounCaps: "She",
      personalPronoun: "her",
      personalPronounCaps: "Her",
      possessive: "her",
      possessiveCaps: "Her",
      pastPronoun: "herself",
      pastPronounCaps: "Herself"
    }
  }

  return {
    pronoun: "it",
    pronounCaps: "it",
    personalPronoun: "it",
    personalPronounCaps: "It",
    possessive: "it",
    possessiveCaps: "It",
    pastPronoun: "itself",
    pastPronounCaps: "Itself"
  }
};



module.exports = {
  find: find
};