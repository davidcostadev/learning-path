const mongoose = require('mongoose');
const Sequelize = require('sequelize');

mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const friendSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  age: { type: Number },
  language: { type: String },
  email: { type: String },
  contacts: { type: Array }
});

const Friends = mongoose.model('friends', friendSchema);

console.log(__dirname + '/aliens.sqlite');

const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: __dirname + '/aliens.sqlite'
});

const Aliens = sequelize.define('aliens', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING }
});

// Aliens.sync({ force: true }).then(() => {
//   Aliens.create({
//     firstName: 'Diego',
//     lastName: 'Costa',
//     planet: 'Earth'
//   });
// });

module.exports = {
  Friends,
  Aliens
};
