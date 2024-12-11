import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import './index.css';
import App from './App.tsx';
import { api } from './api/pokemonApi.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </StrictMode>,
);
