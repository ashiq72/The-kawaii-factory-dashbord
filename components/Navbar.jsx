"use client";
import React from "react";
import Link from "next/link";
import { SignedOut, UserButton, SignedIn, useSession } from "@clerk/nextjs";
import { checkUserRole } from "../utils/userUtils";
import Image from "next/image";

const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);

  const links = [
    { title: "Profile", url: "/profile" },
    { title: "Dashboard", url: "/user" },
    { title: "Admin Dashboard", url: "/admin", role: "admin" },
    // Add more placeholder links as needed
  ];

  return (
    <header className="text-gray-600 body-font bg-white shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <span className="ml-3 text-xl">
              The Kawaii <span className="text-[#b3817e]">Factory.</span>
            </span>
          </a>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <SignedIn>
            {links.map((link) =>
              (link.role === "admin" && userRole === "admin") || !link.role ? (
                <Link key={link.title} href={link.url}>
                  {/* Use a div instead of an anchor tag */}
                  <div className="mr-5 cursor-pointer hover:text-gray-900">
                    {link.title}
                  </div>
                </Link>
              ) : null
            )}
          </SignedIn>
        </nav>
        <div className="md:flex items-center">
          <SignedOut>
            <a href="/sign-in">
              <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4">
                Login
              </button>
            </a>
            <a href="/sign-up">
              <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base">
                Sign Up
              </button>
            </a>
          </SignedOut>
          <SignedIn>
            <div className="ml-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
