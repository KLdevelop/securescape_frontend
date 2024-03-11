import { NavLink as Link, Outlet } from 'react-router-dom';
import { NavigationLogo } from '@/shared/ui';
import clsx from 'clsx';
import './AuthorizationPage.scss';

const getTabClass = ({ isActive }: { isActive: boolean }) => {
    const tabClass = 'authorization__form__tab';

    return clsx(tabClass, isActive && `${tabClass}_active`);
};

export const AuthorizationPage = () => {
    return (
        <main className="authorization absoluteCentered">
            <NavigationLogo withText />
            <div className="authorization__form bottomBlueBorder block">
                <div className="authorization__form__tabs">
                    <Link
                        className={getTabClass}
                        to="/login"
                    >
                        Авторизация
                    </Link>
                    <Link
                        className={getTabClass}
                        to="/logup"
                    >
                        Регистрация
                    </Link>
                </div>
                <Outlet />
            </div>
        </main>
    );
};
