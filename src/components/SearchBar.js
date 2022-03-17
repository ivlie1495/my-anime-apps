const SearchBar = ({ searchTerm, handleSearchBarChange }) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-2 py-2 px-4 md:px-10">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-800 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
          type="text"
          placeholder="Search for Animes"
          className="px-3 py-3 placeholder-gray-800 text-gray-800 relative bg-gray-100 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          aria-label="Search for Animes"
          value={searchTerm ?? ''}
          onChange={({ target: { value }}) => handleSearchBarChange(value)}
        />
    </div>
  );
}

export default SearchBar;