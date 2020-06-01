module.exports = (sequelize, DataTypes) => {
    
    let alias = "Reseñas";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        content: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        movie_id: {
            type: DataTypes.INTEGER,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "reviews",
        timestamps: false,
    };
    const Reseñas = sequelize.define(alias,cols, config);
    

    Reseñas.associate = function(models){
        Reseñas.belongsTo(models.Usuarios, {
            as: 'Usuarios',
            foreignKey: 'user_id'
        })
    }
    return Reseñas
}