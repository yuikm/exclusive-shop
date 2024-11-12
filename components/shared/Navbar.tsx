"use client";

import { useState } from "react";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../ui/SearchBar";
import DropdownButton from "./DropdownButton";
import clsx from "clsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4 padding-container relative z-30 py-5 border-b">
      <Link href="/">
        <h1 className="text-2xl font-black">Exclusive</h1>
      </Link>

      <button
        className="lg:hidden flex flex-col justify-between h-6 w-6 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={clsx("block h-0.5 w-full bg-black transition-transform", {
            "rotate-45 translate-y-2.5": isOpen,
          })}
        ></span>
        <span
          className={clsx(
            "block h-0.5 w-full bg-black transition-opacity",
            isOpen && "opacity-0"
          )}
        ></span>
        <span
          className={clsx(
            "block h-0.5 w-full bg-black transition-transform",
            isOpen && "-rotate-45 -translate-y-2.5"
          )}
        ></span>
      </button>

      <ul className="hidden lg:flex h-full gap-12 items-center">
        {navLinks.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-black cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex h-full gap-6 items-center">
        <SearchBar />

        <Link href="/wishlist">
          <Image src="/icons/heart.svg" alt="Wishlist" width={24} height={24} />
        </Link>

        <Link href="/cart">
          <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
        </Link>
        <DropdownButton />
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.key} className="w-full text-center">
                <Link
                  href={link.href}
                  className="regular-16 text-black cursor-pointer transition-all hover:font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-6 mt-4">
            <SearchBar />
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/wishlist">
              <Image
                src="/icons/heart.svg"
                alt="Wishlist"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/cart">
              <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
