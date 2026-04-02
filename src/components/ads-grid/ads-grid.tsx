import { useAds } from '@/hooks/useAds';
import { Loader } from 'lucide-react';

import AdsGridItem from './ads-grid-item';

type Props = {};
export default function AdsGrid({}: Props) {
    const { data, isLoading } = useAds();
    console.log(data);

    if (isLoading || !data) {
        return (
            <div className="relative block h-full flex-1">
                <Loader
                    className="absolute top-1/2 left-1/2 -translate-1/2 animate-spin"
                    size={36}
                />
            </div>
        );
    }

    return (
        <ul className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-[13.75px] gap-y-3">
            {data.items.map((item) => (
                <AdsGridItem key={item.id} {...item} />
            ))}
        </ul>
    );
}
