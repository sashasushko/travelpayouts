import React from "react";
import "./Layout.css";

function Container({ children }) {
  return <div className="container">{children}</div>;
}

function SideBar({ children }) {
  return <header className="sidebar">{children}</header>;
}

function TopBar({ children }) {
  return <aside className="topbar">{children}</aside>;
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Footer({ children }) {
  return <footer className="footer">{children}</footer>;
}

export { Container, TopBar, SideBar, Main, Footer };
