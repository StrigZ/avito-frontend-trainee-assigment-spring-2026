import type { QueryParamsObject } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getQueryParamsString(params: QueryParamsObject) {
    return (
        '?' +
        Object.entries(params)
            .filter(([, value]) => Boolean(value))
            .map(([param, value]) => `${param}=${value}`)
            .join('&')
    );
}
