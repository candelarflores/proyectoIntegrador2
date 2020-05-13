module.exports = (sequelize, DataTypes) => {
    const reseña = sequelize.define(
        "Reseñas",
        {
            id_reseña: DataTypes.INTEGER,
            id: DataTypes.INTEGER,
            id_usuario: DataTypes.INTEGER,
            texto_reseña: DataTypes.TEXT,
            puntaje_reseña: DataTypes.DECIMAL,
            createdAt: DataTypes.DATE,
            createdAt: DataTypes.DATE,
        },
        {
            timestamps: false,
        }
    );

    return reseña;
}