import { AuthorizationForm, RegistrationForm } from '@/features/authorization';
import { AuthorizationPage } from '@/pages/authorization';
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
                <Route element={<AuthorizationPage />}>
                    <Route
                        path="/login"
                        element={<AuthorizationForm />}
                    />
                    <Route
                        path="/logup"
                        element={<RegistrationForm />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
