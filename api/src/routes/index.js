const {Router} = require ('express');
const Dogs = require ('./Dogs.js')
const Temperaments = require ('./Temperaments.js')

const router = Router();


router.use('/dogs', Dogs);

router.use('/temperaments', Temperaments);

router.use('/delete', Dogs);


module.exports = router;