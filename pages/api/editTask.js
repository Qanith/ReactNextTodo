// pages/api/editTask.js
export default function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, text, completed } = req.body;
        // Perform your data store logic to edit the task
        const updatedTask = tasks.find(task => task.id === id);
        if (updatedTask) {
            updatedTask.text = text;
            updatedTask.completed = completed;
            res.status(200).json({ success: true, task: updatedTask });
        } else {
            res.status(404).json({ success: false, message: 'Task not found' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}