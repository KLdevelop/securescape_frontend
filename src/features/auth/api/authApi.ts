import axios from 'axios';
import { AuthFormData, RegFormData } from '../models';

export const logIn = (authData: AuthFormData) => axios.post('/api/auth/login', authData);

export const signUp = (regData: RegFormData) => axios.post('/api/auth/register', regData);
