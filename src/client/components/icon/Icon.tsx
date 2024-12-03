import clsx from 'clsx';
import {
  BiHomeAlt2,
  BiUserCircle,
  BiMessageSquareDetail,
  BiSearch,
  BiMenu,
  BiHeart,
  BiSolidHeart,
  BiShareAlt,
  BiBookmark,
} from 'react-icons/bi';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';

export const ICONTYPE = {
  BOOKMARK: 'bookmark',
  COLLAPSE: 'collapse',
  CONTACT: 'contact',
  EXPAND: 'expand',
  HOME: 'home',
  LIKE: 'like',
  MENU: 'menu',
  SEARCH: 'search',
  SHARE: 'share',
  UNLIKE: 'unlike',
  USER: 'user',
  VERTICAL_MORE: 'vertical-more',
};

const ICONS: {
  [key: string]: JSX.Element;
} = {
  bookmark: <BiBookmark />,
  collapse: <MdExpandLess />,
  contact: <BiMessageSquareDetail />,
  expand: <MdExpandMore />,
  home: <BiHomeAlt2 />,
  like: <BiSolidHeart />,
  menu: <BiMenu />,
  search: <BiSearch />,
  share: <BiShareAlt />,
  unlike: <BiHeart />,
  user: <BiUserCircle />,
  'vertical-more': <FiMoreVertical />,
};

type IconProps = {
  iconKey: string;
  className?: string;
};

export default function Icon({ iconKey, className }: IconProps) {
  return <div className={className}>{ICONS[iconKey]}</div>;
}
