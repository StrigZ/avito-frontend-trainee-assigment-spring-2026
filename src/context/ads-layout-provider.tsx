import { Layout } from 'lucide-react';
import {
    type ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

type Layout = 'grid' | 'list';

type AdsLayoutContext = {
    layout: Layout;
    updateLayout: (layout: Layout) => void;
};

const AdsLayoutContext = createContext<AdsLayoutContext>({
    layout: 'grid',
    updateLayout: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAdsLayoutContext = () => useContext(AdsLayoutContext);

type Props = { children: ReactNode };
export default function AdsLayoutProvider({ children }: Props) {
    const [layout, setLayout] = useState<AdsLayoutContext['layout']>('grid');

    const updateLayout: AdsLayoutContext['updateLayout'] = useCallback(
        (layout) => {
            setLayout(layout);
        },
        [],
    );

    const value: AdsLayoutContext = useMemo(
        () => ({
            layout,
            updateLayout,
        }),
        [layout, updateLayout],
    );
    return (
        <AdsLayoutContext.Provider value={value}>
            {children}
        </AdsLayoutContext.Provider>
    );
}
