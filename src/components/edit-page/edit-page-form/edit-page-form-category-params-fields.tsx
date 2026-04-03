// components/edit-page-form/category-params-fields.tsx
import {
    Field,
    FieldContent,
    FieldLabel,
    FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    categoryToParamsMap,
    paramToTextMap,
    paramValueToTextMap,
} from '@/constants';
import type { Category, ItemParam } from '@/types';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
    category: Category;
};

export default function EditPageFormCategoryParamsFields({ category }: Props) {
    const form = useFormContext();
    const categoryParams = categoryToParamsMap[category];
    return (
        <FieldSet className="md:max-w-1/2">
            <FieldLabel>Характеристики</FieldLabel>
            {categoryParams.map((param) => {
                const options = paramValueToTextMap[category][param];

                return (
                    <Field key={param}>
                        <FieldLabel>{paramToTextMap[param]}</FieldLabel>
                        <FieldContent>
                            <Controller
                                control={form.control}
                                name={param as ItemParam}
                                render={({ field: { value, onChange } }) =>
                                    options ? (
                                        <Select
                                            value={value}
                                            onValueChange={onChange}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent
                                                align="center"
                                                position="popper"
                                            >
                                                {Object.entries(options).map(
                                                    ([k, v]) => (
                                                        <SelectItem
                                                            key={k}
                                                            value={k}
                                                        >
                                                            {v}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                    ) : (
                                        <Input
                                            value={value ?? ''}
                                            onChange={onChange}
                                        />
                                    )
                                }
                            />
                        </FieldContent>
                    </Field>
                );
            })}
        </FieldSet>
    );
}
