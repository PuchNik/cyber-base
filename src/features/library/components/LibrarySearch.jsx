function LibrarySearch({ value, onChange, placeholder }) {
    return (
        <div className="library-search">
            <input
                className="library-search__input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default LibrarySearch;
