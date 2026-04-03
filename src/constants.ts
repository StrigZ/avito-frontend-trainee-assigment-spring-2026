import type { Category, ItemParam } from './types';

export const sortColumns = ['createdAt', 'title', 'price'] as const;

export const sortDirections = ['asc', 'desc'] as const;

export const categories = ['auto', 'real_estate', 'electronics'] as const;

export const autoItemParams = [
    'brand',
    'model',
    'yearOfManufacture',
    'transmission',
    'mileage',
    'enginePower',
] as const;

export const realEstateParams = ['type', 'address', 'area', 'floor'] as const;

export const electronicsParams = [
    'type',
    'brand',
    'model',
    'condition',
    'color',
] as const;

export const paramToTextMap: Record<ItemParam, string> = {
    address: 'Адрес',
    area: 'Площадь',
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

export const categoryToParamsMap = {
    auto: autoItemParams,
    real_estate: realEstateParams,
    electronics: electronicsParams,
};

export const categoryToDisplayTextMap: Record<string, string> = {
    auto: 'Авто',
    real_estate: 'Недвижимость',
    electronics: 'Электроника',
};

type ParamValueToTextMap = {
    [C in Category]: {
        [P in ItemParam]?: Record<string, string>;
    };
};
export const paramValueToTextMap: ParamValueToTextMap = {
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
