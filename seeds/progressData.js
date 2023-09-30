const { Progress } = require('../models');

const progressData = [
  {
    id: 1,
    description: 'Newly planted tomato seed. Taken from heinz packet.',
    water_amt: 5,
    temperature: 68.5,
    humidity: 40,
    height: 0,
    leaf_growth: null,
    weather: 'Sunny',
    plant_id: 1,
    user_id: 1
  },
  {
    id: 2,
    description: 'Soil still a little moist, watered less.',
    water_amt: 1,
    temperature: 69.5,
    humidity: 90,
    height: 1,
    leaf_growth: null,
    weather: 'Cloudy',
    plant_id: 1,
    user_id: 1
  },
  {
    id: 3,
    description: 'Not Heinz, must be huntz',
    water_amt: 8,
    temperature: 68.5,
    humidity: 40,
    height: 0,
    leaf_growth: null,
    weather: 'Sunny',
    plant_id: 1,
    user_id: 1
  },
  {
    id: 4,
    description: 'Still moist',
    water_amt: 1,
    temperature: 69.5,
    humidity: 90,
    height: 1,
    leaf_growth: null,
    weather: 'Cloudy',
    plant_id: 1,
    user_id: 1
  }
];

const seedProgress = () => Progress.bulkCreate(progressData);

module.exports = seedProgress;
