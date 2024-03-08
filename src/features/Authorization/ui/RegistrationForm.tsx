import { Button, Input } from '@/shared';
import { useForm } from 'react-hook-form';

export const RegistrationForm = () => {
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
            className="authorizationForm"
            onSubmit={handleSubmit(registrate)}
        >
            <Input
                {...register('login', {
                    required: true,
                })}
                placeholder="Логин"
                className="borderAndOutlineUnsetted"
            />
            <Input
                {...register('email', {
                    required: true,
                })}
                type="email"
                placeholder="E-mail"
                className="borderAndOutlineUnsetted"
            />
            <Input
                {...register('password', {
                    required: true,
                })}
                type="password"
                placeholder="Пароль"
                className="borderAndOutlineUnsetted"
            />
            <Button
                disabled={!isValid}
                type="submit"
                className="authorizationForm__login"
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};
