import clsx from 'clsx';
import {
  BiHomeAlt2,
  BiUserCircle,
  BiMessageSquareDetail,
  BiSearch,
  BiMenu,
} from 'react-icons/bi';

const ICONS: {
  [key: string]: JSX.Element;
} = {
  home: <BiHomeAlt2 />,
  message: <BiMessageSquareDetail />,
  menu: <BiMenu />,
  search: <BiSearch />,
  user: <BiUserCircle />,
};

type IconProps = {
  iconKey: string;
  className?: string;
};

export default function Icon({ iconKey, className }: IconProps) {
  return <div className={className}>{ICONS[iconKey]}</div>;
}
