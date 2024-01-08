import { NavLink } from 'react-router-dom'
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2'

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-[0.8rem]">
        <li>
          <NavLink
            className="flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem] text-base text-gray-600 transition-all delay-300 active:rounded-sm active:bg-gray-50 active:text-gray-800 hover:active:text-indigo-600 dark:text-gray-300 dark:active:bg-gray-900 dark:active:text-gray-100"
            to="/dashboard"
          >
            <span className="h-[2.4rem] w-[2.4rem] text-gray-400 transition-all delay-300 dark:text-gray-500">
              <HiOutlineHome />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className="flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem] text-base text-gray-600 transition-all delay-300 active:rounded-sm active:bg-gray-50 active:text-gray-800 hover:active:text-indigo-600 dark:text-gray-300 dark:active:bg-gray-900 dark:active:text-gray-100"
          >
            <span className="h-[2.4rem] w-[2.4rem] text-gray-400 transition-all delay-300 dark:text-gray-500">
              <HiOutlineCalendarDays />
            </span>
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className="flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem] text-base text-gray-600 transition-all delay-300 active:rounded-sm active:bg-gray-50 active:text-gray-800 hover:active:text-indigo-600 dark:text-gray-300 dark:active:bg-gray-900 dark:active:text-gray-100"
          >
            <span className="h-[2.4rem] w-[2.4rem] text-gray-400 transition-all delay-300 dark:text-gray-500">
              <HiOutlineHomeModern />
            </span>
            Cabins
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem] text-base text-gray-600 transition-all delay-300 active:rounded-sm active:bg-gray-50 active:text-gray-800 hover:active:text-indigo-600 dark:text-gray-300 dark:active:bg-gray-900 dark:active:text-gray-100"
          >
            <span className="h-[2.4rem] w-[2.4rem] text-gray-400 transition-all delay-300 dark:text-gray-500">
              <HiOutlineUsers />
            </span>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-[1.2rem] px-[2.4rem] py-[1.2rem] text-base text-gray-600 transition-all delay-300 active:rounded-sm active:bg-gray-50 active:text-gray-800 hover:active:text-indigo-600 dark:text-gray-300 dark:active:bg-gray-900 dark:active:text-gray-100"
          >
            <span className="h-[2.4rem] w-[2.4rem] text-gray-400 transition-all delay-300 dark:text-gray-500">
              <HiOutlineCog6Tooth />
            </span>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
