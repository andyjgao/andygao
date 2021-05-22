import Link from "next/link";
import React from "react";

export const NavBar = () => {
  type INavObject = {
    [key: string]: string;
  };
  const navigationObject: INavObject = {
    Home: "/",
    About: "/about",
    Projects: "/projects",
    Writing: "/writing",
    Links: "/links",
  };

  return (
    <div className="mb-8 mt-4">
      <ul className="flex space-x-4">
        {Object.keys(navigationObject).map((key: string) => {
          return (
            <li className="font-semibold hover:text-blue-600">
              <Link href={navigationObject[key]}>{key}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
