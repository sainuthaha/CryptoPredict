import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Url } from '../config/urls';
import { HomePage } from '../pages/home/homePage';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={Url.Home} element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
