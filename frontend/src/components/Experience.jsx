import { Timeline } from "./Experience/Timeline";

export default function Experience({ enabled }) {
    return (
        <div className="min-h-screen w-full pt-20">
            <div className="flex justify-center mt-8 mb-4">
                <div className="w-full max-w-4xl px-4">
                    <div className={`text-7xl text-center md:text-left lato-black ${enabled ? "text-amber-400" : "text-amber-100"}`}>
                        Experience
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center px-4">
                <div
                  className={[
                    "flex flex-col md:flex-row items-center md:items-start justify-center gap-12 w-full max-w-4xl bg-opacity-80 rounded-3xl shadow-2xl p-8 md:p-12 border",
                    enabled
                      ? "bg-rose-950 border-rose-800"
                      : "bg-emerald-950 border-emerald-800",
                  ].join(" ")}
                >
                    <Timeline enabled={enabled} />
                </div>
            </div>
        </div>
    );
}
