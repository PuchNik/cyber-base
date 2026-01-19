import { memo } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation.js";

const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";

function Navigation({ className = "", onNavigate }) {
    return (
        <nav className={`nav ${className}`.trim()}>
            {navLinks.map((link) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={getNavLinkClass}
                    onClick={onNavigate}
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default memo(Navigation);
