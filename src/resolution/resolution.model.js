const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

let milestoneSchema = new Schema({
  _id: {
    type: String,
    alias: 'id'
  },
  name: String,
  description: String,
  isComplete: {
    type: Boolean,
    default: false
  },
  dueDate: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

let resolutionSchema = new Schema({
  name: String,
  description: String,
  isComplete: {
    type: Boolean,
    default: false
  },
  dueDate: String,
  milestones: {
    type: [milestoneSchema],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  order: Number
});

resolutionSchema.path('name').validate((value) => !!value, 'name is a required field');
milestoneSchema.path('name').validate((value) => !!value, 'name is a required field');
resolutionSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, returnValue) => {
    delete returnValue._id;
  }
});
milestoneSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, returnValue) => {
    delete returnValue._id;
  }
});

resolutionSchema.plugin(AutoIncrement, { inc_field: 'order' });

module.exports = mongoose.model('Resolution', resolutionSchema);
