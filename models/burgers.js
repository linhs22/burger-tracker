module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burger", {
        // Giving the Bid model a bid price of type FLOAT
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Giving the Bid model a awarded of type boolean
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })


    return Burgers;
};