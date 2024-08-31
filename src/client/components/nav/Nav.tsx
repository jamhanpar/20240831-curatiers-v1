import { useState, MouseEvent } from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MenuButton } from '@mui/base/MenuButton';

export default function Nav({ user }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <nav className="border border-red-400 flex min-h-14 bg-transparent text-black px-2">
      <div className="flex justify-between items-center w-full">
        {/*--- LOGO ---*/}
        <div className="flex items-center">
          <h1 className="text-xl font-bold px-4">C U R A T I E R S</h1>
        </div>

        {/*--- NAV LINKS ---*/}
        <Dropdown>
          <MenuButton
            className="px-4 py-1 bg-black bg-opacity-5 rounded-md"
            // aria-controls={open ? 'basic-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            // onClick={handleClick}
          >
            Menu
          </MenuButton>
          <Menu
            className="border border-red-400 p-10"
            // anchor={anchorEl}
            // slots={{ listbox: Listbox }}
            // onClose={handleClose}
            // MenuListProps={{
            //   'aria-labelledby': 'basic-button',
            // }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Dropdown>

        {/* <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav> */}

        {/* <ul className="flex gap-2">
          {links.map((link, index) => (
            <li key={index}>
              {link.url === '/' ? (
                <a href={link.url} className="hover:text-gray-500">
                  {link.name}
                </a>
              ) : (
                <a href={link.url} className="hover:text-gray-500">
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul> */}

        {/*--- USER ---*/}
        <div>{user.firstName}</div>
      </div>
    </nav>
  );
}
