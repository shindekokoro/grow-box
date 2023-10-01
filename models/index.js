const User = require('./User');
const Garden = require('./Garden');
const Progress = require('./Progress');

// As "user" has many garden/plants.
User.hasMany(Garden, {
  foreignKey: { model: 'user', foreignKey: 'id' }
});
// A garden belongs to one user.
Garden.belongsTo(User, {
  foreignKey: 'user_id'
});
// A progress entry belongs to a garden.
Progress.belongsTo(Garden, {
  foreignKey: 'garden_id'
});
// A progress entry has one user.
Progress.hasOne(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Garden, Progress };
