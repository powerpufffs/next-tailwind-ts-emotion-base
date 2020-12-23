import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import LogoMain from "../public/images/arrivedLogo.png";
import Spacer from "./spacer";

interface LayoutProps {}

const NavLink = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <a className="font-semibold">{children}</a>
  </Link>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-between px-12 pt-8">
        <Link href="/" scroll={false}>
          <img src={LogoMain} alt="Arrived Logo" className="cursor-pointer" />
        </Link>
        <div>
          <NavLink href="/home">About us</NavLink>
          <Spacer width={4} />
          <NavLink href="/home">Contact</NavLink>
          <Spacer width={4} />
          <NavLink href="/home">Investors</NavLink>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
