import SectionHeader from "../components/ui/SectionHeader.jsx";

function Contacts() {
    return (
        <section className="section section--compact">
            <SectionHeader
                title="Контакты"
                description="Связаться с командой и предложить тему."
            />
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
