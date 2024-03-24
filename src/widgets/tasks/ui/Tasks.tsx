import { Task } from '@/entities/task';
import { TaskCard } from '@/shared/ui';
import { Link } from 'react-router-dom';
import './Tasks.scss';

type TasksProps = {
    tasks: Task[];
};

export const Tasks = ({ tasks }: TasksProps) => {
    return (
        <div className="tasks">
            {tasks.map((task) => (
                <Link
                    key={task.id}
                    to={`/tasks/${task.id}`}
                    className="unsettedButton"
                >
                    <TaskCard {...task} />
                </Link>
            ))}
        </div>
    );
};
