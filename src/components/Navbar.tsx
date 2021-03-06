import { h } from "preact";
import { Link } from "preact-router/match";
import { useState } from "preact/hooks";
import logo from "../img/logo.png";
import {BiMoon,BiSun} from "react-icons/bi";
import { selectTheme,toggle } from "../storage/themeSlice";
import {useSelector,useDispatch} from "react-redux";

const Navbar = () => {
  const dark = useSelector(selectTheme);
  const dispatch=useDispatch();
  const [menu, toggleMenu] = useState(false);

  const Routes = [
    {
      link: "",
      title: "Home",
    },
    {
      link: "todos",
      title: "Todos",
    },
  ];

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-9 w-9" src={logo} alt="Lion" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {Routes.map((page) => {
                    return (
                      <Link
                        href={`/${page.link}`}
                        className="hover:bg-gray-700 text-gray-50 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {page.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <span
                    className="hover:bg-gray-700 text-gray-50 px-3 py-2 rounded-md text-sm font-medium"
                    onClick={()=>dispatch(toggle())}
                    >
                      {dark?<BiSun className="h-6 w-5"/>:<BiMoon className="h-6 w-5"/>} 
            </span>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                onClick={() => toggleMenu(!menu)}
                type="button"
                class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  className={`${menu ? "hidden" : ""} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${menu ? "" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden bg-gray-900 ${menu ? "" : "hidden"}`}
          id="mobile-menu"
        >
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Routes.map((page) => (
              <Link
                href={`/${page.link}`}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
