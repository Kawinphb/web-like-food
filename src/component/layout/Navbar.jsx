import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 pt-8 px-36 ">
      <div className="flex justify-between p-5">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-1 rtl:space-x-reverse text-orange-500"
        >
          <RestaurantIcon />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-orange-500 ">
            LIKEFOOD
          </span>
        </Link>
        <div className="flex justify-end ">
          <div className="content-center">
            {/* Content center */}
            <div
              className="items-center  w-[300px] "
              id="navbar-search"
            >
              <ul className="flex justify-between">
                <li>
                  <Link
                    to="/"
                    className="px-2 text-gray-700hover:bg-gray-100 max-lg:invisible"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  >
                    About
                  </a>
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
      </div>
    </nav>
  );
}

export default Navbar;
