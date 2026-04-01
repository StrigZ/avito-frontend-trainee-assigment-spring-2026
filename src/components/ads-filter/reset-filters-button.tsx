import { Button } from '@/components/ui/button';

export default function ResetFiltersButton({}: Props) {
    return (
        <Button className="bg-card text-muted-foreground h-auto p-3 font-normal">
            Сбросить фильтры
        </Button>
    );
}
