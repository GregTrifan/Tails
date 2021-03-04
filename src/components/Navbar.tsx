import { h } from "preact";
import { Link } from "preact-router/match";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-9 w-9"
                  src={logo}
                  alt="Lion"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="hover:bg-gray-700 text-gray-50 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/todos"
                    className="hover:bg-gray-700 text-gray-50 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Todos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
