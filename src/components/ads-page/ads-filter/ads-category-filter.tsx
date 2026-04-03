import { Checkbox } from '@/components/ui/checkbox';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { categories } from '@/constants';
import { useAdsQueryContext } from '@/context/ads-query-provider';
import type { Category } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const categoryToDisplayTextMap: Record<Category, string> = {
    auto: 'Авто',
    electronics: 'Электроника',
    real_estate: 'Недвижимость',
};

export default function AdsCategoryFilter() {
    const [isOpen, setIsOpen] = useState(false);
    const { queryParams, updateQueryParam } = useAdsQueryContext();

    const handleFilterChange = (category: Category, checked: boolean) => {
        updateQueryParam({
            skip: 0,
            categories: checked
                ? [...queryParams.categories, category]
                : queryParams.categories.filter((c) => c !== category),
        });
    };

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between">
                Категория {isOpen ? <ChevronUp /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-2 py-2">
                {categories.map((category) => (
                    <label className="flex items-center gap-2" key={category}>
                        <Checkbox
                            className="border-input h-4 w-4 rounded-xs"
                            checked={queryParams.categories.includes(category)}
                            onCheckedChange={(checked) =>
                                handleFilterChange(category, !!checked)
                            }
                        />
                        <p>{categoryToDisplayTextMap[category]}</p>
                    </label>
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
}
