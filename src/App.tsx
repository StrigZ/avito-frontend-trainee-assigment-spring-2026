import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Layout from './components/Layout';
import AdsQueryProvider from './context/ads-query-provider';
import AdsPage from './pages/ads-page';
import EditPage from './pages/edit-page';
import ItemPage from './pages/item-page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="ads"
                        element={
                            <AdsQueryProvider>
                                <AdsPage />
                            </AdsQueryProvider>
                        }
                    />
                    <Route path="ads/:id" element={<ItemPage />} />
                    <Route path="ads/:id/edit" element={<EditPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/ads" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
