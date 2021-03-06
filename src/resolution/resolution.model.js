const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let milestoneSchema = new Schema({
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
  }
});

Array.of(resolutionSchema, milestoneSchema)
  .forEach((schema) => validateSchemaFieldExists(schema, 'name'));

function validateSchemaFieldExists(schema, field) {
  schema.path(field).validate((value) => !!value, `${field} is a required field`);
}

module.exports = mongoose.model('Resolution', resolutionSchema);
