import { Task, keyFromDifficult } from '@/entities/task';
import './TaskCard.scss';
import clsx from 'clsx';

type TaskCardProps = Task;

export const TaskCard = ({ title, description, iconLocation, difficult, topic }: TaskCardProps) => {
    const difficultKey = keyFromDifficult(difficult);

    return (
        <article className={clsx('taskCard', 'card', `taskCard_${difficultKey}`)}>
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
                <p>
                    Категория: <span className="taskCard__category">{topic}</span>
                </p>
                <p className="taskCard__description">{description}</p>
            </div>
        </article>
    );
};
