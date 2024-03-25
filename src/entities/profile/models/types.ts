import { Achievement } from '@/entities/achievement';

export enum Level {
    CyberNoob = 'Киберновичок',
    CyberIntern = 'Киберстажер',
    CyberAdept = 'Киберадепт',
    CyberGuardian = 'Сетевой страж',
    CyberVeteran = 'Киберветеран',
}

export type Badge = {
    userName: string;
    level: Level;
};

export type Progress = {
    id: number;
    countCompletedTask: number;
    scores: number;
    ratingPosition: number;
    countComplitedAchievements: number;
};

export type User = {
    id: number;
    userName: number;
};

export type UserProgress = {
    level: string;
    score: number;
    tasksCompleted: number;
    ratingPosition: number;
    achievements: Achievement[];
};
