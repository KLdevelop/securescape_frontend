import { useForm } from 'react-hook-form';
import { RegFormData } from '../models';
import { signUp } from '../api';
import './AuthForm.scss';

export const SignUpForm = () => {
    const {
        register,
        formState: { isValid },
        getValues,
        handleSubmit,
    } = useForm<RegFormData>();

    const onSignUp = async () => {
        const data = getValues();

        await signUp(data);
    };

    return (
        <form
            className="authForm"
            onSubmit={handleSubmit(onSignUp)}
        >
            <input
                {...register('userName', {
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
