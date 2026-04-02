import { useAdsQueryContext } from '@/context/ads-query-provider';

import LoadingSpinner from '../ui/loading-spinner';
import AdsGridItem from './ads-grid-item';

export default function AdsGrid() {
    const { ads, isLoading } = useAdsQueryContext();

    if (isLoading || !ads) {
        return <LoadingSpinner classNames="h-full flex-1" />;
    }

    return ads.length > 0 ? (
        <ul className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-[13.75px] gap-y-3">
            {ads.map((item) => (
                <AdsGridItem key={item.id} {...item} />
            ))}
        </ul>
    ) : (
        <div className="flex h-full w-full items-center justify-center text-center">
            По вашему запросу ничего не найдено.
        </div>
    );
}
