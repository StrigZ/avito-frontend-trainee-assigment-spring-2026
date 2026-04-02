import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

type Props = { classNames?: string };
export default function LoadingSpinner({ classNames }: Props) {
    return (
        <div className={cn('relative', classNames)}>
            <Loader
                className="absolute top-1/2 left-1/2 -translate-1/2 animate-spin"
                size={36}
            />
        </div>
    );
}
