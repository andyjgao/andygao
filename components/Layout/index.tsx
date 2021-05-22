import { FunctionComponent } from "react";
import { NavBar } from "../NavBar";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-md px-4">
      <NavBar />
      {children}
    </div>
  );
};
