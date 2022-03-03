import React from "react";
import { Nav } from "./Nav";
import { Logo } from "./Logo";
import "../styles/header.css";
export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
    </div>
  );
};
