import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AdsLayoutProvider from './context/ads-layout-provider';
import AdsQueryProvider from './context/ads-query-provider';
import AdsPage from './pages/ads-page';
import EditPage from './pages/edit-page';
import ItemPage from './pages/item-page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="ads"
                    element={
                        <AdsQueryProvider>
                            <AdsLayoutProvider>
                                <AdsPage />
                            </AdsLayoutProvider>
                        </AdsQueryProvider>
                    }
                />
                <Route path="ads/:id" element={<ItemPage />} />
                <Route path="ads/:id/edit" element={<EditPage />} />
                <Route path="*" element={<Navigate to="/ads" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
