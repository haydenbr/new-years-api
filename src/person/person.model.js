const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

personSchema.path('age').validate(function(value) {
  return value > 0;
}, 'A person\'s age must be positive');

personSchema.virtual('name').get(function() {
  return this.firstName + ' ' + this.lastName;
});

personSchema.statics.findByName = function(name, cb) {
  this.find({ name: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('Person', personSchema);
