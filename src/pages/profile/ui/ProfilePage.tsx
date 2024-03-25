import { UserProfileInfo, UserStatistics, UserAchievements } from '@/widgets/profile';
import { AchievementRarity } from '@/entities/achievement';
import logo from '@/assets/logo-512.png';
import './ProfilePage.scss';

export const ProfilePage = () => {
    return (
        <main className="profilePage">
            <UserProfileInfo
                userName="4umba2010"
                email="4umba2010@gmail.com"
            />
            <UserStatistics
                level="Киберветеран"
                score={290}
                tasksCompleted={2}
                ratingPosition={10}
                achievementCount={6}
            />
            <UserAchievements
                achievements={[
                    {
                        icon: logo,
                        title: 'SecureScape',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.common,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.mythic,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.rare,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.common,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.mythic,
                    },
                    {
                        icon: logo,
                        title: 'SecureScape',
                        description: 'Образовательная ИБ платформа',
                        rarity: AchievementRarity.rare,
                    },
                ]}
            />
        </main>
    );
};
