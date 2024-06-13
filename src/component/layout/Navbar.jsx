import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchBox from "../search-box/SearchBox";
import { Link } from "react-router-dom";
function Navbar({ searchItem, setDisplay, iniData }) {
  return (
    <nav className="bg-white border-gray-200 pt-8 px-36 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-16 py-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse text-orange-500"
        >
          <RestaurantIcon />

          <span className="self-center text-2xl font-bold whitespace-nowrap text-orange-500 ">
            LIKEFOOD
          </span>
        </a>
        <div className="mx-auto bg-white px-40 w-1/2">
          <div className=" pt-2 h-10 flex items-center container  ">
            {/* Content center */}
            <div
              className="items-center justify-between px-10 w-2/8 "
              id="navbar-search"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/list-favorite"
                    className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Your favorite
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Serch box */}
        <div className="flex md:order-2 ">
          <SearchBox
            searchItem={searchItem}
            setDisplay={setDisplay}
            iniData={iniData}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
