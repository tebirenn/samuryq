import React from 'react';
import Header from './components/header';
import MainPage from './pages/main';

import './styles/all.css';

const App = () => {
    return (
        <div id="app">
            <Header />
            <MainPage />
        </div>
    );
}

export default App;
