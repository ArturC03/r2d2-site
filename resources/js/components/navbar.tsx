import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import LinkButton from '@/components/link-button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-xl font-bold">R2D2</span>
                </div>

                {/* Navegação para Desktop */}
                <nav className="hidden md:flex space-x-6">
                    <LinkButton href="/">Home</LinkButton>
                    <LinkButton href="/docs">Documentation</LinkButton>
                    <LinkButton href="/examples">Examples</LinkButton>
                    <LinkButton href="/community">Community</LinkButton>
                    <LinkButton href="/blog">Blog</LinkButton>
                </nav>

                {/* Navegação para Mobile */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className="flex flex-col space-y-4 pt-8">
                                <LinkButton href="/">Home</LinkButton>
                                <LinkButton href="/docs">Documentation</LinkButton>
                                <LinkButton href="/examples">Examples</LinkButton>
                                <LinkButton href="/community">Community</LinkButton>
                                <LinkButton href="/blog">Blog</LinkButton>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
