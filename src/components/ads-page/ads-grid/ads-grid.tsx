import LoadingSpinner from '@/components/ui/loading-spinner';
import { useAdsQueryContext } from '@/context/ads-query-provider';

import AdsGridItem from './ads-grid-item';
import Pagination from './pagination';

export default function AdsGrid() {
    const { ads, isLoading } = useAdsQueryContext();

    if (isLoading || !ads) {
        return <LoadingSpinner className="" />;
    }

    return ads.length > 0 ? (
        <div className="flex flex-col gap-2.5 overflow-y-auto">
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-[13.75px] gap-y-3">
                {ads.map((item) => (
                    <AdsGridItem key={item.id} {...item} />
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
