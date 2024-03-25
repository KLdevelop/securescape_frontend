export enum Difficult {
    Beginner = 'Новичок',
    Advanced = 'Продвинутый',
    Expert = 'Эксперт',
}

export type Task = {
    id: number;
    title: string;
    description: string;
    fileLocation?: string;
    iconLocation: string;
    difficult: Difficult;
    topic: string;
    points: number;
};

export type TaskFilter = {
    topicName?: string;
    difficult?: Difficult;
};

export type TaskAnswer = {
    taskId: number;
    answer: string;
};

export type TaskAnswerStatus = {
    correct: boolean;
};
