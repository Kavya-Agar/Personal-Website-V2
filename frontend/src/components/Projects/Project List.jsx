export const ProjectList = () => {
    return (
        <div className="bg-green-900 min-h-screen w-full pt-20">
            <div className="flex justify-center mt-8 mb-4">
                <div className="w-full max-w-4xl px-4">
                    <div className="text-7xl text-center md:text-left text-amber-100 lato-black mb-4">
                        Projects
                    </div>

                    <div className="grid grid-cols-1 gap-6 lato-regular">
                        <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full">
                            <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
                                FIN-ance
                            </h3>
                            <p className='text-amber-100 mb-2 text-sm sm:text-base'>
                                A simple fish-themed finance tracker that allows users to track their income and expenses. The app provides a simple UI
                                for users to manage their finances and get insights into their spendings to see where they can save money.
                            </p>
                            <h3 className='text-amber-100 text-sm sm:text-base'>
                                Technologies Used:
                                <div className="space-x-3 mt-1">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">React</span>
                                    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Django</span>
                                    <span className="bg-orange-100 text-orange-400 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Tensorflow</span>
                                    <span className="bg-purple-100 text-purple-400 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Scikit-Learn</span>
                                    <span className="bg-indigo-100 text-indigo-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">PostgreSQL</span>
                                    <span className="bg-cyan-100 text-cyan-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Swift</span>
                                    <span className="bg-green-100 text-green-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Docker</span>
                                </div>
                            </h3>
                            
                            <a href="https://github.com/Kavya-Agar/fin-ance"
                                className="mt-6 text-blue-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>

                        <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full">
                            <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
                                Personal Website V2
                            </h3>
                            <p className='text-amber-100 mb-2 text-sm sm:text-base'>
                                The second rendition of my personal website to showcase my projects and skills. 
                                UI was a major focus for this version to create a visually appealing and responsive experience. 
                                Emphasis was placed on clean design, accessibility, and smooth navigation across devices.
                            </p>
                            <h3 className='text-amber-100 text-sm sm:text-base'>
                                Technologies Used:
                                <div className="space-x-3 mt-1">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">React</span>
                                    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Django</span>
                                </div>
                            </h3>
                            
                            <div className="mt-6 text-blue-500">
                                This website
                            </div>
                        </div>

                        <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full">
                            <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
                                Heart R8
                            </h3>
                            <p className='text-amber-100 mb-2 text-sm sm:text-base'>
                                A low-cost wristband for older adults that detects abnormal heart rhythms and alerts them in case of arrythmias. 
                                The wristband is designed to be simple and easy to use, easing the process of managing cardiac health.
                            </p>
                            <h3 className='text-amber-100 text-sm sm:text-base'>
                                Technologies Used:
                                <div className="space-x-3 mt-1">
                                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Arduino</span>
                                    <span className="bg-stone-100 text-stone-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">C++</span> 
                                </div>
                            </h3>
                            
                            <a href="https://devpost.com/software/heart-rate-pulse-sensor"
                                className="mt-6 text-blue-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>

                        <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full">
                            <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
                                Personal Website V1
                            </h3>
                            <p className='text-amber-100 mb-2 text-sm sm:text-base'>
                                The first rendition of my personal website to showcase my projects and skills so far as well as serve as a learning opportunity.
                                The website was designed to be simple and easy to navigate, as well as responsive to different screen sizes.
                            </p>
                            <h3 className='text-amber-100 text-sm sm:text-base'>
                                Technologies Used:
                                <div className="space-x-3 mt-1">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">React</span>
                                    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">Django</span>
                                </div>
                            </h3>
                            
                            <a href="https://github.com/Kavya-Agar/Personal-Website"
                                className="mt-6 text-blue-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}