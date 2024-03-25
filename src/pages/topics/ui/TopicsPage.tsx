import topicImg from '@/assets/crypto.png';
import { CardWithImg } from '@/shared/ui';
import { Topic, getAllTopics } from '@/entities/topic';
import { Link } from 'react-router-dom';
import './TopicsPage.scss';
import { useEffect, useState } from 'react';

const mockTopics: Topic[] = [
    {
        id: 0,
        imageLocation: topicImg,
        title: 'Криптография',
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей. Информация может находиться на этапе хранения (например, файл на жестком диске), передачи (например, электронная связь между двумя или несколькими сторонами) или использования (при применении для вычислений).',
    },
    {
        id: 1,
        imageLocation: topicImg,
        title: 'Криптография',
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей. Информация может находиться на этапе хранения (например, файл на жестком диске), передачи (например, электронная связь между двумя или несколькими сторонами) или использования (при применении для вычислений).',
    },
    {
        id: 2,
        imageLocation: topicImg,
        title: 'Криптография',
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей. Информация может находиться на этапе хранения (например, файл на жестком диске), передачи (например, электронная связь между двумя или несколькими сторонами) или использования (при применении для вычислений).',
    },
];

export const TopicsPage = () => {
    const [topics, setTopics] = useState<Topic[]>(mockTopics);

    useEffect(() => {
        (async () => {
            try {
                const topics = await getAllTopics();

                setTopics(topics);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <main className="page topicsPage">
            <h1 className="topicsPage__title">Категории</h1>
            <div className="topicsPage__topics">
                {topics.map((topic) => (
                    <Link
                        key={topic.id}
                        to={`${topic.id}`}
                        className="unsettedButton"
                    >
                        <CardWithImg
                            {...topic}
                            img={topic.imageLocation}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
};
