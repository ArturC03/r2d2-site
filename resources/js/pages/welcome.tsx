import AppLogo from '@/components/app-logo';
import Footer from '@/components/footer';
import LinkButton from '@/components/link-button';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Head } from '@inertiajs/react';
import React from 'react';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';
import { Img } from 'react-image';

interface Platform {
    name: string;
    icon: React.ReactNode;
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
            <div className="bg-background text-foreground flex min-h-screen flex-col font-sans">
                <Navbar />
                <main className="container mx-auto grid flex-grow items-center gap-16 px-4 py-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="m-0 flex items-center space-x-4">
                            <div className="w-64">
                                <AppLogo />
                            </div>
                            <div className="bg-primary text-secondary rounded-full px-4 py-1 text-sm font-semibold">ALPHA v0.0.1</div>
                        </div>
                        <h1 className="text-foreground text-5xl leading-tight font-bold">
                            Kinda simple
                            <br />
                            But not that simple
                        </h1>
                        <p className="text-muted-foreground text-xl">
                            Not efficient. Not intuitive. A programming language designed to make simple ideas complex, pushing the boundaries of
                            developer experience.
                        </p>
                        <div className="flex space-x-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="lg" variant="default">
                                        Download
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
                    <div className="relative hidden lg:block">
                        <div className="bg-primary/10 absolute inset-0 -z-10 rounded-xl blur-3xl"></div>
                        <Img src="/images/rexDino.svg" alt="Rex Dino Mascot" className="mx-auto mb-6 h-auto w-full max-w-xs opacity-80" />
                        <div className="bg-secondary relative z-10 rounded-xl p-8 shadow-2xl">
                            <pre className="text-primary overflow-auto">
                                <code>
                                    {`pseudo fn main() {
  HelloWorld();
}
fn HelloWorld() {
  println("Not your
  average language!");
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
