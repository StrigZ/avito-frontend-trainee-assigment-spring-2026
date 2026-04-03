import type {
    AutoItemParam,
    Category,
    ElectronicsItemParam,
    Item,
    RealEstateItemParam,
} from '@/types';
import { Image } from 'lucide-react';

type ItemParam = AutoItemParam | RealEstateItemParam | ElectronicsItemParam;

const paramToTextMap: Record<ItemParam, string> = {
    address: 'Адрес',
    area: 'Зона',
    brand: 'Бренд',
    color: 'Цвет',
    condition: 'Состояние',
    enginePower: 'Мощность',
    floor: 'Этаж',
    mileage: 'Пробег',
    model: 'Модель',
    transmission: 'Трансмиссия',
    type: 'Тип',
    yearOfManufacture: 'Год производства',
};

type ParamValueToTextMap = {
    [C in Category]: {
        [P in ItemParam]?: Record<string, string>;
    };
};

const paramValueToTextMap: ParamValueToTextMap = {
    auto: {
        transmission: {
            automatic: 'Автоматика',
            manual: 'Ручное',
        },
    },
    real_estate: {
        type: {
            flat: 'Квартира',
            house: 'Дом',
            room: 'Комната',
        },
    },
    electronics: {
        type: {
            phone: 'Телефон',
            laptop: 'Ноутбук',
            misc: 'Другое',
        },
        condition: {
            new: 'Новое',
            used: 'Б\\У',
        },
    },
};

export default function ItemPageBody({ description, params, category }: Item) {
    return (
        <div>
            <div className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="bg-muted relative flex aspect-4/3 items-center justify-center md:max-w-120">
                        <Image size={144} />
                    </div>
                    <div>
                        <div className="space-y-4">
                            <p className="text-foreground/85 text-[22px] font-medium">
                                Характеристики
                            </p>
                            <ul>
                                {Object.entries(params).map(
                                    ([param, value]) => (
                                        <li className="grid grid-cols-2">
                                            <p className="text-foreground/45 font-semibold">
                                                {
                                                    paramToTextMap[
                                                        param as ItemParam
                                                    ]
                                                }
                                            </p>
                                            <p className="font-normal">
                                                {paramValueToTextMap[category][
                                                    param as ItemParam
                                                ]?.[value] ?? value}
                                            </p>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-foreground/85 text-[22px] font-medium">
                        Описание
                    </p>
                    <p>{description ?? 'Описание отсутствует.'}</p>
                </div>
            </div>
        </div>
    );
}
