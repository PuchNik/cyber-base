function Contacts() {
    return (
        <section className="section section--compact">
            <div className="section__head">
                <h2>Контакты</h2>
                <p>Связаться с командой и предложить тему.</p>
            </div>
            <div className="contact-card">
                <div>
                    <strong>Email</strong>
                    <span>team@cyberbase.local</span>
                </div>
                <div>
                    <strong>Соцсети</strong>
                    <span>Telegram • VK • LinkedIn</span>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
