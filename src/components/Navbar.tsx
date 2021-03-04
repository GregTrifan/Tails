import { h } from "preact";
import { Link } from "preact-router/match";
import { useState } from "preact/hooks";
import logo from "../img/logo.png";
const Navbar = () => {
  const [menu,toggleMenu] = useState();
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-9 w-9" src={logo} alt="Lion" />
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
            <div class="-mr-2 flex md:hidden">
            <button
            onClick={()=>toggleMenu(!menu)} 
            type="button" 
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
            
          </div>
        </div>
        <div className={`md:hidden bg-gray-900 ${menu?"":"hidden"}`} id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
  
          <Link href="/todos" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Todos</Link>
        </div>
      </div>
      </nav>
    </div>
  );
};
export default Navbar;
