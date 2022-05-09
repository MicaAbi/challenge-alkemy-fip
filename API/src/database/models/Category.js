module.exports = (sequelize, DataTypes) => {
    const alias = 'Category';
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
        },
        type_id: {
            type: DataTypes.INTEGER.UNSIGNED,
        }
    };
    const config = {
        tableName: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);
    return Category;
};