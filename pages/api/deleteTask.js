// pages/api/deleteTask.js
export default function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const deletedTask = tasks.splice(index, 1)[0];
            res.status(200).json({ success: true, task: deletedTask });
        } else {
            res.status(404).json({ success: false, message: 'Task not found' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}

// Sample data store for demonstration purposes
const tasks = [];