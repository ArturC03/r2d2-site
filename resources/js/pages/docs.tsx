import React, { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import LinkButton from '@/components/link-button';

// Import the Navbar and Footer components
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// Import the necessary icons from lucide-react
import { ChevronDown, ChevronRight, Search } from 'lucide-react';

export default function Docs() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Criar uma referência para o input de busca
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Usar o useEffect para escutar o atalho Ctrl + K
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            // Verificar se Ctrl (ou Cmd no Mac) e K foram pressionados
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault(); // Impedir o comportamento padrão (por exemplo, Ctrl + K no navegador)
                if (searchInputRef.current) {
                    searchInputRef.current.focus(); // Focar no input de busca
                }
            }
        };

        // Adicionar o event listener para keydown
        window.addEventListener('keydown', handleKeydown);

        // Limpar o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    return (
        <>
            <Head title="Documentação">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen flex flex-col">
                {/* Use Navbar Component */}
                <Navbar />

                {/* Main Content */}
                <main className="flex-grow flex flex-col md:flex-row">
                    {/* Sidebar Toggle for Mobile */}
                    <div className="md:hidden p-4 border-b">
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-between"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <span>Navegação da Documentação</span>
                            {sidebarOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </Button>
                    </div>

                    {/* Sidebar */}
                    <div
                        className={`border-r w-full md:w-64 lg:w-72 flex-shrink-0 ${sidebarOpen ? 'block' : 'hidden md:block'
                            }`}
                    >
                        <div className="p-4 border-b">
                            <div className="relative">
                                {/* Ícone de lupa dentro do input */}
                                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <input
                                    ref={searchInputRef} // Adiciona a referência ao input
                                    type="text"
                                    placeholder="Ctrl + K"
                                    className="w-full pl-10 pr-2 py-2 text-sm border rounded"
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <nav className="space-y-1">
                                <LinkButton href="/docs/introducao" className="block py-2 font-medium">
                                    Introdução
                                </LinkButton>

                                <Collapsible className="pt-2">
                                    <CollapsibleTrigger className="flex w-full items-center py-2 justify-between font-medium">
                                        <span>Primeiros Passos</span>
                                        <ChevronDown size={16} />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="ml-4 border-l pl-2">
                                        <LinkButton href="/docs/instalacao" className="block py-2">
                                            Instalação
                                        </LinkButton>
                                        <LinkButton href="/docs/hello-world" className="block py-2">
                                            Hello World
                                        </LinkButton>
                                        <LinkButton href="/docs/editor-setup" className="block py-2">
                                            Configuração do Editor
                                        </LinkButton>
                                    </CollapsibleContent>
                                </Collapsible>

                                <Collapsible className="pt-2">
                                    <CollapsibleTrigger className="flex w-full items-center py-2 justify-between font-medium">
                                        <span>Sintaxe Básica</span>
                                        <ChevronDown size={16} />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="ml-4 border-l pl-2">
                                        <LinkButton href="/docs/variaveis" className="block py-2">
                                            Variáveis
                                        </LinkButton>
                                        <LinkButton href="/docs/tipos-dados" className="block py-2">
                                            Tipos de Dados
                                        </LinkButton>
                                        <LinkButton href="/docs/operadores" className="block py-2">
                                            Operadores
                                        </LinkButton>
                                        <LinkButton href="/docs/controle-fluxo" className="block py-2">
                                            Controle de Fluxo
                                        </LinkButton>
                                    </CollapsibleContent>
                                </Collapsible>

                                <Collapsible className="pt-2">
                                    <CollapsibleTrigger className="flex w-full items-center py-2 justify-between font-medium">
                                        <span>Funções</span>
                                        <ChevronDown size={16} />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="ml-4 border-l pl-2">
                                        <LinkButton href="/docs/funcoes-definicao" className="block py-2">
                                            Definição de Funções
                                        </LinkButton>
                                        <LinkButton href="/docs/parametros" className="block py-2">
                                            Parâmetros
                                        </LinkButton>
                                        <LinkButton href="/docs/retorno" className="block py-2">
                                            Retorno
                                        </LinkButton>
                                        <LinkButton href="/docs/escopo" className="block py-2">
                                            Escopo
                                        </LinkButton>
                                    </CollapsibleContent>
                                </Collapsible>

                                <LinkButton href="/docs/estruturas-dados" className="block py-2">
                                    Estruturas de Dados
                                </LinkButton>
                                <LinkButton href="/docs/orientacao-objetos" className="block py-2">
                                    Orientação a Objetos
                                </LinkButton>
                                <LinkButton href="/docs/modulos" className="block py-2">
                                    Módulos
                                </LinkButton>
                                <LinkButton href="/docs/async" className="block py-2">
                                    Programação Assíncrona
                                </LinkButton>
                                <LinkButton href="/docs/api" className="block py-2">
                                    Referência da API
                                </LinkButton>
                            </nav>
                        </div>
                    </div>

                    {/* Main Documentation Content */}
                    <div className="flex-grow p-6 md:p-8 overflow-auto">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-3xl font-bold mb-6">Introdução à R2D2</h1>

                            <div className="prose max-w-none">
                                <p className="lead text-xl mb-6">
                                    R2D2 é uma linguagem de programação moderna projetada para
                                    simplicidade, eficiência e expressividade. Esta documentação o
                                    guiará por todos os aspectos da linguagem, desde a instalação até
                                    conceitos avançados.
                                </p>

                                {/* Add other sections here... */}

                                <div className="mt-8">
                                    <Button variant="outline">Próximo: Instalação</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Use Footer Component */}
                <Footer />
            </div>
        </>
    );
}
