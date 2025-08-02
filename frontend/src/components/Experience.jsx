import { Skills } from "./About/Skills";
import { Timeline } from "./Experience/Timeline";

export default function Experience() {
    return (
        <div className="min-h-screen w-full pt-20">
            <div className="flex justify-center mt-8 mb-4">
                <div className="w-full max-w-4xl px-4">
                    <div className="text-7xl text-center md:text-left text-amber-100 lato-black">
                        Experience
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 w-full max-w-4xl bg-emerald-950 bg-opacity-80 rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-800">
                    <Timeline />
                </div>
            </div>
        </div>
    );
}