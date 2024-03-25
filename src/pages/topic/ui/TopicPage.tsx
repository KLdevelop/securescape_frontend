import topicImg from '@/assets/crypto.png';
import logo from '@/assets/logo-256.png';
import { CardWithImg, Expander } from '@/shared/ui';
import { Difficult, Task } from '@/entities/task';
import { useParams } from 'react-router-dom';
import { Tasks } from '@/widgets/tasks';
import './TopicPage.scss';
import { useEffect, useState } from 'react';
import { Topic, getAllTopics } from '@/entities/topic';
import { getTasks } from '@/entities/task/api/taskApi';

const mockTasks: Task[] = [
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

const mockTopic: Topic = {
    id: 0,
    imageLocation: topicImg,
    title: 'Криптография',
    description:
        'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей. Информация может находиться на этапе хранения (например, файл на жестком диске), передачи (например, электронная связь между двумя или несколькими сторонами) или использования (при применении для вычислений).',
};

export const TopicPage = () => {
    const { topicId } = useParams();
    const [topic, setTopic] = useState<Topic>(mockTopic);
    const [tasks, setTasks] = useState<Task[]>(mockTasks);

    useEffect(() => {
        if (topicId) {
            (async () => {
                try {
                    const topics = await getAllTopics();
                    const topic = topics.find(({ id }) => id === +topicId);

                    topic && setTopic(topic);
                } catch (e) {
                    console.log(e);
                }
            })();

            (async () => {
                try {
                    const tasks = await getTasks({ topicName: topic.title });

                    setTasks(tasks);
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [topic.title, topicId]);

    return (
        <main className="page topicPage">
            <CardWithImg
                {...topic}
                img={topic.imageLocation}
                appearence="horizontal"
            />
            <Expander title="Теория">Теория</Expander>
            <Expander title="Задачи">
                <Tasks tasks={tasks} />
            </Expander>
        </main>
    );
};
