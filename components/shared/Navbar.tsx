import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../ui/SearchBar";
import DropdownButton from "./DropdownButton";
import { useState } from "react";

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between max-container padding-container relative z-30 py-5 border-b">
      <Link href="/">
        <h1 className="text-2xl font-black">Exclusive</h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex items-center">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black flex items-center cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <SearchBar />

        <a href="/wishlist">
          <Image src="/icons/heart.svg" alt="Wishlist" width={24} height={24} />
        </a>

        <a href="/cart">
          <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
        </a>

        <DropdownButton />
      </div>
    </nav>
  );
};

export default Navbar;
