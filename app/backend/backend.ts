import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let tasks: Array<{ id: number; description: string; priority: string; status: string }> = [];

app.get('/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});

app.post('/tasks', (req: Request, res: Response) => {
  const { description, priority, status } = req.body;
  const newTask = { id: Date.now(), description, priority, status };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, priority, status } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], description, priority, status };
  res.json(tasks[taskIndex]);
});

app.delete('/tasks/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id !== parseInt(id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});