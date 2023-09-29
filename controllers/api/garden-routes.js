const router = require('express').Router();

const Garden = require('../../models/Garden');

router.post('/', async (req, res) => {
    try {
        const gardenPost = await Garden.create({
            name: req.body.name,
            user_id: req.body.name
        });
        return res.status(200).json(gardenPost);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const gardenData = await Garden.findAll({
            where: {user_id: req.session.user_id}
        });
        return res.status(200).json(gardenData);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const destroyPlant = await Garden.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json(destroyPlant);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;