import { useState, MouseEvent } from 'react';
import clsx from 'clsx';

//--- Components ---//
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MenuButton } from '@mui/base/MenuButton';
import { Link } from 'react-router-dom';
import { User } from '../..//types/global.ts';
import Input from '../input/Input.tsx';
import Icon from '../icon/Icon.tsx';

const STYLES = {
  buttonDefault:
    'p-2 bg-black rounded-md bg-opacity-0 transition ease-in-out duration-300 hover:bg-opacity-5',
};

interface NavProps {
  user: User;
}

export default function Nav({ user }: NavProps) {
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
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <nav className="flex w-full min-h-14 bg-transparent text-teal-300 px-2 backdrop-blur-sm">
      <div className="flex justify-between items-center w-full">
        {/*--- LOGO ---*/}
        <Link className="text-xl font-bold px-4" to="/">
          C U R A T I E R S
        </Link>

        {/*--- NAV LINKS ---*/}
        <div className="flex items-center">
          {/*--- SEARCH ---*/}
          <div className="hidden md:flex md:items-center md:gap-2">
            {/* <Input
              type="text"
              className="px-2 py-1 bg-black bg-opacity-5 rounded-md"
              placeholder="Search"
            /> */}
            <Input className="bg-black bg-opacity-5 rounded-md" />
            <button className={STYLES.buttonDefault}>
              <Icon iconKey="search" className="text-2xl" />
            </button>
          </div>

          {/*--- MOBILE ---*/}
          <Dropdown>
            <MenuButton
              className={STYLES.buttonDefault}
              // aria-controls={open ? 'basic-menu' : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? 'true' : undefined}
              // onClick={handleClick}
            >
              <Icon iconKey="menu" className="text-2xl" />
            </MenuButton>
            <Menu
              className="p-6 mt-3 bg-black bg-opacity-5 text-teal-300 rounded-md backdrop-blur-sm"
              // anchor={anchorEl}
              // slots={{ listbox: Listbox }}
              // onClose={handleClose}
              // MenuListProps={{
              //   'aria-labelledby': 'basic-button',
              // }}
            >
              {/*--- USER ---*/}
              <div className="flex flex-col gap-4 ">
                <div>Hi, {user.firstName}</div>

                {links.map((link, index) => (
                  <MenuItem key={index}>
                    <Link to={link.url} className="flex gap-2 items-center">
                      <Icon
                        iconKey={link.name.toLowerCase()}
                        className="text-lg"
                      />
                      <span>{link.name}</span>
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
