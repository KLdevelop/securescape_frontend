import { baseTaskUrl as baseUrl, taskServiceClient } from '@/shared/api';
import { Task, TaskAnswer, TaskAnswerStatus, TaskFilter } from '../models';
import { keyFromDifficult } from '../lib';

export const getTask = async (id: number) => (await taskServiceClient.get<Task>(baseUrl + `/task/${id}`)).data;

export const getTasks = async ({ topicName, difficult }: TaskFilter) =>
    (
        await taskServiceClient.get<{ tasks: Task[] }>(baseUrl + '/task', {
            params: { topicName, difficult: difficult && keyFromDifficult(difficult) },
        })
    ).data.tasks;

export const answerTask = async (answer: TaskAnswer) => {
    const token = localStorage.getItem('jwtToken');

    return (
        await taskServiceClient.post<TaskAnswerStatus>(baseUrl + '/task/answer', answer, {
            headers: {
                Authorization: token && `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            },
        })
    ).data;
};
