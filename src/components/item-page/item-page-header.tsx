import type { Item } from '@/types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Edit } from 'lucide-react';

import { Button } from '../ui/button';

export default function ItemPageHeader({
    title,
    price,
    createdAt,
    updatedAt,
}: Item) {
    return (
        <header className="flex flex-col gap-3">
            <h2 className="text-foreground/85 flex items-center justify-between text-3xl font-medium">
                {title} <span>{price} ₽</span>
            </h2>
            <div className="flex items-start justify-between">
                <Button className="bg-button-active flex items-center gap-2 rounded-lg px-3 py-2 text-base font-normal">
                    Редактировать <Edit />
                </Button>
                <div className="text-muted-foreground flex flex-col gap-1 text-right text-base leading-none font-normal">
                    <p>
                        Опубликовано:{' '}
                        {format(createdAt, 'd MMMM HH:mm', { locale: ru })}
                    </p>
                    {updatedAt && (
                        <p>
                            Отредактировано:{' '}
                            {format(updatedAt, 'd MMMM HH:mm', { locale: ru })}
                        </p>
                    )}
                </div>
            </div>
        </header>
    );
}
