import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Applayout() {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
