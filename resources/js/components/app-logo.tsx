import { useAppearance } from '@/hooks/use-appearance';
import { Img } from 'react-image';

export default function AppLogo(width: any) {
    const { appearance } = useAppearance();
    let svgPath = '';
    switch (appearance) {
        case 'dark':
            svgPath = '/images/logoR2D2dark.svg';
            break;
        case 'light':
            svgPath = '/images/logoR2D2light.svg';
            break;
        default:
            svgPath = '/images/logoR2D2light.svg';
            break;
    }
    return <Img src={svgPath} alt="Logo" width={width ?? 96} className="h-full w-full" />;
}
