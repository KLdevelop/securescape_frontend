import { useForm } from 'react-hook-form';
import './AuthorizationForm.scss';

export const AuthorizationForm = () => {
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
            className="authorizationForm"
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
                className="authorizationForm__login lightButton"
            >
                Войти
            </button>
        </form>
    );
};
