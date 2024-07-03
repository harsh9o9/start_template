import { NavLink } from 'react-router-dom';
const mainMenu = {};

export function Header() {
    return (
        <header>
            <div>
                <div>
                    {/* logo link */}
                    <NavLink to="/">Home</NavLink>
                    <nav>{/* render va bar items using config mainMenu */}
                    <NavLink to="/sample">Sample</NavLink>
                    </nav>
                    <hr/>
                </div>
            </div>
        </header>
    );
}
