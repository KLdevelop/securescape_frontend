import { Link } from 'react-router-dom';
import { NavigationLogo } from '@/shared/ui';
import './Header.scss';

// type HeaderProps = {

// };

export const Header = () => {
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
                <Link to="/login">
                    <button
                        type="button"
                        className="darkButton"
                    >
                        Вход
                    </button>
                </Link>
                <Link to="/logup">
                    <button
                        type="button"
                        className="darkButton"
                    >
                        Регистрация
                    </button>
                </Link>
            </div>
        </header>
    );
};
