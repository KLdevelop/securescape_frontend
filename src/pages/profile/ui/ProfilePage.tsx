import { UserProfileInfo, UserStatistics, UserAchievements } from '@/widgets/profile';
import logo from '@/assets/logo-512.png';
import './ProfilePage.scss';
import { AchievementRarity } from '@/entities/user';

export const ProfilePage = () => {
    return (
        <main className="profilePage">
            <div className="profilePage__left">
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
            </div>
            <div className="profilePage__right">
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
            </div>
        </main>
    );
};
