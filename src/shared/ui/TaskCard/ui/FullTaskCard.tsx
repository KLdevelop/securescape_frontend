import { Task, keyFromDifficult } from '@/entities/task';
import clsx from 'clsx';
import './TaskCard.scss';
import './FullTaskCard.scss';

type FullTaskCardProps = Task;

export const FullTaskCard = ({ title, description, iconLocation, difficult, points }: FullTaskCardProps) => {
    const difficultKey = keyFromDifficult(difficult);

    return (
        <article className={clsx('taskCard', 'card', `taskCard_${difficultKey}`, 'fullTaskCard')}>
            <div className="taskCard__left">
                <img
                    className="taskCard__icon"
                    src={iconLocation}
                    alt="icon"
                />
                <p className={clsx('taskCard__difficult', `taskCard__difficult_${difficultKey}`)}>{difficult}</p>
            </div>
            <div className="taskCard__info">
                <h3 className="h3">{title}</h3>
                <div className="fullTaskCard__info">
                    <p>
                        <span className="fullTaskCard__info__term">Награда за выполнение: </span>
                        <span className={'fullTaskCard__info__score_' + difficultKey}>+{points}</span>
                    </p>
                    <p>
                        <span className="fullTaskCard__info__term">Задача: </span>
                        <span>{description}</span>
                    </p>
                </div>
            </div>
        </article>
    );
};
