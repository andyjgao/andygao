import { FunctionComponent } from "react";
import { NavBar } from "../NavBar";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col h-screen container mx-auto max-w-screen-md px-4">
      <NavBar />
      <div className="h-10 mb-auto">{children}</div>
      {/* <footer className="h-10">Twitter</footer> */}
    </div>
  );
};
