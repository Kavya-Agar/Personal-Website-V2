import logo from '../assets/avocado.avif';
import { Link } from 'react-router-dom';
import { IoMdSwitch } from "react-icons/io";
import Switch from '@mui/material/Switch';
import * as React from 'react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Navbar() {
    return (
        <nav class="flex items-center justify-between px-8 py-4 w-full top-0 left-0 fixed z-50">

            <div class="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" class="h-12 w-12 rounded-full mr-4" />
                </Link>
                <div class="chewy-regular text-2xl text-stone-300">
                    Kavya
                </div>
            </div>

            <div>
                <Switch {...label} color="warning" />
            </div>

            <div class="flex items-center space-x-8 text-md lato-black text-stone-300">
                <Link to="/about" class="hover:text-amber-400 hover:scale-120 transition">About Me</Link>
                <Link to="/experience" class="hover:text-amber-400 hover:scale-120 transition">Experience</Link>
                <Link to="/projects" class="hover:text-amber-400 hover:scale-120 transition">Projects</Link>

                <a
                    href="https://github.com/Kavya-Agar"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-amber-400 text-white px-5 py-2 rounded-full font-bold hover:bg-amber-800"
                >
                    GITHUB
                </a>
            </div>
        </nav>
    );
}