import { useAdsQueryContext } from '@/context/ads-query-provider';
import { Search } from 'lucide-react';

import { Input } from '../ui/input';

export default function SearchInput() {
    const { queryParams, updateQueryParam } = useAdsQueryContext();
    const handleSearchChange = (q: string) => updateQueryParam({ q });

    return (
        <div className="relative flex-1">
            <Input
                placeholder="Найти объявление..."
                className="bg-input rounded-lg border-none placeholder:text-sm"
                value={queryParams.q}
                onChange={(e) => handleSearchChange(e.target.value)}
            />
            <Search
                className="absolute top-1/2 right-3 -translate-y-1/2"
                size={12}
            />
        </div>
    );
}
