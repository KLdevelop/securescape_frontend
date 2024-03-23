import { NavLink as Link, Outlet } from 'react-router-dom';
import { NavigationLogo } from '@/shared/ui';
import clsx from 'clsx';
import './AuthPage.scss';

const getTabClass = ({ isActive }: { isActive: boolean }) => {
    const tabClass = 'auth__form__tab';

    return clsx(tabClass, isActive && `${tabClass}_active`);
};

export const AuthPage = () => {
    return (
        <main className="auth absoluteCentered">
            <NavigationLogo withText />
            <div className="auth__form bottomBlueBorder block">
                <div className="auth__form__tabs">
                    <Link
                        className={getTabClass}
                        to="/login"
                    >
                        Вход
                    </Link>
                    <Link
                        className={getTabClass}
                        to="/signup"
                    >
                        Регистрация
                    </Link>
                </div>
                <Outlet />
            </div>
        </main>
    );
};
