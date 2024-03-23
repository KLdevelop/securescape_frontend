import { useForm } from 'react-hook-form';
import { AuthFormData } from '../models';
import { logIn } from '../api';
import './AuthForm.scss';

export const LogInForm = () => {
    const {
        register,
        formState: { isValid },
        getValues,
        handleSubmit,
    } = useForm<AuthFormData>();

    const onLogIn = async () => {
        const data = getValues();

        await logIn(data);
    };

    return (
        <form
            className="authForm"
            onSubmit={handleSubmit(onLogIn)}
        >
            <input
                {...register('login', {
                    required: true,
                })}
                placeholder="Логин"
                className="borderAndOutlineUnsetted darkInput"
            />
            <input
                {...register('password', {
                    required: true,
                })}
                type="password"
                placeholder="Пароль"
                className="borderAndOutlineUnsetted darkInput"
            />
            <button
                disabled={!isValid}
                type="submit"
                className="authForm__login lightButton"
            >
                Войти
            </button>
        </form>
    );
};
