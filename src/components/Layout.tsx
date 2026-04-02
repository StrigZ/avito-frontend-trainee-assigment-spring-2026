import { Outlet } from 'react-router';

export default function Layout() {
    return (
        <main className="container mx-auto h-screen overflow-hidden px-8 pt-3 pb-5.5">
            <Outlet />
        </main>
    );
}
