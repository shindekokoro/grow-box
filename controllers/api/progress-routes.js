const router = require('express').Router();

const { Progress, Garden } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const progressPost = await Progress.create({
      description: req.body.description,
      water_amt: req.body.water_amt,
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      height: req.body.height,
      leaf_growth: req.body.leaf_growth,
      weather: req.body.weather,
      garden_id: req.body.garden_id,
      user_id: req.session.user_id
    });
    return res.status(200).json(progressPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});
//full route api/progress/garden
router.get('/garden/:id', async (req, res) => {
  try {
    const gardenList = await Progress.findAll({
      where: { garden_id: req.params.id },
      include: [{ model: Garden, attributes: ['name'] }],
      raw: true
    });
    return res.status(200).json(gardenList);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const plantProgress = await Progress.findByPk(req.params.id);
    return res.status(200).json(plantProgress);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const destroyProgress = await Progress.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json(destroyProgress);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
