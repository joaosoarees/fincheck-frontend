import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { Router } from "./Router";

export function App() {
  const queryClientProvider = new QueryClient();

  return (
    <QueryClientProvider client={queryClientProvider}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  )
}
