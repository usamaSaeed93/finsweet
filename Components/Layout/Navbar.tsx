"use client";
import React from "react";
import Image from "next/image";
import Logo from '../../public/Images/png/Logo.svg'
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import Drawer from "./Drawer";

export default function Navbar() {
  return (
 
      <div className="flex flex-row py-6  items-center justify-between max-w-[1200px] m-auto">
        <Image src={Logo} alt="logo"  />

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
        <div className="flex flex-row">
          <button className="w-28 h-12 rounded-md bg-[#1D2130] font-normal text-white text-lg">
           Free Trial
          </button>
          <div className="lg:hidden flex">
            <Drawer />
            <div></div>
          </div>
        </div>
        </div>
      </div>
    
  );
}