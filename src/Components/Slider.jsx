import { useState, useEffect } from "react";

export default function Slider() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("/Data.json") // Reemplaza con la URL correcta de tu JSON
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error("Error al obtener los datos:", error));
    }, []);

    return (
        <div className="mt-36 overflow-hidden">
            <div className="slider md:w-[60vw] w-[85vw]">
                <div className="slide-track flex">
                    {characters.concat(characters).map((char, index) => (
                        <div key={index} className="slide bg-[#222] rounded-xl flex flex-col items-center p-2">
                            <img src={char.imagen} alt={char.Nombre} className="w-32 h-32 object-contain"/>
                            <p className="text-white mt-2 text-center font-semibold">{char.Nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
