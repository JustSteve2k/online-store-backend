// checks to ensure the user included the id in the query and it isnt blank.
const validateIdMiddleware = (req, res, next) => {
  if (req.query.id === undefined) {
    res.status(400);
    throw new Error("Missing id parameter");
  }

  if (req.query.id.trim() === "") {
    res.status(400);
    throw new Error("You forgot to type in an id number, but typed the id part");
  }

  if (isNaN(parseInt(req.query.id))) {
    res.status(400);
    throw new Error("That wasnt a number, please provide a number id instead.");
  }

  next();
};

module.exports = validateIdMiddleware;
