import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-screen-xl mx-auto px-4">
        <div>
          <h2 className="text-lg font-bold mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none h-10"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md h-10 flex items-center justify-center"
            >
              &rarr;
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm">DH 1515, Bangladesh.</p>
          <p className="text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#">My Account</Link>
            </li>
            <li>
              <Link href="#">Login / Register</Link>
            </li>
            <li>
              <Link href="#">Cart</Link>
            </li>
            <li>
              <Link href="#">Wishlist</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms Of Use</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Download App</h2>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex justify-start mb-4">
            <Image
              src="/qr_code.webp"
              alt="Download App QR Code"
              width={200}
              height={200}
              className="bg-white rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
