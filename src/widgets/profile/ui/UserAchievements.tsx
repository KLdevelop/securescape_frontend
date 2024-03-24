import { UserProgress } from '@/entities/user';
import { AchievementCard } from '@/shared/ui';
import './UserAchievements.scss';

type UserAchievementsProps = Pick<UserProgress, 'achievements'>;

export const UserAchievements = ({ achievements }: UserAchievementsProps) => {
    return (
        <section className="userAchievements block card">
            <h2 className="h2">Достижения</h2>
            <div className="userAchievements__content">
                {achievements.map((achievement) => (
                    <AchievementCard {...achievement} />
                ))}
            </div>
        </section>
    );
};
