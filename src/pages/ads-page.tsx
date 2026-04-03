import AdsFilter from '@/components/ads-filter/ads-filter';
import ResetFiltersButton from '@/components/ads-filter/reset-filters-button';
import AdsGrid from '@/components/ads-grid/ads-grid';
import SearchBar from '@/components/search-bar/search-bar';
import { useAdsQueryContext } from '@/context/ads-query-provider';

export default function AdsPage() {
    const { total, isLoading } = useAdsQueryContext();

    return (
        <main className="bg-background flex min-h-screen flex-col gap-4 overflow-hidden px-8 py-3">
            <header className="sticky top-0 flex flex-col gap-4 pt-3">
                <div className="px-2">
                    <h1 className="text-2xl text-[22px] font-medium">
                        Мои объявления
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {isLoading ? '...' : total} объявления
                    </p>
                </div>
                <SearchBar />
            </header>
            <div className="grid grid-cols-1 grid-rows-[min-content_1fr] gap-6 md:grid-cols-[256px_1fr] md:grid-rows-1">
                <aside className="sticky top-0 flex w-full flex-col gap-2.5">
                    <AdsFilter />
                    <ResetFiltersButton />
                </aside>
                <AdsGrid />
            </div>
        </main>
    );
}
