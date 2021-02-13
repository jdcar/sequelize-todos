module.exports = function (sequelize, DataTypes) {
    const Todo = sequelize.define('Todo', {
        text: {
            type: DataTypes.STRING,
            complete: {
                type: DataTypes.BOOLEAN,
                default: false
            }
        }
    })
    return Todo
}