module.exports = (sequelize, DataTypes) => {
    const RecipeIngredient = sequelize.define('RecipeIngredient', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        freezeTableName: true
    })

    RecipeIngredient.associate = function(models) {
        RecipeIngredient.hasOne(models.Measurement)
    }


    return RecipeIngredient
}
