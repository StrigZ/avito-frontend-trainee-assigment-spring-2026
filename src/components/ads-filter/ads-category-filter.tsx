import { Checkbox } from '@/components/ui/checkbox';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const categories = ['Авто', 'Электроника', 'Недвижимость'];
type Props = {};
export default function AdsCategoryFilter({}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between">
                Категория {isOpen ? <ChevronUp /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-2 py-2">
                {categories.map((category) => (
                    <label className="flex items-center gap-2" key={'category'}>
                        <Checkbox className="border-input h-4 w-4 rounded-xs" />{' '}
                        <p>{category}</p>
                    </label>
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
}
