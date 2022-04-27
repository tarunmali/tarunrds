module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      work: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Users.associate = (models) => {
      Users.hasMany(models.Posts, {
        onDelete: "cascade",
      });
    };

    Users.associate = (models) => {
      Users.hasMany(models.Likes, {
        onDelete: "cascade",
      });
    };




    return Users;
  };