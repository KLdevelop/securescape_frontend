import { Activity } from '@/entities/activity';
import './LastActivities.scss';

type LastActivitiesProps = {
    activities: Activity[];
};

export const LastActivities = ({ activities }: LastActivitiesProps) => {
    return (
        <section className="lastActivities block card">
            <h2 className="h2">Активность пользователей</h2>
            <ul className="lastActivities__activities marginAndOutlineUnsetteds">
                {activities.map(({ userName, action, actionValue }, index) => (
                    <li
                        className="field"
                        key={userName + action + actionValue + index}
                    >
                        Пользователь:
                        <span className="lastActivities__activities__value">{userName}</span>
                        {action}:<span className="lastActivities__activities__value">{actionValue}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};
