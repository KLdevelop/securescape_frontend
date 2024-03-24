import { LogInForm, SignUpForm } from '@/features/auth';
import { AuthPage } from '@/pages/auth';
import { MainPage } from '@/pages/main';
import { ProfilePage } from '@/pages/profile';
import { TaskPage } from '@/pages/task';
import { TasksPage } from '@/pages/tasks';
import { TopicPage } from '@/pages/topic';
import { TopicsPage } from '@/pages/topics';
import { Footer } from '@/widgets/footer';
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
                            <Footer />
                        </>
                    }
                >
                    <Route
                        index
                        element={<MainPage />}
                    />
                    <Route
                        path="profile"
                        element={<ProfilePage />}
                    />
                    <Route path="topics">
                        <Route
                            index
                            element={<TopicsPage />}
                        />
                        <Route
                            path=":topicId"
                            element={<TopicPage />}
                        />
                    </Route>
                    <Route path="tasks">
                        <Route
                            index
                            element={<TasksPage />}
                        />
                        <Route
                            path=":taskId"
                            element={<TaskPage />}
                        />
                    </Route>
                </Route>
                <Route element={<AuthPage />}>
                    <Route
                        path="login"
                        element={<LogInForm />}
                    />
                    <Route
                        path="signup"
                        element={<SignUpForm />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
