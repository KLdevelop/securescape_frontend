import { UserProgress } from '@/entities/user';
import clsx from 'clsx';
import './UserAchievements.scss';

type UserAchievementsProps = Pick<UserProgress, 'achievements'>;

export const UserAchievements = ({ achievements }: UserAchievementsProps) => {
    return (
        <section className="userAchievements block card">
            <h2 className="h2">Достижения</h2>
            <div className="userAchievements__content">
                {achievements.map(({ title, description, rarity, icon }) => (
                    <section
                        key={title + rarity}
                        className={clsx('userAchievements__achievement', 'userAchievements__' + rarity, 'card')}
                    >
                        <img
                            src={icon}
                            alt={title}
                            className="userAchievements__achievement__icon absoluteCentered"
                        />
                        <h3 className="userAchievements__achievement__title h3">{title}</h3>
                        <p className="userAchievements__achievement__description description">{description}</p>
                    </section>
                ))}
            </div>
        </section>
    );
};
