import { Link } from 'react-router-dom';
import { NavigationLogo } from '@/shared/ui';
import './Header.scss';
import { useAppSelector } from '@/shared/hooks';

// type HeaderProps = {

// };

export const Header = () => {
    const { auth } = useAppSelector((state) => state);
    auth;

    return (
        <header className={'header'}>
            <NavigationLogo withText />
            <nav className={'header__tabs'}>
                <Link
                    to="/topics"
                    className="header__tab"
                >
                    Категории
                </Link>
                <Link
                    to="/tasks"
                    className="header__tab"
                >
                    Задачи
                </Link>
            </nav>
            <div className={'header__rightBlock'}>
                {!auth ? (
                    <>
                        <Link to="/login">
                            <button
                                type="button"
                                className="darkButton"
                            >
                                Вход
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button
                                type="button"
                                className="darkButton"
                            >
                                Регистрация
                            </button>
                        </Link>
                    </>
                ) : (
                    <Link
                        to="profile"
                        className="unsettedButton"
                    >
                        Профиль
                    </Link>
                )}
            </div>
        </header>
    );
};
