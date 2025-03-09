import { Link } from "react-router";

export default function Navbar() {
    return (
        <div 
            className="shadowwhite fixed top-6 left-1/2 -translate-x-1/2 hidden sm:flex w-3/4 md:w-2/4 h-auto justify-between items-center 
                      font-semibold text-xl md:text-lg lg:text-2xl py-4 px-8 md:px-12 rounded-xl backnavbar shadow-2xl 
                      text-white tracking-widest">
            <Link to="/teams" className="hover:scale-110 hover:transition-transform">EQUIPOS</Link>
            <Link to="/" className="hover:scale-110 hover:transition-transform">INICIO</Link>
            <Link to="/Guies" className="hover:scale-110 hover:transition-transform">GUIAS</Link>
            <Link to="/Farm" className="hover:scale-110 hover:transition-transform">FARMEO</Link>
        </div>
    );
}
