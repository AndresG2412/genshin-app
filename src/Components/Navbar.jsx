import { Link } from "react-router";

export default function Navbar() {
    return (
        <div>
            <div 
                className="shadowwhite fixed top-6 left-1/2 -translate-x-1/2 hidden sm:flex w-3/4 md:w-2/4 h-auto justify-between items-center 
                        font-semibold text-xl md:text-lg lg:text-2xl py-4 px-8 md:px-12 rounded-xl backnavbar shadow-2xl 
                        text-white tracking-widest">
                <Link to="/Teams" className="hover:scale-110 hover:transition-transform">EQUIPOS</Link>
                <Link to="/" className="hover:scale-110 hover:transition-transform">INICIO</Link>
                <Link to="/Guies" className="hover:scale-110 hover:transition-transform">GUIAS</Link>
                <Link to="/Farm" className="hover:scale-110 hover:transition-transform">FARMEO</Link>

            </div>
            <Link className="" to={"../logs/Login"}>
                <svg className="invert size-14 fixed top-6 right-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </Link>
        </div>
    );
}
