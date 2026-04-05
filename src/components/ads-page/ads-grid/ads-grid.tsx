import LoadingSpinner from '@/components/ui/loading-spinner';
import { useAdsLayoutContext } from '@/context/ads-layout-provider';
import { useAdsQueryContext } from '@/context/ads-query-provider';
import { cn } from '@/lib/utils';

import AdsGridItem from './ads-grid-item';
import Pagination from './pagination';

export default function AdsGrid() {
    const { ads, isLoading } = useAdsQueryContext();
    const { layout } = useAdsLayoutContext();
    if (isLoading || !ads) {
        return <LoadingSpinner className="" />;
    }

    return ads.length > 0 ? (
        <div className="flex flex-col gap-2.5 overflow-y-auto">
            <ul
                className={cn('grid gap-x-[13.75px] gap-y-3', {
                    'grid-cols-[repeat(auto-fill,minmax(200px,1fr))]':
                        layout === 'grid',
                    'grid-rows-[repeat(auto-fill,minmax(132px,1fr))]':
                        layout === 'list',
                })}
            >
                {ads.map((item) => (
                    <AdsGridItem key={item.id} item={item} layout={layout} />
                ))}
            </ul>
            <Pagination />
        </div>
    ) : (
        <div className="flex h-full w-full items-center justify-center text-center">
            По вашему запросу ничего не найдено.
        </div>
    );
}
