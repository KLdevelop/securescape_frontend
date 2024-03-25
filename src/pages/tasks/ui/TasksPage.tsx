import logo from '@/assets/logo-256.png';
import { Difficult, Task, getTasks } from '@/entities/task';
import { Tasks } from '@/widgets/tasks';
import { useEffect, useState } from 'react';
import './TasksPage.scss';

const mockTasks = [
    {
        id: 1,
        title: 'Задача 1',
        iconLocation: logo,
        points: 0,
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей',
        topic: 'Криптография',
        difficult: Difficult.Advanced,
    },
    {
        id: 2,
        title: 'Задача 2',
        iconLocation: logo,
        points: 0,
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей',
        topic: 'Криптография',
        difficult: Difficult.Beginner,
    },
    {
        id: 3,
        title: 'Задача 3',
        iconLocation: logo,
        points: 0,
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей',
        topic: 'Криптография',
        difficult: Difficult.Expert,
    },
];

export const TasksPage = () => {
    const [tasks, setTasks] = useState<Task[]>(mockTasks);

    useEffect(() => {
        (async () => {
            try {
                const task = await getTasks({});

                setTasks(task);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <main className="page tasksPage">
            <section className="block">
                <h2 className="h2">Задачи</h2>
                <Tasks tasks={tasks} />
            </section>
        </main>
    );
};
