import logo from '@/assets/logo-256.png';
import { Difficult, Task } from '@/entities/task';
import { FullTaskCard } from '@/shared/ui';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { answerTask, getTask } from '@/entities/task/api/taskApi';
import './TaskPage.scss';
import { useForm } from 'react-hook-form';

const mockTask = {
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

export const TaskPage = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState<Task>(mockTask);

    const {
        formState: { isValid },
        handleSubmit,
        getValues,
        register,
    } = useForm();

    useEffect(() => {
        if (taskId) {
            (async () => {
                try {
                    const task = await getTask(+taskId);

                    setTask(task);
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [taskId]);

    const onSubmit = async () => {
        if (taskId) {
            try {
                const { correct } = await answerTask({
                    taskId: +taskId,
                    answer: getValues('answer'),
                });

                alert(correct ? 'Правильно!' : 'Неправильно(');
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <main className="page taskPage">
            <div className="block taskPage__content">
                <FullTaskCard {...task} />
                {mockTask.fileLocation && (
                    <a
                        href={task.fileLocation}
                        download={task.title}
                        className="unsettedButton"
                    >
                        <button className="darkButton taskPage__submitAnswer">Файлы к заданию</button>
                    </a>
                )}
                <form
                    className="taskPage__answerForm"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register('answer', { required: true })}
                        className="darkInput taskPage__answer"
                        placeholder="Введите флаг"
                    />
                    <button
                        type="submit"
                        className="darkButton taskPage__submitAnswer"
                        disabled={!isValid}
                    >
                        Проверить
                    </button>
                </form>
            </div>
        </main>
    );
};
