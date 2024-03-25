import { UserProgress } from '@/entities/profile';
import './profileCard.scss';

type UserStatisticsProps = Omit<UserProgress, 'achievements'> & {
    achievementCount: number;
};

export const UserStatistics = ({
    level,
    score,
    tasksCompleted,
    ratingPosition,
    achievementCount,
}: UserStatisticsProps) => {
    return (
        <div className="userStatistics profileCard block">
            <h2 className="h2">Статистика</h2>
            <div className="field">
                <p>Звание: </p>
                <p>{level}</p>
            </div>
            <div className="field">
                <p>Баллы: </p>
                <p>{score}</p>
            </div>
            <div className="field">
                <p>Решено задач: </p>
                <p>{tasksCompleted}</p>
            </div>
            <div className="field">
                <p>Позиция в рейтинге: </p>
                <p>{ratingPosition}</p>
            </div>
            <div className="field">
                <p>Получено достижений: </p>
                <p>{achievementCount}</p>
            </div>
        </div>
    );
};
