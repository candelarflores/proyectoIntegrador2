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
        favoriteGenre: {
            type: DataTypes.STRING,
        },
    };
    let config = {
        tableName: "usuarios",
        timestamps: false,
    };
    const Usuarios = sequelize.define(alias,cols, config);
    

    Usuarios.associate = function(models){
        Usuarios.hasMany(models.Reseñas, {
            as: 'Reseñas',
            foreignKey: 'user_id'
        })
    }
    return Usuarios
}