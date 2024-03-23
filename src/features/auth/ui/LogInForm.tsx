import { useForm } from 'react-hook-form';
import './AuthForm.scss';

export const LogInForm = () => {
    const {
        register,
        formState: { isValid },
        getValues,
        handleSubmit,
    } = useForm();

    const authorize = () => {
        const login: string = getValues('login');
        const password: string = getValues('password');

        console.log(login, password);
    };

    return (
        <form
            className="authForm"
            onSubmit={handleSubmit(authorize)}
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
