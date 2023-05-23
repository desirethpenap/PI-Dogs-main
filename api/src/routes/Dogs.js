const { Router } = require('express');
const {getDogies, getDogId, getDogPost, getDogDelete} = require('../controllers/Dogs-controllers');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getDogies)

router.get('/:id', getDogId)

router.post('/', getDogPost)

router.delete('/:id',getDogDelete)


module.exports = router;