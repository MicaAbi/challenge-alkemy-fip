const express = require('express');
const router = express.Router();
const apiTransactionsController = require('../../controllers/api/apiTransactionsController');

router.get('/', apiTransactionsController.list);
router.get('/incomes', apiTransactionsController.incomes);
router.get('/expenses', apiTransactionsController.expenses);
router.post('/', apiTransactionsController.create);

module.exports = router;