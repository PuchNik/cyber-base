import { Link } from "react-router-dom";

function LinkCard({ to, title, description, className = "card" }) {
    return (
        <Link className={className} to={to}>
            <h3>{title}</h3>
            {description ? <p>{description}</p> : null}
        </Link>
    );
}

export default LinkCard;
