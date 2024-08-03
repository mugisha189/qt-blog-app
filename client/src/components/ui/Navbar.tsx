import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "../core/icons";
import { useModal } from "../../hooks/useModal";
import Button from "../core/button";
import Login from "../../pages/auth/Login";
import SignUp from "../../pages/auth/Signup";
import { useUser } from "../../hooks/useUser";
import { MdExitToApp } from "react-icons/md";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>("/");
  const [mobileNav, setMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();
  const { user, logout } = useUser();
  const routes = [
    { name: "Blogs", href: "/blogs" },
    ...(user && user.role === "Admin"
      ? [{ name: "Users", href: "/users" }]
      : []),
  ];

  useEffect(() => {
    setActiveRoute(location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const isHomePage = location.pathname === "/";

  return (
    <div className="fixed w-full z-40 text-sm">
      <div
        className={`${
          isHomePage && !isScrolled
            ? "bg-gradient-to-b from-primary to-transparent pb-6"
            : "bg-primary shadow-xl"
        } text-white flex items-center gap-2 justify-between px-6 py-3 transition-colors duration-300`}
      >
        <Link to={"/"}>
          <p className="text-white font-semibold text-3xl">QT Blog</p>
        </Link>
        <div className="hidden md:flex items-center gap-5">
          {routes.map((route, i) => (
            <Link
              key={i}
              className={`capitalize cursor-pointer ${
                activeRoute === route.href ? "font-bold" : "hover:text-myText"
              }`}
              to={route.href}
            >
              {route.name}
            </Link>
          ))}
        </div>
        {!user ? (
          <div className="flex items-center gap-2 text-base text-white font-semibold">
            <Button
              variant="primary"
              onClick={() => openModal(<Login />)}
              className="font-normal"
            >
              Log In
            </Button>
            <Button
              variant="secondary"
              onClick={() => openModal(<SignUp />)}
              className="font-normal"
            >
              Register
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-base text-white font-semibold">
            <Button variant="primary" onClick={logout}>
              <MdExitToApp />
            </Button>
          </div>
        )}
        <div className="block md:hidden" onClick={() => setMobileNav(true)}>
          <MenuIcon />
        </div>
        <div
          className={`${
            mobileNav ? "block" : "hidden"
          } absolute z-30 top-[100%] left-0 bg-black text-white w-full flex flex-col gap-2 py-2 text-center`}
          onMouseEnter={() => setMobileNav(true)}
          onMouseLeave={() => setMobileNav(false)}
          onClick={() => setMobileNav(false)}
        >
          {routes.map((route, i) => (
            <Link
              key={i}
              className={`capitalize cursor-pointer ${
                activeRoute === route.href
                  ? "text-[#3bcf93]"
                  : "hover:text-myText"
              }`}
              to={route.href}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
