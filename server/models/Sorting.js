const mongoose = require('mongoose');

const SortingSchema = mongoose.Schema({
  item: {type:String, unique:true, required:true},
  category: {type:String, select:true,},
  how: {type:String, required:true},
  });

module.exports = mongoose.model(' Sorting ', SortingSchema);