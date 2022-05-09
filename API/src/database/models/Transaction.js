module.exports = (sequelize, DataTypes) => {
    const alias = 'Transaction'
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        concept: {
            type: DataTypes.STRING(100)
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        type_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    const config = {
        tableName: 'transactions',
        timestamps: false
    };

    const Transaction = sequelize.define(alias, cols, config);
    return Transaction;
};