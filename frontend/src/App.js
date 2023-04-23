import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './styles/all.css';
import AppRouter from './components/AppRouter';

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
