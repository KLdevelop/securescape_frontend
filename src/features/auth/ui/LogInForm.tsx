import { useForm } from 'react-hook-form';
import { AuthFormData } from '../models';
import { logIn } from '../api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks';
import { logIn as logInAction } from '@/entities/auth';
import './AuthForm.scss';

export const LogInForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        register,
        formState: { isValid },
        getValues,
        handleSubmit,
    } = useForm<AuthFormData>();

    const onLogIn = async () => {
        const data = getValues();

        try {
            const { id, jwtToken } = await logIn(data);

            localStorage.setItem('jwtToken', jwtToken);
            localStorage.setItem('userId', '' + id);
            dispatch(logInAction({ id, jwtToken }));
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form
            className="authForm"
            onSubmit={handleSubmit(onLogIn)}
        >
            <input
                {...register('userName', {
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
