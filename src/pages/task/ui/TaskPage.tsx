import logo from '@/assets/logo-256.png';
import { Difficult } from '@/entities/task';
import { FullTaskCard } from '@/shared/ui';
import { useParams } from 'react-router-dom';
import './TaskPage.scss';

export const TaskPage = () => {
    const { taskId } = useParams();
    taskId;
    const task = {
        id: 1,
        title: 'Задача 1',
        iconLocation: logo,
        fileLocation: logo,
        points: 50,
        description:
            'Криптография – это метод защиты информации путем использования закодированных алгоритмов, хэшей и подписей',
        topic: 'Криптография',
        difficult: Difficult.Advanced,
    };

    return (
        <main className="page taskPage">
            <div className="block taskPage__content">
                <FullTaskCard {...task} />
                {task.fileLocation && (
                    <a
                        href={task.fileLocation}
                        download={task.title}
                        className="unsettedButton"
                    >
                        <button className="darkButton taskPage__submitAnswer">Файлы к заданию</button>
                    </a>
                )}
                <form className="taskPage__answerForm">
                    <input
                        className="darkInput taskPage__answer"
                        placeholder="Введите флаг"
                    />
                    <button
                        type="submit"
                        className="darkButton taskPage__submitAnswer"
                    >
                        Проверить
                    </button>
                </form>
            </div>
        </main>
    );
};
