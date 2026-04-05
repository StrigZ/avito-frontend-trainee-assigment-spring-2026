import SearchInput from './search-input';
import SortDropdown from './sort-dropdown';
import ViewButtonGroup from './view-button-group';

export default function SearchBar() {
    return (
        <div className="bg-card flex flex-col gap-6 rounded-lg p-3 sm:flex-row sm:items-center">
            <SearchInput />
            <div className="flex justify-end gap-3 sm:gap-6">
                <ViewButtonGroup />
                <SortDropdown />
            </div>
        </div>
    );
}
