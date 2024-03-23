import { useForm } from 'react-hook-form';
import './AuthForm.scss';

export const SignUpForm = () => {
    const {
        register,
        formState: { isValid },
        getValues,
        handleSubmit,
    } = useForm();

    const registrate = () => {
        const login: string = getValues('login');
        const password: string = getValues('password');
        const email: string = getValues('email');

        console.log(login, password, email);
    };

    return (
        <form
            className="authForm"
            onSubmit={handleSubmit(registrate)}
        >
            <input
                {...register('login', {
                    required: true,
                })}
                placeholder="Логин"
                className="borderAndOutlineUnsetted darkInput"
            />
            <input
                {...register('email', {
                    required: true,
                })}
                type="email"
                placeholder="E-mail"
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
                Зарегистрироваться
            </button>
        </form>
    );
};
