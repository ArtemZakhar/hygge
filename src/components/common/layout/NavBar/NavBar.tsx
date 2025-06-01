import { NavLink } from 'react-router-dom';

import { navList } from './navList';

const navLinkClass = (isActive: boolean) => {
  return `py-2 px-4 rounded-xl relative block overflow-hidden transition-colors duration-300 
  ${isActive ? 'font-[700] text-grey-200 bg-grey-400' : 'text-text-primary font-[400] bg-transparent '}
  hover:bg-grey-300 hover:text-text-primary
  focus:outline-none focus:ring-0 focus:bg-grey-300 focus:text-text-primary`;
};

const NavBar = () => {
  return (
    <nav className="bg-white min-h-16 px-8 py-2 flex justify-center items-center">
      <ul className="flex flex-row gap-6">
        {navList.map(({ label, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              className={({ isActive }) => navLinkClass(isActive)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
