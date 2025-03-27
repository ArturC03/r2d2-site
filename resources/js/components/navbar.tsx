import LinkButton from '@/components/link-button';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import AppLogo from './app-logo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <LinkButton className="h-12" variant="ghost" href="/">
                        <AppLogo />
                    </LinkButton>
                </div>

                {/* Navegação para Desktop */}
                <nav className="hidden md:flex">
                    <LinkButton href="/">Home</LinkButton>
                    <LinkButton href="/docs">Documentation</LinkButton>
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
                            <div className="flex h-16 items-center justify-center text-center">
                                <AppLogo />
                            </div>
                            <div className="flex flex-col">
                                <LinkButton href="/">Home</LinkButton>
                                <LinkButton href="/docs">Documentation</LinkButton>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
