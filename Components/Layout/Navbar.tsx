"use client";
import React from "react";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import Logo from "../../public/Images/png/Logo.svg";
import Logo2 from "../../public/Images/png/LogoWhite.svg";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import Drawer from "./Drawer";
import { useState, useEffect } from "react";

export default function Navbar() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [darkTheme, setDarkTheme] = useState<Boolean>(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && userPrefersDark)) {
      setDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleUserThemeChange = () => {
    if (darkTheme) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex flex-row py-6  items-center justify-between max-w-[1200px] m-auto ">
      <Image src={Logo} alt="logo" className="dark:hidden" />
      <Image src={Logo2} alt="logo" className="hddden dark:flex" />

      <div className="lg:flex flex-row gap-10 hidden items-center">
        <Link href="/" className="text-[#1F2B6C] font-medium font-poppins">
          Home
        </Link>
        <Link
          href="/"
          className="text-[#596B7B] active:text-[#1F2B6C] font-medium font-poppins"
        >
          Services
        </Link>
        <Link
          href="/"
          className="text-[#596B7B] active:text-[#1F2B6C] font-medium font-poppins"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-[#596B7B] active:text-[#1F2B6C] font-medium font-poppins"
        >
          Contact Us
        </Link>
        <div className="flex flex-row gap-4">
          <button className="w-28 h-12 rounded-md bg-[#1D2130] dark:bg-[#2B2E3C] font-normal text-white text-lg">
            Free Trial
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-3">
          <Switch {...label} defaultChecked onClick={handleUserThemeChange} />
          <div className="lg:hidden flex">
            <Drawer />
          </div>
      </div>
    </div>
  );
}
