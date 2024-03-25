import { userServiceClient } from '@/shared/api';
import { Progress, User } from '../models';

const basePath = '/api/UserProfile/';

export const getUserProgress = async (id: number) =>
    (await userServiceClient.get<Progress>(`${basePath}/progress/${id}`)).data;

export const getUser = async (id: number) => (await userServiceClient.get<User>(`${basePath}/user/${id}`)).data;

export const getFullProfileInfo = '';
