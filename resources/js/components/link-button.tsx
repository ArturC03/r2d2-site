import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const LinkButton = ({ href, children, ...props }) => (
    <Link href={href}>
        <Button variant="link" {...props}>
            {children}
        </Button>
    </Link>
);

export default LinkButton;
