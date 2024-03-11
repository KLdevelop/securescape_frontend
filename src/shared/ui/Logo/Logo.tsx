import clsx from 'clsx';
import logo from '@/assets/logo-256.png';
import './Logo.scss';

type LogoProps = {
    withText?: boolean;
    className?: string;
};

export const Logo = ({ className, withText = true }: LogoProps) => {
    const LogoImg = () => (
        <img
            src={logo}
            alt="S"
            className={clsx('logo', !withText && className, 'unselectable')}
            draggable={false}
        />
    );

    if (withText) {
        return (
            <div className={clsx('logoWithText', className, 'unselectable')}>
                <p className={'logoWithText__text'}>SecureScape</p>
                <LogoImg />
            </div>
        );
    }

    return <LogoImg />;
};
