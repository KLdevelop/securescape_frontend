import { Achievement } from '@/entities/user';
import clsx from 'clsx';
import './AchievementCard.scss';

type AchievementCardProps = Achievement;

export const AchievementCard = ({ title, rarity, icon, description }: AchievementCardProps) => {
    return (
        <section className={clsx('achievement', 'achievement_' + rarity, 'card')}>
            <img
                src={icon}
                alt={title}
                className="achievement__icon absoluteCentered"
            />
            <h3 className="achievement__title h3">{title}</h3>
            <p className="achievement__description description">{description}</p>
        </section>
    );
};
