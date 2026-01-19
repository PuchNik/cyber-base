import { useEffect, useMemo, useState } from "react";

const colors = [
    "#7bb7b0",
    "#f4b24d",
    "#8fb9ff",
    "#caa8ff",
    "#7fc8b3",
    "#fff3e6",
];

const createParticles = () => {
    const count = 12 + Math.floor(Math.random() * 6);
    return Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 24 + Math.random() * 36;
        const size = 4 + Math.floor(Math.random() * 4);
        return {
            dx: Math.cos(angle) * distance,
            dy: Math.sin(angle) * distance,
            size,
            color: colors[Math.floor(Math.random() * colors.length)],
        };
    });
};

function PixelExplosion() {
    const [explosions, setExplosions] = useState([]);

    useEffect(() => {
        const handleClick = (event) => {
            const id = `${Date.now()}-${Math.random()}`;
            const payload = {
                id,
                x: event.clientX,
                y: event.clientY,
                particles: createParticles(),
            };
            setExplosions((prev) => [...prev, payload]);

            window.setTimeout(() => {
                setExplosions((prev) => prev.filter((item) => item.id !== id));
            }, 650);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    const rendered = useMemo(
        () =>
            explosions.map((explosion) => (
                <div
                    key={explosion.id}
                    className="pixel-explosion"
                    style={{
                        left: `${explosion.x}px`,
                        top: `${explosion.y}px`,
                    }}
                >
                    {explosion.particles.map((particle, index) => (
                        <span
                            key={`${explosion.id}-${index}`}
                            className="pixel"
                            style={{
                                "--dx": `${particle.dx}px`,
                                "--dy": `${particle.dy}px`,
                                "--size": `${particle.size}px`,
                                "--color": particle.color,
                            }}
                        />
                    ))}
                </div>
            )),
        [explosions]
    );

    return <div className="pixel-explosion-layer">{rendered}</div>;
}

export default PixelExplosion;
