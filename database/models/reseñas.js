module.exports = (sequelize, DataTypes) => {
    const reseña = sequelize.define(
        "Reseñas",
        {
           
            content: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
            movie_id: DataTypes.INTEGER,
          
        },
        {   tableName: "reviews",

            timestamps: false,
        }
    );

    return reseña;
      }