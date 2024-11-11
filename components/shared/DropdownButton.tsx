"use client";

import { useState } from "react";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c2.761 0 5-2.239 5-5S14.761 1 12 1 7 3.239 7 6s2.239 5 5 5zm0 2c-3.86 0-7 3.141-7 7v1h14v-1c0-3.859-3.14-7-7-7z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img
                src="/icons/account.svg"
                alt="Manage My Account"
                className="w-5 h-5 mr-2"
              />
              Manage My Account
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img
                src="/icons/account.svg"
                alt="Manage My Account"
                className="w-5 h-5 mr-2"
              />
              My Order
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img
                src="/icons/account.svg"
                alt="Manage My Account"
                className="w-5 h-5 mr-2"
              />
              My Cancellations
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img
                src="/icons/account.svg"
                alt="Manage My Account"
                className="w-5 h-5 mr-2"
              />
              My Reviews
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img
                src="/icons/account.svg"
                alt="Manage My Account"
                className="w-5 h-5 mr-2"
              />
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
