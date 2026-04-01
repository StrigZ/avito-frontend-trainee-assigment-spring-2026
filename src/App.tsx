import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AdsPage from './pages/AdsPage';
import EditPage from './pages/EditPage';
import ItemPage from './pages/ItemPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="ads" element={<AdsPage />} />
                <Route path="ads/:id" element={<ItemPage />} />
                <Route path="ads/:id/edit" element={<EditPage />} />

                <Route path="*" element={<Navigate to="/ads" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
