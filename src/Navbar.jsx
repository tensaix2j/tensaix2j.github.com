import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  const tabRefs = useRef([]);
  const [pillStyle, setPillStyle] = useState({});

  // 🔥 Scroll hide logic (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2;
      setHidden(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Move pill based on active route
  useEffect(() => {
    const activeIndex = tabs.findIndex(
      (tab) => tab.path === location.pathname
    );

    const currentTab = tabRefs.current[activeIndex];

    if (currentTab) {
      setPillStyle({
        transform: `translateX(${currentTab.offsetLeft}px)`,
        width: `${currentTab.offsetWidth}px`,
      });
    }
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[90%] max-w-2xl bg-[#f5f1ed]/10 backdrop-blur-md rounded-[2rem] px-4 py-2.5 text-black
      transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]
      ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="flex items-center justify-between">

        {/* Logo */}
		
        <div className="flex items-center gap-2">
		<img
			src="/logo512.png"   // <-- your logo path
			alt="TensaiStudio logo"
			className="h-8 w-8 object-contain translate-x-[4px] translate-y-[-2px]"
		/>
		<span className="text-[1.1rem] font-bold">
			TensaiStudio
		</span>
		</div>

        {/* Desktop Menu */}
        <div className="relative hidden md:flex">

          {/* 🔥 Sliding pill */}
          <div
            className="absolute top-0 bottom-0 bg-orange-400/20 rounded-full transition-all duration-300 ease-out"
            style={pillStyle}
          />

          {tabs.map((tab, index) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              ref={(el) => (tabRefs.current[index] = el)}
              className={({ isActive }) =>
                `relative z-10 px-4 py-2 rounded-full transition whitespace-nowrap ${
                  isActive
                    ? "text-black"
                    : "text-[#c8713b] hover:text-black"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (unchanged) */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-2">

          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition ${
                  isActive
                    ? "bg-orange-400/20 text-black"
                    : "text-[#c8713b] hover:text-black"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
