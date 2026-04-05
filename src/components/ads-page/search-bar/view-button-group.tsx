import { Button } from '@/components/ui/button';
import { useAdsLayoutContext } from '@/context/ads-layout-provider';
import { cn } from '@/lib/utils';
import { LayoutGrid, List } from 'lucide-react';

export default function ViewButtonGroup() {
    const { layout, updateLayout } = useAdsLayoutContext();

    return (
        <div className="bg-input relative flex items-center rounded-lg">
            <Button
                className={cn({ 'text-button-active': layout === 'grid' })}
                variant={'link'}
                size={'icon'}
                onClick={() => updateLayout('grid')}
            >
                <LayoutGrid />
            </Button>

            <div className="absolute top-1/2 left-1/2 h-[calc(100%-4px)] w-0.5 -translate-x-1/2 -translate-y-1/2 bg-white" />

            <Button
                className={cn({ 'text-button-active': layout === 'list' })}
                variant={'link'}
                size={'icon'}
                onClick={() => updateLayout('list')}
            >
                <List />
            </Button>
        </div>
    );
}
