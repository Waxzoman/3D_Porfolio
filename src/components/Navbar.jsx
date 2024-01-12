import { NavLink } from "react-router-dom"
import logoOmar3 from "../assets/logo/logoOmar3.svg"


const Navbar = () => {
  return (
    <header className="header">
          <NavLink
              to="/"
              className="w-32 h-20 rounder-lg bg-blue items-center justify-center flex font-bold shadow-md"
          >
              {/* <p className="blue-gradient_text">OM</p> */}
              <img src={logoOmar3} alt="logo" className="size-14" />
          </NavLink>
          <nav
              className="flex text-lg gap-7 font-medium"
          >
              <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}
              >
                  About
              </NavLink>
              <NavLink
                  to="/Projects"
                  className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}
              >
                  Projects
              </NavLink>
          </nav>
    </header>
  )
}

export default Navbar