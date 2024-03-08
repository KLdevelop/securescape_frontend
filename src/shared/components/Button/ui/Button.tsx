import { ButtonHTMLAttributes, forwardRef } from 'react';
import s from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: 'light' | 'dark';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, theme = 'light', ...props }: ButtonProps, ref) => {
        return (
            <button
                {...props}
                ref={ref}
                className={clsx(s.button, className, s[`button_${theme}`])}
            />
        );
    },
);
