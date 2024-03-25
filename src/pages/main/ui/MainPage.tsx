import logo from '@/assets/logo-512.png';
import { AchievementRarity } from '@/entities/achievement';
import { LastAchievements } from '@/widgets/achievements';
import './MainPage.scss';
import { UsersRating } from '@/widgets/rating';
import { LastActivities } from '@/widgets/activities';
import { Activity, ActivityAction } from '@/entities/activity';
import { RandomCard } from '@/shared/ui';

const users = [
    { userName: 'Nagibator2011', score: 5805 },
    { userName: 'SuperHacker', score: 5804 },
    { userName: 'Matb4astb', score: 5803 },
    { userName: 'NekoGirl', score: 5802 },
    { userName: 'Nagibator2011', score: 5801 },
    { userName: 'SuperHacker', score: 5800 },
    { userName: 'Matb4astb', score: 5799 },
    { userName: 'NekoGirl', score: 5798 },
];

const activities: Activity[] = [
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
    {
        userName: 'NekoGirl',
        action: ActivityAction.achievement,
        actionValue: 'Прилежный ученик',
    },
];

export const MainPage = () => {
    return (
        <main className="page mainPage">
            <LastAchievements
                achievements={[
                    {
                        icon: logo,
                        title: 'SecureScape1',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.common,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape2',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.mythic,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape3',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.rare,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape4',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.common,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape5',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.mythic,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape6',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.rare,
                    },
                ]}
            />
            <UsersRating users={users} />
            <LastActivities activities={activities} />
            <div className="mainPage__random block">
                <RandomCard title="Случайная теория" />
                <RandomCard title="Случайная задача" />
            </div>
        </main>
    );
};
