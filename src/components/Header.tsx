const Header = () => {
    return (
        <div className="nav-wrapper">

            <div className="logo">
                <h2>AnimeBlox</h2>
            </div>
            {/* Search */}
            <div className="search-input">
                <input placeholder="Search For Your Show" />
            </div>
            <div className="space-empty"></div>
        </div>
    );
}

export default Header;