// src/pages/Welcome.js
import Footer from '@/components/footer';
import LinkButton from '@/components/link-button';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Head } from '@inertiajs/react';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';

interface Platform {
    name: string;
    icon: JSX.Element;
}

export default function Welcome() {
    const platforms: Platform[] = [
        { name: 'MacOS', icon: <FaApple /> },
        { name: 'Windows', icon: <FaWindows /> },
        { name: 'Linux', icon: <FaLinux /> },
    ];

    const handleDownload = (platform: string) => {
        console.log(`Downloading for ${platform}`);
    };

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <Navbar />

                <main className="flex-grow">
                    <div className="container mx-auto px-4 py-16">
                        <div className="mb-16 flex flex-col items-center text-center">
                            <div className="mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-gray-900">
                                <span className="text-4xl font-bold">Logo</span>
                            </div>
                            <Separator className="max-w-2xl" />
                            <p className="my-4 max-w-2xl text-xl">
                                A modern programming language, not efficient and not intuitive. Designed to be done and not perform, allowing
                                developers to express simple ideas in a complex way.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="lg" variant="default">
                                            Download v0.0.1
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {platforms.map(({ name, icon }) => (
                                            <DropdownMenuItem key={name} onSelect={() => handleDownload(name)}>
                                                <span className="mr-2">{icon}</span>
                                                {name}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <LinkButton href="/docs" size="lg" variant="outline">
                                    Get Started
                                </LinkButton>
                            </div>
                        </div>

                        <div className="mt-24 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                            <div>
                                <h2 className="text-5xl leading-tight font-bold sm:text-6xl">
                                    Kinda Simple.
                                    <br />
                                    But Not That Simple.
                                </h2>
                            </div>
                            <div className="rounded-lg bg-gray-900 p-6 shadow-xl">
                                <pre className="overflow-auto text-green-400">
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

                <Footer />
            </div>
        </>
    );
}
