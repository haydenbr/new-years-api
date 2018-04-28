const Resolution = require('./resolution.model');

function getAll(req, res) {
  return Resolution
    .find()
    .sort({ createdAt: 1, order: -1 })
    .then((people) => res.send(people));
};

function get(req, res) {
  let id = req.params.id;

  return Resolution
    .findOne({ _id: id })
    .then((resolution) => res.send(resolution));
};

function create(req, res) {
  return new Resolution(req.body)
    .save()
    .then((resolution) => res.send(resolution));
};

function put(req, res) {
  let id = req.params.id;

  return Resolution
    .findByIdAndUpdate(id, req.body)
    .then(() => get(req, res));
};

function remove(req, res) {
  let id = req.params.id;

  return Resolution
    .remove({ _id: id })
    .then(() => res.send(202));
};

function removeAll(req, res) {
  return Resolution
    .remove({})
    .then(() => res.send(202));
}

/*
[
  { id: string, order: Number },
  { id: string, order: Number },
  { id: string, order: Number },
  { id: string, order: Number }
]
*/
function reorder(req, res) {
  let reorderRequest = req.body.reorder;
  let reorderPromises = reorderRequest.map((r) => Resolution.updateOne({ _id: r.id }, { order: r.order }));

  return Promise.all(reorderPromises)
    .then(() => res.send(202));
}

function setComplete(req, res) {
  let id = req.params.id;

  return Resolution
    .findByIdAndUpdate(id, { isComplete: true })
    .then(() => res.send(202));
}

function setIncomplete(req, res) {
  let id = req.params.id;

  return Resolution
    .findByIdAndUpdate(id, { isComplete: false })
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
  remove,
  removeAll,
  reorder
};
