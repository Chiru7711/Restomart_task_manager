const Task = require('../models/Task');
exports.getAllTasks = async (req, res) => {
  try { const tasks = await Task.findAll(); res.json(tasks); }
  catch (err) { res.status(500).json({ error: 'Failed to fetch tasks' }); }
};
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};
exports.createTask = async (req, res) => {
  try { const task = await Task.create(req.body); res.status(201).json(task); }
  catch (err) { res.status(400).json({ error: 'Failed to create task' }); }
};
exports.updateTask = async (req, res) => {
  try {
    await Task.update(req.body, { where: { id: req.params.id } });
    const updatedTask = await Task.findByPk(req.params.id);
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.json(updatedTask);
  } catch (err) { res.status(400).json({ error: 'Failed to update task' }); }
};
exports.deleteTask = async (req, res) => {
  try { await Task.destroy({ where: { id: req.params.id } }); res.status(204).send(); }
  catch (err) { res.status(400).json({ error: 'Failed to delete task' }); }
};