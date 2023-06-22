import React, { useState, useEffect } from "react";

import SearchResult from "./SearchResult";
const Header = (props) => {
  const [isSearchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const searchCity = async () => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${api_key}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log("entire data", data);

      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery !== "") {
      searchCity();
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [searchQuery]);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <img
            src="/images/weather_icons/logo.png"
            width="364"
            height="58"
            alt="Logo"
          />
        </a>

        <div className={`search-view ${isSearchActive ? "active" : ""}`}>
          <div className="search-wrapper">
            {/* searchField */}
            <input
              type="search"
              name="search"
              className={`search-field  ${!searchQuery ? "" : "searching"}`}
              placeholder="Search city..."
              autoComplete="off"
              value={searchQuery}
              onChange={handleSearchChange}
              data-search-field
            />
            <span className="m-icon leading-icon">search</span>
            <button
              className="icon-btn leading-icon has-state"
              aria-label="close search"
              onClick={toggleSearch}
            >
              <span className="m-icon">arrow_back</span>
            </button>
          </div>
          {/* SearchResult */}
          <div
            className={`search-result ${searchQuery ? "active" : ""}`}
            data-search-result
          >
            {/* <ul className="view-list" data-search-list>
              {searchResults.map((result) => (
                <li className="view-item" key={result.id}>
                  <span className="m-icon">location_on</span>
                  <div>
                    <p className="item-title">{result.name}</p>
                    <p className="label-2 item-subtitle">{result.location}</p>
                  </div>
                  <a
                    href="/"
                    className="item-link has-state"
                    onClick={toggleSearch}
                  ></a>
                </li>
              ))}
            </ul> */}
            {/* <SearchResult toggleSearch={toggleSearch} /> */}
            {showComponent && (
              <SearchResult
                toggleSearch={toggleSearch}
                searchResults={searchResults}
              />
            )}
          </div>
        </div>

        <div className="header-actions">
          <button
            className="icon-btn has-state"
            aria-label="open search"
            onClick={toggleSearch}
          >
            <span className="m-icon">search</span>
          </button>
          {/* curren location */}
          {/* curren location btn */}
          <a
            href="#/current-location"
            className="btn-primary has-state"
            data-current-location-btn
          >
            <span className="m-icon">my_location</span>
            <span className="span">Current Location</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";

// const Header = () => {
//   const addEventOnElements = function (elements, eventType, callback) {
//     for (const element of elements) {
//       element.addEventListener(eventType, callback);
//     }
//   };

//   const searchView = document.querySelector("[data-search-view]");
//   const searchTogglers = document.querySelectorAll("[data-search-toggler]");

//   const toggleSearch = () => searchView.classList.toggle("active");
//   addEventOnElements(searchTogglers, "click", toggleSearch);
//   return (
//     <>
//       <header className="header">
//         <div className="container">
//           <a href="/" className="logo">
//             <img
//               src="/images/weather_icons/logo.png"
//               width="364"
//               height="58"
//               alt="Logo"
//             />
//           </a>

//           <div className="search-view" data-search-view>
//             <div className="search-wrapper">
//               <input
//                 type="search"
//                 name="search"
//                 className="search-field "
//                 placeholder="Search city..."
//                 autoComplete="off"
//                 data-search-field
//               />
//               <span className="m-icon leading-icon">search</span>
//               <button
//                 className="icon-btn leading-icon has-state"
//                 aria-label="close search"
//                 data-search-toggler
//               >
//                 <span className="m-icon">arrow_back</span>
//               </button>
//             </div>

//             <div className="search-result" data-search-result>
//               <ul className="view-list" data-search-list>
//                 <li className="view-item">
//                   <span className="m-icon">location_on</span>
//                   <div>
//                     <p className="item-title">London</p>
//                     <p className="label-2 item-subtitle">State of London, GB</p>
//                   </div>
//                   <a
//                     href="/"
//                     className="item-link has-state"
//                     data-search-toggler
//                   ></a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="header-actions">
//             <button
//               className="icon-btn has-state"
//               aria-label="open search"
//               data-search-toggler
//             >
//               <span className="m-icon">search</span>
//             </button>
//             <a
//               href="#/current-location"
//               className="btn-primary has-state"
//               data-current-location-btn
//             >
//               <span className="m-icon">my_location</span>
//               <span className="span">Current Loaction</span>
//             </a>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
