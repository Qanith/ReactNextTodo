// pages/api/addTask.js
import { getTasks, addTask } from '../../data/tasks';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { text } = req.body;
        const newTask = addTask(text); // Call addTask function to add the task
        const updatedTasks = getTasks();
        res.status(200).json({ success: true, tasks: newTask });
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}


