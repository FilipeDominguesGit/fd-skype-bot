module.exports = (impraise) => {
  const _getImpraiseDialog = function (session, args) {

    var firstName = args.matched[1];
    var lastName = args.matched[2];
    var level = args.matched[3];

    impraise.getRandomReview(
      firstName,
      lastName,
      level
    ).then((response) => {
      session.endDialog(response);
    })
      .catch((err) => {
        session.endDialog(`Error: ${err}`);
      });
  };

  const _defaultDialog = function (session) {
    session.endDialog(
    'Hello! To request a review, just type: \n\n'+
    '_`impraise FIRSTNAME LASTNAME`_\n\n'+
    'or\n\n'+
    '_`impraise FIRSTNAME LASTNAME LEVEL`_ \n\n'+
    'where _LEVEL_ is perfect, good, average, subpar or worst');
  };

  const _install = function (intent) {
    intent.matchesAny([
      /(?:^|\s)(?:impraise help)$/i
    ], _defaultDialog)

      .matchesAny([
        /(?:^|\s)(?:impraise) ([A-zÀ-ÖØ-öø-ÿ]+) ([A-zÀ-ÖØ-öø-ÿ]+) ([A-zÀ-ÖØ-öø-ÿ]+)$/i,
        /(?:^|\s)(?:impraise) ([A-zÀ-ÖØ-öø-ÿ]+) ([A-zÀ-ÖØ-öø-ÿ]+)$/i
      ], _getImpraiseDialog)
  };


  return {
    install: _install
  };


};