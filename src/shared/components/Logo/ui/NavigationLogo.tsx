import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import s from './NavigationLogo.module.scss';

type NavigationLogoProps = ComponentProps<typeof Logo> & {
    to: string;
};

export const NavigationLogo = ({ to, ...props }: NavigationLogoProps) => {
    return (
        <Link
            to={to}
            className={s.navigationLogo}
        >
            <Logo {...props} />
        </Link>
    );
};
