import * as React from 'react';
import Link from 'next/link'
import { sidebarLinks } from '../../utils/nav-menu';

const TopBar = () => {
  return (
    <div> 
      <ul id="tabs" className="w-full my-3 px-1 py-3 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar">
        {sidebarLinks.map(link =>  (
          <li className="py-2 pr-4 dark:text-white text-opacity-10 rounded-t inline-block">
            <Link href={link.path}>
              <a className="text-base font-light inline-block hover:text-green-brand-01">{link.name}</a>
            </Link>
          </li> 
        ))} 
      </ul>

    </div>
  )
}
  

export default TopBar;
