const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.ENUM('todo', 'in_progress', 'done'), allowNull: false },
  dueDate: { type: DataTypes.DATE }
}, { timestamps: true });
module.exports = Task;