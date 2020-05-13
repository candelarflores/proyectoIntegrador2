module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define(
        "Usuarios",
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            id_usuario: DataTypes.INTEGER,
            password: DataTypes.STRING,
            born_date: DataTypes.DATE,

        },
        {
            timestamps: false,
        }
    );

    return usuario;
}