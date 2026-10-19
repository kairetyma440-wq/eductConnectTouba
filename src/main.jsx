import React from 'react';import {createRoot} from 'react-dom/client';import {HashRouter} from 'react-router-dom';
import App from './App.jsx';import {ToastProvider} from './components/ui.jsx';import './styles.css';
createRoot(document.getElementById('root')).render(<HashRouter><ToastProvider><App/></ToastProvider></HashRouter>);
