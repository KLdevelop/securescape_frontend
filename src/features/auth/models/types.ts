export type AuthFormData = {
    userName: string;
    password: string;
};

export type RegFormData = AuthFormData & {
    email: string;
};
