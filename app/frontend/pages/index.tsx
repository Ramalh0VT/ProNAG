"use client"

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Task {
  id: number;
  description: string;
  priority: string;
  status: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ description: '', priority: 'Baixa', status: 'Pendente' });

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = async () => {
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    const task = await response.json();
    setTasks([...tasks, task]);
    setNewTask({ description: '', priority: 'Baixa', status: 'Pendente' });
  };

  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gerenciador de Tarefas</h1>
      <div className="card p-4 mb-4">
        <h2 className="h5">Adicionar Nova Tarefa</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Descrição"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={newTask.status}
              onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
            >
              <option value="Pendente">Pendente</option>
              <option value="Concluída">Concluída</option>
            </select>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100" onClick={addTask}>
              Adicionar Tarefa
            </button>
          </div>
        </div>
      </div>

      <div className="card p-4">
        <h2 className="h5">Lista de Tarefas</h2>
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{task.description}</strong> - {task.priority} - {task.status}
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}