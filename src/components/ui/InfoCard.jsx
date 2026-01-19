function InfoCard({ title, description, className = "card card--tall" }) {
    return (
        <article className={className}>
            <h3>{title}</h3>
            {description ? <p>{description}</p> : null}
        </article>
    );
}

export default InfoCard;
