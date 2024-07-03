import { NavLink } from 'react-router-dom';

export default function NoMatch() {
    return (
        <div>
            <h2>404</h2>
            <h1>Oops! Page not found</h1>
            <p>We are sorry, but the page you requested was not found</p>
            <NavLink to="/">Back to Home</NavLink>
        </div>
    );
}
