import React, { useState, useEffect } from "react";

export default function Home() {
    const [personajes, setPersonajes] = useState([]);

    const getPersonajes = async () => {
        try {
            const response = await fetch('/Data.json');
            if (!response.ok) {
                throw new Error("No se pudo cargar el JSON");
            }
            const data = await response.json();
            setPersonajes(data);
        } catch (error) {
            console.error("Error cargando los personajes:", error);
        }
    };

    useEffect(() => {
        getPersonajes();
    }, []);

    return (
        <div className="container mx-auto mt-36 px-8">
            <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {personajes.map((personaje) => (
                    <div key={personaje.id} className="bg-[#222] rounded-xl shadow-lg p-4 overflow-hidden aspect-[3/4] flex flex-col">
                        <p className="text-center font-bold tracking-wider uppercase text-xl text-white mb-2 md:text-2xl">
                            {personaje.Nombre}
                        </p>
                        <div className="w-full h-full flex justify-center">
                            <img 
                                src={personaje.imagen} 
                                alt={personaje.Nombre} 
                                className="h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
