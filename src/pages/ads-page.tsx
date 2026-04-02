import AdsFilter from '@/components/ads-filter/ads-filter';
import ResetFiltersButton from '@/components/ads-filter/reset-filters-button';
import AdsGrid from '@/components/ads-grid/ads-grid';
import SearchBar from '@/components/search-bar/search-bar';
import { useAdsQueryContext } from '@/context/ads-query-provider';

export default function AdsPage() {
    const { total, isLoading } = useAdsQueryContext();

    return (
        <div className="flex h-full w-full flex-col gap-4 overflow-hidden">
            <header className="flex flex-col gap-4">
                <div>
                    <h1 className="text-2xl text-[22px] font-medium">
                        Мои объявления
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {isLoading ? '...' : total} объявления
                    </p>
                </div>
                <SearchBar />
            </header>
            <div className="flex h-full w-full flex-col items-start gap-6 overflow-y-auto md:flex-row">
                <aside className="sticky top-0 flex w-full flex-col gap-2.5 md:w-[256px]">
                    <AdsFilter />
                    <ResetFiltersButton />
                </aside>
                <AdsGrid />
            </div>
        </div>
    );
}
