const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://arsjDev:13222612@@arsjdev.dquhg.mongodb.net/arsjDev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;