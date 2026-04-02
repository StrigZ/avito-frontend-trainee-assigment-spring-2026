import { useAds } from '@/hooks/useAds';
import type { Item, QueryParam, QueryParamsObject } from '@/types';
import {
    type ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

const defaultQueryParams: QueryParamsObject = {
    q: '',
    categories: [],
    limit: 10,
    needsRevision: false,
    skip: 0,
    sortColumn: 'createdAt',
    sortDirection: 'desc',
};

type AdsQueryContext = {
    ads: Item[];
    queryParams: QueryParamsObject;
    isLoading: boolean;
    updateQueryParam: (params: Partial<QueryParamsObject>) => void;
};

const AdsQueryContext = createContext<AdsQueryContext>({
    ads: [],
    queryParams: defaultQueryParams,
    isLoading: false,
    updateQueryParam: () => {},
});

export const useAdsQueryContext = () => useContext(AdsQueryContext);

type Props = { children: ReactNode };
export default function AdsQueryProvider({ children }: Props) {
    const [queryParams, setQueryParams] =
        useState<AdsQueryContext['queryParams']>(defaultQueryParams);
    const { data, isLoading } = useAds({ queryParams });

    const updateQueryParam: AdsQueryContext['updateQueryParam'] = useCallback(
        (params) => {
            setQueryParams((pv) => ({ ...pv, ...params }));
        },
        [],
    );

    const value: AdsQueryContext = useMemo(
        () => ({
            ads: data?.items ?? [],
            isLoading,
            queryParams,
            updateQueryParam,
        }),
        [data?.items, isLoading, queryParams, updateQueryParam],
    );
    return (
        <AdsQueryContext.Provider value={value}>
            {children}
        </AdsQueryContext.Provider>
    );
}
