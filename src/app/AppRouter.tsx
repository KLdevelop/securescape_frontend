import { LogInForm, SignUpForm } from '@/features/auth';
import { AuthPage } from '@/pages/auth';
import { ProfilePage } from '@/pages/profile';
import { Header } from '@/widgets/header';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Outlet />
                        </>
                    }
                >
                    <Route
                        index
                        element={<ProfilePage />}
                    />
                </Route>
                <Route element={<AuthPage />}>
                    <Route
                        path="/login"
                        element={<LogInForm />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUpForm />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
