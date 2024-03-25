import { useState } from 'react';
import { Achievement } from '@/entities/achievement';
import { AchievementCard } from '@/shared/ui';
import { Carousel } from '@/shared/ui';
import './LastAchievements.scss';

type LastAchievementsProps = {
    achievements: Achievement[];
};

export const LastAchievements = ({ achievements }: LastAchievementsProps) => {
    const [currentAchievementIndex, setCurrentAchievementIndex] = useState<number>(0);

    return (
        <section className="lastAchievements block card">
            <h2 className="h2">Последние достижения</h2>
            {achievements.length > 0 && (
                <Carousel
                    onIndexChange={setCurrentAchievementIndex}
                    itemsCount={achievements.length}
                >
                    <AchievementCard {...achievements[currentAchievementIndex]} />
                </Carousel>
            )}
        </section>
    );
};
