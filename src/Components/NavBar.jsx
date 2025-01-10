import { useContext, useState } from "react";
import logo from "../assets/Logo.png";
import { AuthContext } from "../AuthProvider/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle theme toggling
  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    const root = document.documentElement;
    if (!isDarkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-gray-400 shadow-sm container px-10 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-14" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`flex-none hidden text-white sm:flex`}>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allVolunteer">All volunteer</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/addVolunteer" className="justify-between">
                  Add Volunteer need Post
                </Link>
              </li>
              <li>
                <Link to="/my-posted-volunteer">Manage My Posts</Link>
              </li>

              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Theme Toggle */}
        <label className="flex items-center gap-2 cursor-pointer ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="dark"
            checked={isDarkTheme}
            onChange={handleThemeChange}
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <ul className="menu menu-vertical bg-gray-100 shadow-lg rounded-box px-4 py-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allVolunteer">All volunteer</Link>
            </li>
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user && (
              <>
                <li>
                  <Link to="/addVolunteer">Add Volunteer need Post</Link>
                </li>
                <li>
                  <Link to="/my-posted-volunteer">Manage My Posts</Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="block w-full text-left py-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
            <li className="flex items-center gap-2 mt-2">
              <span>Theme</span>
              <input
                type="checkbox"
                value="dark"
                checked={isDarkTheme}
                onChange={handleThemeChange}
                className="toggle theme-controller"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
