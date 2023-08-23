import { getTasks } from '../../data/tasks';

export default function handler(req, res) {
    if (req.method === 'GET') {
        const todos = getTasks();
        res.status(200).json({ success: true, tasks: todos });
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
