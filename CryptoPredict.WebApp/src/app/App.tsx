import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Url } from '../config/urls';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Graph from '../feature/graph/graph';
import { HomePage } from '../pages/home/homePage';

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {<Routes>
                    <Route path={Url.Home} element={<HomePage />} />
                </Routes> }
            </BrowserRouter>
        </Provider>
    )
}
