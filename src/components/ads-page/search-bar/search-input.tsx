import { Input } from '@/components/ui/input';
import { useAdsQueryContext } from '@/context/ads-query-provider';
import { Search } from 'lucide-react';

export default function SearchInput() {
    const { queryParams, updateQueryParam } = useAdsQueryContext();
    const handleSearchChange = (q: string) => updateQueryParam({ skip: 0, q });

    return (
        <div className="relative sm:flex-1">
            <Input
                placeholder="Найти объявление..."
                className="bg-input placeholder:text-subtle rounded-lg border-none placeholder:text-sm"
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
