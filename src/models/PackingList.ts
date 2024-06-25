const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Item schema
const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  category: {
    type: String,
    enum: ['Clothing', 'Toiletries', 'Electronics', 'Documents', 'Miscellaneous'],
    default: 'Miscellaneous',
  },
  packed: {
    type: Boolean,
    default: false,
  },
});


const packingListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  items: [itemSchema], // Embed the item schema as an array
});

// Create the models
const PackingList = mongoose.model('PackingList', packingListSchema);

module.exports = PackingList;
