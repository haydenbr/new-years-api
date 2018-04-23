const Person = require('./person.model');

function getAll(req, res) {
  return Person
    .find()
    .then((people) => res.send(people))
    .catch(passTheBuck);
};

function get(req, res) {
  let id = req.params.id;

  return Person
    .findOne({ _id: id })
    .then((person) => res.send(person))
    .catch(passTheBuck);
};

function create(req, res) {
  return new Person(req.body)
    .save((person) => res.send(person))
};

function put(req, res) {
  let id = req.params.id;

  return Person
    .findOneAndUpdate({ _id: id }, req.body)
    .then(() => get(req, res))
    .catch(passTheBuck);
};

function remove(req, res) {
  let id = req.params.id;

  return Person
    .remove({ _id: id })
    .then(() => res.send(202))
    .catch(passTheBuck);
};

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
