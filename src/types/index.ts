import type { categories, sortColumns, sortDirections } from '@/constants';

export type Item = {
    id: number;
    title: string;
    description?: string;
    price: number | null;
    createdAt: string;
    updatedAt: string;
} & (
    | {
          category: 'auto';
          params: AutoItemParams;
      }
    | {
          category: 'real_estate';
          params: RealEstateItemParams;
      }
    | {
          category: 'electronics';
          params: ElectronicsItemParams;
      }
);

type AutoItemParams = {
    brand?: string;
    model?: string;
    yearOfManufacture?: number;
    transmission?: 'automatic' | 'manual';
    mileage?: number;
    enginePower?: number;
};

type RealEstateItemParams = {
    type?: 'flat' | 'house' | 'room';
    address?: string;
    area?: number;
    floor?: number;
};

type ElectronicsItemParams = {
    type?: 'phone' | 'laptop' | 'misc';
    brand?: string;
    model?: string;
    condition?: 'new' | 'used';
    color?: string;
};

export type ItemSortColumn = Extract<keyof Item, 'title' | 'createdAt'>;

export type SortDirection = 'asc' | 'desc';

export type UpdateAdInput = {
    id: string;
    data: Item;
};

export type SortColumnQueryParam = (typeof sortColumns)[number];
export type SortDirectionQueryParam = (typeof sortDirections)[number];
export type Category = (typeof categories)[number];

export type QueryParamsObject = {
    q: string;
    limit: number;
    skip: number;
    needsRevision: boolean;
    categories: Category[];
    sortColumn: SortColumnQueryParam;
    sortDirection: SortDirectionQueryParam;
};

export type QueryParam = keyof QueryParamsObject;
