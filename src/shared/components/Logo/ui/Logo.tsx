import clsx from 'clsx';
import logo from '@/assets/logo-256.png';
import s from './Logo.module.scss';

type LogoProps = {
    withText?: boolean;
    className?: string;
};

export const Logo = ({ className, withText = true }: LogoProps) => {
    const LogoImg = () => (
        <img
            src={logo}
            alt="S"
            className={clsx(s.logo, !withText && className, 'unselectable')}
            draggable={false}
        />
    );

    if (withText) {
        return (
            <div className={clsx(s.logoWithText, className, 'unselectable')}>
                <p className={s.logoWithText__text}>SecureScape</p>
                <LogoImg />
            </div>
        );
    }

    return <LogoImg />;
};
