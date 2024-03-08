import { NavLink as Link } from 'react-router-dom';
import { AuthorizationForm } from './AuthorizationForm';
import { RegistrationForm } from './RegistrationForm';
import { Logo } from '@/shared';
import clsx from 'clsx';
import './Authorization.scss';

type AuthorizationProps = {
    activeTab?: 'login' | 'logup';
};

export const Authorization = ({ activeTab = 'login' }: AuthorizationProps) => {
    const tabClass = 'authorization__form__tab';
    const activeTabClass = 'authorization__form__tab_active';

    return (
        <main className="authorization absoluteCentered">
            <Logo withText />
            <div className="authorization__form bottomBlueBorder block">
                <div className="authorization__form__tabs">
                    <Link
                        className={clsx(tabClass, activeTab === 'login' && activeTabClass)}
                        to="/login"
                    >
                        Авторизация
                    </Link>
                    <Link
                        className={clsx(tabClass, activeTab === 'logup' && activeTabClass)}
                        to="/logup"
                    >
                        Регистрация
                    </Link>
                </div>
                {activeTab === 'login' ? <AuthorizationForm /> : <RegistrationForm />}
            </div>
        </main>
    );
};
