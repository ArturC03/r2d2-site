// src/pages/Welcome.js
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FaApple, FaWindows, FaLinux } from 'react-icons/fa';
import Navbar from '@/components/navbar';  // Importando Navbar
import Footer from '@/components/footer';  // Importando Footer
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export default function Welcome() {

    const handleDownload = (platform: string) => {
        // Lógica para lidar com o download para a plataforma selecionada
        console.log(`Downloading for ${platform}`);
        // Você pode redirecionar o usuário para o link de download específico aqui
    };

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="min-h-screen flex flex-col">
                <Navbar /> {/* Adicionando a Navbar aqui */}

                {/* Conteúdo Principal */}
                <main className="flex-grow">
                    <div className="container mx-auto px-4 py-16">
                        {/* Logo e Descrição */}
                        <div className="flex flex-col items-center text-center mb-16">
                            <div className="bg-gray-900 w-48 h-48 rounded-full mb-8 flex items-center justify-center">
                                <span className="text-4xl font-bold">Logo</span>
                            </div>
                            <Separator className="max-w-2xl" />
                            <p className="text-xl max-w-2xl mb-8">
                                A modern programming language, not efficient and not intuitive.
                                Designed to be done and not perform, allowing developers to express
                                simple ideas in a complex way.
                            </p>

                            {/* Botões de Ação */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="lg" variant="default">
                                            Download v0.0.1
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onSelect={() => handleDownload('MacOS')}>
                                            <FaApple className="mr-2" />
                                            MacOS
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={() => handleDownload('Windows')}>
                                            <FaWindows className="mr-2" />
                                            Windows
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={() => handleDownload('Linux')}>
                                            <FaLinux className="mr-2" />
                                            Linux
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button size="lg" variant="outline">
                                    Get Started
                                </Button>
                            </div>
                        </div>

                        {/* Citação e Exemplo de Código */}
                        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
                                    Kinda Simple.<br />
                                    But Not That Simple.
                                </h2>
                            </div>
                            <div className="bg-gray-900 rounded-lg shadow-xl p-6">
                                <pre className="text-green-400 overflow-auto">
                                    <code>
                                        {`pseudo fn main() {
  HelloWorld();
}

fn HelloWorld() {
  println("Hello World!");
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer /> {/* Adicionando o Footer aqui */}
            </div>
        </>
    );
}
