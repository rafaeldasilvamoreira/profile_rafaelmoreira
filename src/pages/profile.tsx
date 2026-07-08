import {
    Mail,
    Code2,
    Database,
    MonitorSmartphone,
    Check,
} from "lucide-react";


import { Card, CardContent } from "@/components/ui/card";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import Github from "@/assets/github.png";
import Linkedin from "@/assets/linkedin.png";
import profileImage from "@/assets/image.png";

export function Profile() {

    const [copied, setCopied] = useState(false);

    async function handleCopyEmail() {
        await navigator.clipboard.writeText("contato.devrafael@gmail.com");

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }


    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6 py-12">
            <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-700/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb25,transparent_45%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#06b6d425,transparent_45%)]" />

            <Card className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 shadow-[0_0_80px_rgba(0,0,0,.6)] backdrop-blur-2xl">
                <CardContent className="relative p-10">
                    <div className="absolute left-6 top-6 flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="relative mt-4">
                            <pre className="absolute -left-32 top-8 -z-10 hidden text-xs leading-5 text-cyan-400/10 lg:block">
                                {`const developer = {
    name: "Rafael",
    role: "Full Stack",
    stack: [
        "React",
        "TypeScript",
        "Node.js",       
        "SQL Server"
    ]
}`}
                            </pre>

                            <div className="absolute -inset-6 rounded-full bg-cyan-500/20 blur-3xl" />

                            <img
                                src={profileImage}
                                alt="Rafael"
                                className="relative h-52 w-52 rounded-full border-4 border-cyan-400/30 object-cover shadow-[0_0_70px_rgba(34,211,238,.25)]"
                            />

                            <span className="absolute bottom-4 right-4 h-5 w-5 rounded-full border-2 border-white bg-green-500 animate-pulse" />
                        </div>

                        <h1 className="mt-8 bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-center text-5xl font-extrabold text-transparent">
                            Rafael Moreira
                        </h1>

                        <p className="mt-3 text-lg font-semibold tracking-wide text-cyan-400">
                            Full Stack Developer
                        </p>


                        <p className="mt-4 max-w-xl text-center leading-8 text-slate-300">
                            Desenvolvedor Full Stack dedicado ao desenvolvimento
                            de aplicações web modernas, com foco em performance,
                            escalabilidade e experiência do usuário, sempre
                            buscando evoluir e aprender novas tecnologias.
                        </p>

                        <div className="mt-6 grid w-full gap-5">
                            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-cyan-500/15 p-3">
                                        <MonitorSmartphone className="h-6 w-6 text-cyan-400" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Front-end
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-400">
                                            React, TypeScript, Tailwind CSS,
                                            JavaScript, CSS e interfaces modernas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-cyan-500/15 p-3">
                                        <Code2 className="h-6 w-6 text-cyan-400" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Back-end
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-400">
                                            Node.js, APIs REST, Prisma,
                                            autenticação e integrações.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-cyan-500/15 p-3">
                                        <Database className="h-6 w-6 text-cyan-400" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            Banco de Dados
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-400">
                                            SQL Server, PostgreSQL, MongoDB, modelagem e
                                            otimização de consultas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-wrap justify-center gap-3">
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                React
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                TypeScript
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                Tailwind CSS
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                JavaScript
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                Node.js
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                SQL Server
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                PostgreSQL
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                Azure
                            </span>
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                                Embratel
                            </span>
                        </div>

                        <div className="mt-10 grid w-full grid-cols-2 gap-4">
                            <Button className="h-12 rounded-xl bg-[#161B22] transition-all duration-300 hover:scale-[1.02] hover:bg-[#21262D]">
                                <a
                                    href="https://github.com/rafaeldasilvamoreira"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-2"
                                >
                                    <img
                                        src={Github}
                                        alt="GitHub"
                                        className="h-7 w-7"
                                    />

                                    GitHub
                                </a>
                            </Button>

                            <Button className="h-12 rounded-xl bg-[#0077B5] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#008dd6]">
                                <a
                                    href="https://www.linkedin.com/in/rafael-moreira-27a585260/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-2"
                                >
                                    <img
                                        src={Linkedin}
                                        alt="LinkedIn"
                                        className="h-7 w-7"
                                    />

                                    LinkedIn
                                </a>
                            </Button>
                        </div>



                        <Button
                            onClick={handleCopyEmail}
                            className="mt-3 h-12 w-full cursor-pointer rounded-xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,.35)] active:scale-100"
                        >
                            {copied ? (
                                <>
                                    <Check className="mr-2 h-5 w-5" />
                                    Email copiado!
                                </>
                            ) : (
                                <>
                                    <Mail className="mr-2 h-5 w-5" />
                                    Copiar e-mail
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}