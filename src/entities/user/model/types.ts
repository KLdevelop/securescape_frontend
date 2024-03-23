export type UserAccount = {
    userName: string;
    email: string;
};

export enum AchievementRarity {
    common = 'common',
    rare = 'rare',
    mythic = 'mythic',
}

export type Achievement = {
    title: string;
    description: string;
    icon: string;
    rarity: AchievementRarity;
};

export type UserProgress = {
    level: string;
    score: number;
    tasksCompleted: number;
    ratingPosition: number;
    achievements: Achievement[];
};
