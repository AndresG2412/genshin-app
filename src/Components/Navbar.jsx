export default function Navbar() {
    return(
        <div 
            className="hidden md:flex w-2/4 h-auto justify-between items-center font-semibold text-2xl py-4 px-12 rounded-2xl bg-gray-200 shadow-2xl">
            <a href="/teams" className="hover:scale-110 hover:transition-transform">EQUIPOS</a>
            <a href="/" className="hover:scale-110 hover:transition-transform">INICIO</a>
            <a href="" className="hover:scale-110 hover:transition-transform">GUIAS</a>
            <a href="" className="hover:scale-110 hover:transition-transform">FARMEO</a>
        </div>
    )
}