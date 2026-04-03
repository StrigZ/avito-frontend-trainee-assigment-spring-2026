import type { Category, Item } from '@/types';
import { useState } from 'react';

import EditPageFormCategorySelect from './edit-page-form-category-select';
import EditPageFormFields from './edit-page-form-fields';

export default function EditPageForm(item: Item) {
    const [category, setCategory] = useState<Category>(item.category);

    return (
        <>
            <EditPageFormCategorySelect
                value={category}
                onChange={setCategory}
            />
            <EditPageFormFields
                key={category}
                item={item}
                category={category}
            />
        </>
    );
}
