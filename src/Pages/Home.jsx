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
        // <div classNameName="container mx-auto mt-36 px-8">
        //     <div classNameName="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        //         {personajes.map((personaje) => (
        //             <div key={personaje.id} classNameName= bg-[#222] rounded-xlded-xl shadow-lg p-4 overflow-hidden aspect-[3/4] w-44 flex flex-col">
        //                 <p classNameName="text-center font-bold tracking-wider uppercase text-xl text-white mb-2 md:text-2xl">
        //                     {personaje.Nombre}
        //                 </p>
        //                 <div classNameName="w-full h-full flex justify-center">
        //                     <img 
        //                         src={personaje.imagen} 
        //                         alt={personaje.Nombre} 
        //                         classNameName="h-full object-cover rounded-lg"
        //                     />
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>

        <div className="mt-36">
            <div className="slider">
                <div className="slide-track">
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/xiao.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/diluc.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/arlequino.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/cyno.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/fischl.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/noelle.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/raiden.png" alt=""/>
                    </div>

                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/xiao.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/diluc.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/arlequino.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/cyno.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/fischl.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/noelle.png" alt=""/>
                    </div>
                    <div className="slide bg-[#222] rounded-xl">
                        <img src="/Icons/raiden.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    );
}
