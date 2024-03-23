import { LogInForm, SignUpForm } from '@/features/auth';
import { AuthPage } from '@/pages/auth';
import { CoursesPage } from '@/pages/courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<CoursesPage />}
                    index
                />
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
