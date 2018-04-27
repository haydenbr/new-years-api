const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
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
  },
  order: Number
});

Array.of(resolutionSchema, milestoneSchema)
  .forEach((schema) => validateSchemaFieldExists(schema, 'name'));

function validateSchemaFieldExists(schema, field) {
  schema.path(field).validate((value) => !!value, `${field} is a required field`);
}

resolutionSchema.plugin(AutoIncrement, { inc_field: 'order' });

module.exports = mongoose.model('Resolution', resolutionSchema);

// {
//   "_id" : ObjectId("5ae27f8fb78674397fcd05a4"),
//   "id" : "order",
//   "reference_value" : null,
//   "seq" : 3
// }