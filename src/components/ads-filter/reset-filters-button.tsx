import { Button } from '@/components/ui/button';
import { useAdsQueryContext } from '@/context/ads-query-provider';

export default function ResetFiltersButton() {
    const { updateQueryParam } = useAdsQueryContext();

    return (
        <Button
            className="bg-card text-muted-foreground h-auto p-3 font-normal"
            onClick={() =>
                updateQueryParam({ categories: [], needsRevision: false })
            }
        >
            Сбросить фильтры
        </Button>
    );
}
