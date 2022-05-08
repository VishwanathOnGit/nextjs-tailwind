import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-around bg-gray-300 py-5">
        <li className="px-4 py-2 font-bold rounded-full text-white bg-blue-500 hover:bg-blue-700">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="px-4 py-2 font-bold rounded-full text-white bg-blue-500 hover:bg-blue-700">
          <Link href="/add-blog">
            <a>Add Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
