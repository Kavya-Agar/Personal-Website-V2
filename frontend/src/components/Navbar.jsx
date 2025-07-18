
import logo from '../assets/half-avocado-fresh-ripe-icon-white-background-vector-ilustration_547674-3121.avif';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class="flex items-center justify-between px-8 py-4 w-full top-0 left-0 fixed z-50">

            <div class="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" class="h-12 w-12 rounded-full mr-4" />
                </Link>
            </div>

            <div class="flex items-center space-x-8 text-lg font-mono text-stone-300">
                <Link to="/about" class="hover:text-amber-400 transition">About Me</Link>
                <Link to="/projects" class="hover:text-amber-400 transition">Projects</Link>
                <Link to="/skills" class="hover:text-amber-400 transition">Skills</Link>

                <a
                    href="https://github.com/Kavya-Agar"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-amber-400 text-white px-5 py-2 rounded-full font-bold hover:bg-amber-800 transition"
                >
                    GITHUB
                </a>
            </div>
        </nav>
    );
}


