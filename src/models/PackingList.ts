import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
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


const packingListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  season: {
    type: String,
    enum: ['Summer', 'Winter', 'Spring', 'Autumn'],
    required: true,
  },
  tripType: {
    type: String,
    enum: ['Vacation', 'Business Trip', 'Adventure', 'Other'],
    required: true,
  },
  items: [itemSchema], 
  createdDate: {
    type: Date,
    default: Date.now,
  },
});


const PackingList = mongoose.models.PackingList || mongoose.model('PackingList', packingListSchema);

export default PackingList;
