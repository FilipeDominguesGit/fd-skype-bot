const GenderFinder = require('./genderFinder.js');
const ReviewGenerator = require('./reviewGenerator.js');

const ImpraiseService = function () {
};

ImpraiseService.prototype.getRandomReview = function (firstName, lastName, strLevel) {
  return new Promise((resolve, reject) => {

    var genderData = GenderFinder.find(firstName);

    var level = getLevel(strLevel);

    if ((firstName.toLowerCase() == 'andré' || firstName.toLowerCase() == 'andre') &&
      lastName.toLowerCase() == 'fernandes') {
      level = 0;
    }

    var fullReview = "Performance review for *" + firstName + " " + lastName + "*:\n\n";

    for (var i = 0; i < 3; i++) {
      var type = getRandomType();
      var review = ReviewGenerator.generate(firstName, lastName, genderData, type, level);
      fullReview += review + "\n";
    }


    resolve(fullReview);
  });
};

const _getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getLevel = function (level) {
  switch (String(level).toLowerCase()) {
    case "perfect":
      return 5;
    case "good":
      return 4;
    case "average":
      return 3;
    case "subpar":
      return 2;
    case "worst":
      return 1;
    case "andré":
    case "andre":
    case "special":
      return 0;
  }
  return _getRandomInt(1, 5);
}

const getRandomType = function (type) {
  var types = ["accuracy",
    "ambition",
    "analytical",
    "artistic",
    "assertive",
    "attendance",
    "care",
    "communication",
    "completing",
    "concentration",
    "confidence",
    "courage",
    "courtesy",
    "creativity",
    "crisis",
    "decision",
    "delegation",
    "determination",
    "dexterity",
    "diplomacy",
    "discretion",
    "enthusiasm",
    "flexibility",
    "instructions",
    "hygiene",
    "initiative",
    "investigative",
    "judgement",
    "leadership",
    "literacy",
    "deadlines",
    "mental",
    "negotiation",
    "numeracy",
    "organization",
    "personal",
    "personality",
    "physical",
    "planning",
    "presentation",
    "pressure",
    "pride",
    "problem",
    "punctuality",
    "criticism",
    "teamwork",
    "unsupervised"
  ];
  return types[_getRandomInt(0, types.length - 1)];
}

module.exports = ImpraiseService;