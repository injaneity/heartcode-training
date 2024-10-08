// components/ui/list-item.tsx

import React from "react";
import Link from "next/link";

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, title, children }) => {
  return (
    <li className="flex flex-col">
      <Link href={href} passHref legacyBehavior>
        <a className="text-base font-medium text-blue-600 hover:underline">
          {title}
        </a>
      </Link>
      <p className="text-sm text-gray-500">{children}</p>
    </li>
  );
};

export default ListItem;
