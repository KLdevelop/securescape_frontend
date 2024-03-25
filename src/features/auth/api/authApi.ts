import { userServiceClient, baseUserUrl as baseUrl } from '@/shared/api';
import { AuthFormData, RegFormData } from '../models';
import { Auth } from '@/entities/auth';

export const logIn = async (authData: AuthFormData): Promise<Auth> =>
    (await userServiceClient.post<Auth>(baseUrl + '/auth/login', authData)).data;

export const signUp = async (regData: RegFormData) => await userServiceClient.post(baseUrl + '/auth/register', regData);
