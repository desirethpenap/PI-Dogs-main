const {Router} = require ('express');
const router = Router();
const {getTemperament} = require ('../controllers/Temperament-controllers')


router.get('/', getTemperament)


module.exports= router;