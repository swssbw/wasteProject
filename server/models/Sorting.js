const mongoose = require('mongoose');

const SortingSchema = mongoose.Schema({
  item: {type:String, unique:true, required:true},
  category: {type:String, select:true, required:true},
  how: {type:String, required:true},
  caution: {type:String},
  });

module.exports = mongoose.model(' Sortings ', SortingSchema);