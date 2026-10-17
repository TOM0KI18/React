import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './HelloWorld';
import App from './App';
import './index.css';
import FirstComponent from './FirstComponent';
import PanelUsuario from './Renderizado';
import Render2 from './Render2';
import Funciones from './Funciones';
import Funciones2 from './Funciones2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello />
    <FirstComponent />
    <PanelUsuario />
    <Render2 />
    <Funciones />
    <Funciones2 />
  </React.StrictMode>

);
