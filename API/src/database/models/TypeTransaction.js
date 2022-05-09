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
    return TypeTransaction;
};