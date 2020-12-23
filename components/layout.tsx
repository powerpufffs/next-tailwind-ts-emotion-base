import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import LogoMain from "../public/images/arrivedLogo.png";
import Spacer from "./spacer";

interface LayoutProps {}

const NavLink = styled(Link)`
  font-weight: bold;
  font-size: 50px;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-between px-12 pt-8">
        <NavLink href="/">
          <img src={LogoMain} alt="Arrived Logo" className="cursor-pointer" />
        </NavLink>
        <div>
          <NavLink href="/">About Us</NavLink>
          <Spacer width={5} />
          <NavLink href="/">Contact</NavLink>
          <Spacer width={5} />
          <NavLink href="/">Investors</NavLink>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
