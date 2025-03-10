import Slider from "../Components/Slider"
import Eventos from "../Components/Eventos"

export default function Home() {
    return(
        <div>
            <Eventos />
            <Slider />
            <p className="mx-auto text-center text-2xl text-white tracking-wide font-semibold uppercase mt-8 w-[60vw]">
                Busca un equipo, guia o farmeo para tu personaje favorito!</p>
        </div>
    )
}