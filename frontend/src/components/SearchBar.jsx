import React, { useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, ShowSearch, setShowSearch } = React.useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // ✅ If we are on /collection page → always show search bar
    if (location.pathname.includes('/collection')) {
      setVisible(true);
      setShowSearch(true); // force show on collection
    } else {
      // ✅ On other pages → hide automatically
      setVisible(false);
      setShowSearch(false); // hidden until manually opened
    }
  }, [location, setShowSearch]);

  // ✅ Render the search bar if:
  // - On collection page (visible automatically)
  // - OR manually opened on other pages (ShowSearch = true)
  const shouldShow = location.pathname.includes('/collection') || ShowSearch;

  return shouldShow ? (
    <div className="border-t border-b bg-gray-50 text-center transition-all duration-300">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="Search" />
      </div>

      {/* Show close button only on other pages */}
      {!location.pathname.includes('/collection') && (
        <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt="Close"
        />
      )}
    </div>
  ) : null;
};

export default SearchBar;
