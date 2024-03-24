import topicImg from '@/assets/crypto.png';
import logo from '@/assets/logo-256.png';
import { CardWithImg, Expander } from '@/shared/ui';
import { Difficult, Task } from '@/entities/task';
import { useParams } from 'react-router-dom';
import { TaskCard } from '@/widgets/tasks';
import './TopicPage.scss';

const tasks: Task[] = [
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

export const TopicPage = () => {
    const { topicId } = useParams();
    topicId;
    const topic = {
        id: 0,
        img: topicImg,
        title: 'Криптография',
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей. Информация может находиться на этапе хранения (например, файл на жестком диске), передачи (например, электронная связь между двумя или несколькими сторонами) или использования (при применении для вычислений).',
    };

    return (
        <main className="page topicPage">
            <CardWithImg
                {...topic}
                appearence="horizontal"
            />
            <Expander title="Теория">Теория</Expander>
            <Expander title="Задачи">
                <div className="topicPage__tasks">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            {...task}
                        />
                    ))}
                </div>
            </Expander>
        </main>
    );
};
