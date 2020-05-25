module.exports = (sequelize, DataTypes) => {
    
    let alias = "Usuarios";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        pass: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
        },
        dateofbirth: {
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName: "usuarios",
        timestamps: false,
    };
    const Usuario = sequelize.define(alias,cols, config);
    return Usuario;
}