import { useEffect, useMemo, useState } from "react";

const slashColors = [
    "rgba(255, 255, 255, 0.85)",
    "rgba(244, 178, 77, 0.7)",
    "rgba(123, 183, 176, 0.75)",
    "rgba(94, 165, 255, 0.65)",
];

const createSlash = () => {
    const length = 160 + Math.floor(Math.random() * 160);
    const width = 2 + Math.floor(Math.random() * 2);
    const angle = -35 + Math.random() * 70;
    return {
        length,
        width,
        angle,
        color: slashColors[Math.floor(Math.random() * slashColors.length)],
        glow: slashColors[Math.floor(Math.random() * slashColors.length)],
    };
};

function PixelExplosion() {
    const [slashes, setSlashes] = useState([]);

    useEffect(() => {
        const handleClick = (event) => {
            const id = `${Date.now()}-${Math.random()}`;
            const payload = {
                id,
                x: event.clientX,
                y: event.clientY,
                slash: createSlash(),
            };
            setSlashes((prev) => [...prev, payload]);

            window.setTimeout(() => {
                setSlashes((prev) => prev.filter((item) => item.id !== id));
            }, 700);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    const rendered = useMemo(
        () =>
            slashes.map((slash) => (
                <div
                    key={slash.id}
                    className="katana-slash"
                    style={{
                        left: `${slash.x}px`,
                        top: `${slash.y}px`,
                        "--length": `${slash.slash.length}px`,
                        "--width": `${slash.slash.width}px`,
                        "--angle": `${slash.slash.angle}deg`,
                        "--color": slash.slash.color,
                        "--glow": slash.slash.glow,
                    }}
                />
            )),
        [slashes]
    );

    return <div className="katana-slash-layer">{rendered}</div>;
}

export default PixelExplosion;
