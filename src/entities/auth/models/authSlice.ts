import { Auth } from '@/entities/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = Auth | null;

const id = localStorage.getItem('userId');
const jwtToken = localStorage.getItem('jwtToken');

const initialState: AuthState = id && jwtToken ? { id: +id, jwtToken } : null;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (_, { payload: auth }: PayloadAction<Auth>) => auth,
        logOut: () => null,
    },
});

export const { logIn, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
