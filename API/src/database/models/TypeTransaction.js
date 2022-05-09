module.exports = (sequelize, DataTypes) => {
    const alias = 'TypeTransaction';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    const config = {
        tableName: 'type_transaction',
        timestamps: false
    };

    const TypeTransaction = sequelize.define(alias, cols, config);

    // TypeTransaction model associations
    TypeTransaction.associate = function(models) {
        TypeTransaction.hasMany(models.Transaction, {
            as: "transactions",
            foreignKey: "type_id"
        });

        TypeTransaction.hasMany(models.Category, {
            as: "categories",
            foreignKey: "type_id"
        });
    };

    return TypeTransaction;
};