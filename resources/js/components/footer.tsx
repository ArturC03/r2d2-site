import React from 'react';
import { Button } from '@/components/ui/button';
import LinkButton from '@/components/link-button';

export default function Footer() {
    const handleGitHubClick = () => {
        window.open('https://github.com/ArturC03/r2d2', '_blank');
    };

    return (
        <footer className="py-4 border-t ">
            <div className="container mx-auto px-4">
                <div className="flex  flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <LinkButton href="/"><span className="font-bold">R2D2</span> © {new Date().getFullYear()}</LinkButton>
                    </div>
                    <div className="flex flex-wrap space-x-6">
                        <LinkButton href="/about">About</LinkButton>
                        <LinkButton href="/license">License</LinkButton>
                        <Button variant="link" onClick={handleGitHubClick}>
                            GitHub
                        </Button>
                        <LinkButton href="/contact">Contact</LinkButton>
                    </div>
                </div>
            </div>
        </footer>
    );
}
