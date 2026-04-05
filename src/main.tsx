import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { Toaster } from './components/ui/sonner.tsx';
import { ThemeProvider } from './context/theme-provider.tsx';
import { getQueryClient } from './lib/query-client.ts';
import './styles/global.css';

const queryClient = getQueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <App />
                <Toaster />
            </ThemeProvider>
        </QueryClientProvider>
    </StrictMode>,
);
