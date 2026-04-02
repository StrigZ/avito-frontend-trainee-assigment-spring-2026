import { useAdsQueryContext } from '@/context/ads-query-provider';

import LoadingSpinner from '../ui/loading-spinner';
import AdsGridItem from './ads-grid-item';

type Props = {};
export default function AdsGrid({}: Props) {
    const { ads, isLoading } = useAdsQueryContext();

    if (isLoading || !ads) {
        return <LoadingSpinner classNames="h-full flex-1" />;
    }

    return (
        <ul className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-[13.75px] gap-y-3">
            {ads.map((item) => (
                <AdsGridItem key={item.id} {...item} />
            ))}
        </ul>
    );
}
