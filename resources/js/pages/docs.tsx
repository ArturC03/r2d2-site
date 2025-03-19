import Footer from '@/components/footer';
import LinkButton from '@/components/link-button';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Head } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Docs() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                searchInputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, []);

    return (
        <>
            <Head title="Documentação">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <Navbar />

                <main className="flex flex-grow flex-col md:flex-row">
                    <div className="border-b p-4 md:hidden">
                        <Button variant="outline" className="flex w-full items-center justify-between" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <span>Navegação da Documentação</span>
                            {sidebarOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </Button>
                    </div>

                    <div className={`w-full flex-shrink-0 border-r md:w-64 lg:w-72 ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
                        <div className="border-b p-4">
                            <div className="relative">
                                <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Ctrl + K"
                                    className="w-full rounded border py-2 pr-2 pl-10 text-sm"
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <nav className="space-y-1">
                                <LinkButton href="/docs/introducao" className="block py-2 font-medium">
                                    Introdução
                                </LinkButton>

                                <Collapsible className="pt-2">
                                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
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
                                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
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
                                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
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

                    <div className="flex-grow overflow-auto p-6 md:p-8">
                        <div className="mx-auto max-w-3xl">
                            <h1 className="mb-6 text-3xl font-bold">Introdução à R2D2</h1>

                            <div className="prose max-w-none">
                                <p className="lead mb-6 text-xl">
                                    R2D2 é uma linguagem de programação moderna projetada para simplicidade, eficiência e expressividade. Esta
                                    documentação o guiará por todos os aspectos da linguagem, desde a instalação até conceitos avançados.
                                </p>

                                <div className="mt-8">
                                    <Button variant="outline">Próximo: Instalação</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
