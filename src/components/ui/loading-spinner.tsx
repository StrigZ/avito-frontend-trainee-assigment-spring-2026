import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

type Props = { className?: string };
export default function LoadingSpinner({ className }: Props) {
    return (
        <div className={cn('relative', className)}>
            <Loader
                className="absolute top-1/2 left-1/2 -translate-1/2 animate-spin"
                size={36}
            />
        </div>
    );
}
