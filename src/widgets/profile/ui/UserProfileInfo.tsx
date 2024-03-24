import { UserAccount } from '@/entities/user';
import editIcon from '@/assets/edit.svg';
import './profileCard.scss';

type UserProfileProps = UserAccount;

export const UserProfileInfo = ({ userName, email }: UserProfileProps) => {
    return (
        <div className="userProfileInfo profileCard block">
            <h2 className="h2">Профиль</h2>
            <button
                type="button"
                className="profileCard__cornerButton"
            >
                <img
                    src={editIcon}
                    alt="Изменить"
                />
            </button>
            <div className="field">
                <p>Логин: </p>
                <p>{userName}</p>
            </div>
            <div className="field">
                <p>Почта: </p>
                <p>{email}</p>
            </div>
            <div className="field">
                <p>Пароль: </p>
                <p>************</p>
            </div>
        </div>
    );
};
