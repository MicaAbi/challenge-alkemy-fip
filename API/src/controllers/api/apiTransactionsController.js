const db = require('../../database/models');

const apiTransactionsController = {
    create: (req, res) => {
        const {type, user, concept, amount, date} = req.body;
        console.log(req.body);

        db.Transaction
            .create({
                concept: concept,
                amount: amount,
                date: date,
                user_id: user,
                type_id: type
            })
            .then(newTransaction => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: 'api/transactions',
                        msg: 'New operation saved',
                        operation: newTransaction
                    }
                })
            })
            .catch(e => {
                console.log(e);
            })
    },

    list: (req,res) => {
        db.Transaction
            .findAll({include: [{association: 'type'}]})
            .then(transactions => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: transactions.length,
                        url: 'api/transactions'
                    },
                    data: transactions
                })
            })
            .catch(e => {
                console.log(e);
            })
    },

    incomes: (req, res) => {
        db.Transaction
            .findAll({where: {type_id: 1}})
            .then(incomes => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: incomes.length,
                        url: 'api/transactions/incomes'
                    },
                    data: incomes
                })
            })
            .catch(e => {
                console.log(e);
            })
    },

    expenses: (req, res) => {
        db.Transaction
            .findAll({where: {type_id: 2}})
            .then(expenses => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: expenses.length,
                        url: 'api/transactions/expenses'
                    },
                    data: expenses
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
};

module.exports = apiTransactionsController;