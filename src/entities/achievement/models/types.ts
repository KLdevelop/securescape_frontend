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
