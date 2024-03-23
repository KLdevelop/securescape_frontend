export type AuthFormData = {
    login: string;
    password: string;
};

export type RegFormData = AuthFormData & {
    email: string;
};
