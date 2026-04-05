import type { Item } from '@/types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ArrowLeft, Edit } from 'lucide-react';
import { Link } from 'react-router';

import { buttonVariants } from '../ui/button';

export default function ItemPageHeader({
    title,
    price,
    createdAt,
    updatedAt,
}: Item) {
    return (
        <header className="flex flex-col gap-3">
            <Link to={'/ads'} className="flex items-center gap-1">
                <ArrowLeft /> Назад
            </Link>
            <h2 className="text-foreground flex items-center justify-between text-xl font-medium md:text-3xl">
                {title} <span>{price} ₽</span>
            </h2>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
                <Link
                    to={'edit'}
                    className={buttonVariants({
                        className:
                            'bg-button-active! flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-normal text-white! sm:w-fit',
                    })}
                >
                    Редактировать <Edit />
                </Link>
                <div className="text-muted-foreground flex flex-col gap-1 text-base leading-none font-normal sm:text-right">
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
