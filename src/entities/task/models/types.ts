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
