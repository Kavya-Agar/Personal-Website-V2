import React from "react";
import { Image } from "./About/Image.jsx";
import { Text } from "./About/Text.jsx";
import { Skills } from "./About/Skills.jsx";
import { Linkedin } from "./About/Linkedin.jsx";
import { Resume } from "./About/Resume.jsx";
import { CopyButton } from "./About/CopyButton.jsx";

export default function About() {
    return (
        <div className="bg-green-900 min-h-screen w-full">
            <div className="pt-20">

                <div className="flex justify-center mt-8 mb-4">
                    <div className="w-full max-w-4xl px-4">
                        <div className="text-7xl text-center md:text-left text-amber-100 lato-black">
                            About Me
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center px-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 w-full max-w-4xl
                                 bg-emerald-950 bg-opacity-80 rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-800">
                        <Image />
                        <div className="flex-1 flex flex-col justify-center">
                            <Text />
                            <div className="mt-6 flex flex-col-2 space-x-4">
                                <Linkedin />
                                <Resume />
                                <CopyButton />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}