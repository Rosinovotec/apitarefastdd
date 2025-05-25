import express from 'express';
import bodyParser from 'body-parser';
import { createTask } from './taskService.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [];

app.post('/tasks', (req, res) => {
  try {
    const task = createTask(req.body);
    tasks.push(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== taskId);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});