import { Head } from "@inertiajs/react";
import { Zap, ShieldAlert, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Maintenance() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500/30">
            <Head title="System Maintenance" />

            {/* Dynamic Background Glow */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
                }}
            />

            {/* Background Orbs */}
            <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen" />

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 sm:p-12">
                {/* Main Glassmorphism Card */}
                <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl sm:p-16">
                    <div className="flex flex-col items-center text-center">
                        {/* Application Logo Container */}
                        <ApplicationLogo className="h-40 my-10 w-auto fill-current text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-pulse" />

                        {/* Text Content */}
                        <h1 className="mb-4 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
                            Launching Soon
                        </h1>
                        <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400 sm:text-xl">
                            We are putting the finishing touches on our new
                            platform to bring you an incredible experience. Stay
                            tuned, we will be live very soon!
                        </p>

                        <hr className="my-10 w-full border-slate-800" />

                        {/* Contact Section */}
                        <div className="flex flex-col items-center justify-between w-full space-y-4 sm:flex-row sm:space-y-0">
                            <span className="text-sm text-slate-500">
                                Launching very soon. Check back shortly.
                            </span>
                            <a
                                href="mailto:info@createwithseven.com"
                                className="group flex items-center space-x-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white ring-1 ring-white/10 hover:ring-white/20"
                            >
                                <Mail className="h-4 w-4" />
                                <span>Contact Support</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer branding */}
                <div className="mt-12 text-center text-sm font-medium tracking-wide text-slate-600">
                    &copy; {new Date().getFullYear()} createwithseven. All
                    rights reserved.
                </div>
            </div>
        </div>
    );
}
