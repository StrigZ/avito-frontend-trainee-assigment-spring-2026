import SearchInput from './search-input';
import SortDropdown from './sort-dropdown';
import ViewButtonGroup from './view-button-group';

export default function SearchBar() {
    return (
        <div className="bg-card flex items-center gap-6 rounded-lg p-3">
            <SearchInput />
            <ViewButtonGroup layout="grid" />
            <SortDropdown />
        </div>
    );
}
