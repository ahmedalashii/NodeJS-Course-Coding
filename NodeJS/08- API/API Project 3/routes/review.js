const { Router } = require('express');
const { reviewController } = require('../controllers');
const router = Router();

router
    .post('/add', reviewController.add)
    .delete('/delete/:id', reviewController.remove);

module.exports = router;