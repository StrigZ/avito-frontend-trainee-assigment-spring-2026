import { Button } from '@/components/ui/button';
import { useAdsQueryContext } from '@/context/ads-query-provider';

export default function ResetFiltersButton() {
    const { updateQueryParam } = useAdsQueryContext();

    return (
        <Button
            className="bg-card text-subtle h-auto p-3 font-normal"
            onClick={() =>
                updateQueryParam({
                    categories: [],
                    needsRevision: false,
                    skip: 0,
                })
            }
        >
            Сбросить фильтры
        </Button>
    );
}
