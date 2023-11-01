import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './App.tsx'

import './index.css'

const queryClientProvider = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClientProvider}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
