import { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';
import s from './Input.module.scss';

type InputProps = HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }: InputProps, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={clsx(s.input, className)}
        />
    );
});
