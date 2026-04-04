import { paramToTextMap, paramValueToTextMap } from '@/constants';
import type { Category, ItemParam } from '@/types';

type Props = {
    assignedParams: [ItemParam, string | number][];
    category: Category;
};
export default function ItemPageBodyCharacteristics({
    assignedParams,
    category,
}: Props) {
    return (
        <div className="space-y-4">
            <p className="text-foreground text-[22px] font-medium">
                Характеристики
            </p>
            <ul>
                {assignedParams.map(([param, value]) => (
                    <li className="grid grid-cols-2" key={param}>
                        <p className="text-subtle font-semibold">
                            {paramToTextMap[param]}
                        </p>
                        <p className="font-normal">
                            {paramValueToTextMap[category][param]?.[value] ??
                                value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
