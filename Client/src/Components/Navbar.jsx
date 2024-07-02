import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user, loading, logOut, setLoading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      // <div className="flex justify-center items-center w-full h-full">
      //   <span className="loading loading-spinner loading-lg"></span>
      // </div>
    );
  }
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // setLoading(false);
      })
      .catch();
  };
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn p-0 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allSpot">All tourist spot</NavLink>
            </li>
            {!user && (
              <li>{!user && <NavLink to="/register">Register</NavLink>}</li>
            )}
            {/* {user && (
            <li>
              {user && <NavLink to="/allSpot">All tourist spot</NavLink>}
            </li>
          )} */}
            {user && (
              <li>
                {user && (
                  <NavLink to="/addTouristSpot">Add tourist spot</NavLink>
                )}
              </li>
            )}
            {user && <li>{user && <NavLink to="/mylist">My List</NavLink>}</li>}
          </ul>
        </div>
        <a className="btn btn-ghost text-base lg:text-xl">Dream Go</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!user && (
            <li>{!user && <NavLink to="/register">Register</NavLink>}</li>
          )}
          {/* {user && (
            <li>
              {user && <NavLink to="/allSpot">All tourist spot</NavLink>}
            </li>
          )} */}
          <li>
            <NavLink to="/allSpot">All tourist spot</NavLink>
          </li>
          {user && (
            <li>
              {user && <NavLink to="/addTouristSpot">Add tourist spot</NavLink>}
            </li>
          )}
          {user && <li>{user && <NavLink to="/mylist">My List</NavLink>}</li>}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar online">
              <div className="w-8 lg:w-14 rounded-full">
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`${user.displayName}`}
                  data-tooltip-place="left"
                  src={`${user.photoURL}`}
                />
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="btn text-[12px] lg:text-base btn-warning ml-2 w-[55%] lg:w-auto"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-success">log in</button>
          </Link>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
