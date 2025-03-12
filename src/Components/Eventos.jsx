import { useState } from "react";

export default function Eventos() {

    const [tab, setTab] = useState(1); // Estado inicial en la pestaña 1

    return(
        <div>
            <div className="text-center mt-36 flex justify-center gap-x-8">
                
                <div className="flex flex-col gap-y-2 bg-red-200">
                    <button onClick={() => setTab(1)} className="px-4 py-2 bg-blue-600 hover:transition-all hover:scale-110 shadow-[0px_6px_15px_rgba(0,0,0,0.35)] tracking-wider uppercase text-white font-semibold rounded-lg">
                        Evento 1</button>
                    <button onClick={() => setTab(2)} className="px-4 py-2 bg-blue-600 hover:transition-all hover:scale-110 shadow-[0px_6px_15px_rgba(0,0,0,0.35)] tracking-wider uppercase text-white font-semibold rounded-lg">
                        Evento 2</button>
                    <button onClick={() => setTab(3)} className="px-4 py-2 bg-blue-600 hover:transition-all hover:scale-110 shadow-[0px_6px_15px_rgba(0,0,0,0.35)] tracking-wider uppercase text-white font-semibold rounded-lg">
                        Evento 3</button>
                </div>

                <div className="border border-gray-600 rounded-md bg-blue-200 w-2/3">
                    {tab === 1 && <p className="mx-8 tracking-wide font-semibold">
                        info 1</p>}
                    {tab === 2 && <p className="mx-8 tracking-wide font-semibold">
                        info 2</p>}
                    {tab === 3 && <p className="mx-8 tracking-wide font-semibold">
                        info 3</p>}
                </div>
            </div>
        </div>
    )
}