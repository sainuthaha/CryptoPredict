import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Url } from '../config/urls';
import { HomePage } from '../pages/home/homePage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Url.Home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
