const Resolution = require('./resolution.model');

function getAll(req, res) {
  return Resolution
    .find()
    .then((people) => res.send(people))
    .catch(passTheBuck);
};

function get(req, res) {
  let id = req.params.id;

  return Resolution
    .findOne({ _id: id })
    .then((resolution) => res.send(resolution))
    .catch(passTheBuck);
};

function create(req, res) {
  return new Resolution(req.body)
    .save()
    .then((resolution) => res.send(resolution));
};

function put(req, res) {
  let id = req.params.id;

  return Resolution
    .findOneByIdAndUpdate(id, req.body)
    .then(() => get(req, res));
};

function remove(req, res) {
  let id = req.params.id;

  return Resolution
    .remove({ _id: id })
    .then(() => res.send(202))
    .catch(passTheBuck);
};

function setComplete(req, res) {
  let id = req.params.id;

  return Resolution
    .findOneByIdAndUpdate(id, { isComplete: true })
    .then(() => res.send(202));
}

function setIncomplete(req, res) {
  let id = req.params.id;

  return Resolution
    .findOneByIdAndUpdate(id, { isComplete: false })
    .then(() => res.send(202));
}

function passTheBuck(err) {
  throw err;
}

module.exports = {
  getAll,
  get,
  create,
  put,
  remove
};
