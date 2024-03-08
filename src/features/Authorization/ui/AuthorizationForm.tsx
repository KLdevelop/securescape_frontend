import { Button, Input } from '@/shared';
import { useForm } from 'react-hook-form';

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
            <Input
                {...register('login', {
                    required: true,
                })}
                placeholder="Логин"
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
                Войти
            </Button>
        </form>
    );
};
