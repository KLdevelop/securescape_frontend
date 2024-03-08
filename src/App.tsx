import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Authorization } from './features';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Authorization activeTab="login" />}
                />
                <Route
                    path="/logup"
                    element={<Authorization activeTab="logup" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
