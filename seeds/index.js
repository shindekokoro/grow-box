const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedGarden = require('./gardenData');
const seedProgress = require('./progressData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedGarden();
  await seedProgress();

  process.exit(0);
};

seedAll();
