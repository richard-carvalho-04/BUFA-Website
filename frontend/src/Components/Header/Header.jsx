import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 backdrop-blur-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            {/*  Logo */}
            <img
              src="/images/logo.png" 
              className="mr-3 h-20"
              alt="Belgaum United Football Academy Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">

            <Link
              to="/enroll"
              style={{
                backgroundColor: "#383085", 
                color: "white", 
              }}
              className="hover:opacity-90 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get Enrolled
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-yellow-500" : "text-purple-950"
                    } lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-yellow-500" : "text-purple-950"
                    } lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enroll"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-yellow-500" : "text-purple-950"
                    } lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  Enroll
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-yellow-500" : "text-purple-950"
                    } lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                {/* <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-yellow-500" : "text-purple-950"
                    } lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  User
                </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
