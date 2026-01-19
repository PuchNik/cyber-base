function SectionHeader({ title, description }) {
    return (
        <div className="section__head">
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
        </div>
    );
}

export default SectionHeader;
