import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banners: React.FC = () => {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto padding-container p-4">
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-6 bg-red-500 rounded"></div>
          <span className="text-red-500 font-medium text-sm">Featured</span>
        </div>
        <h1 className="text-3xl font-bold mt-2">New Arrival</h1>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 lg:row-span-2 lg:h-90">
          <div className="bg-[url('/ps5.png')] bg-cover bg-center text-white rounded-lg overflow-hidden h-full flex flex-col justify-end p-4">
            <h2 className="text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="/product/ps5">Shop Now</Link>
          </div>
        </div>

        <div className="lg:col-span-2 lg:h-60">
          <div className="bg-[url('/ps5.png')] bg-cover bg-center text-white rounded-lg overflow-hidden h-full flex flex-col justify-end p-4">
            <h2 className="text-2xl font-semibold">Women's collection</h2>
            <p className="text-sm">Women's collection.</p>
            <Link href="/product/ps5">Shop Now</Link>
          </div>
        </div>

        <div className="lg:col-span-1 lg:row-span-1 lg:h-60">
          <div className="bg-[url('/ps5.png')] bg-cover bg-center text-white rounded-lg overflow-hidden h-full flex flex-col justify-end p-4">
            <h2 className="text-2xl font-semibold">Speakers</h2>
            <p className="text-sm">Speakers.</p>
            <Link href="/product/ps5">Shop Now</Link>
          </div>
        </div>

        <div className="lg:col-span-1 lg:h-60">
          <div className="bg-[url('/ps5.png')] bg-cover bg-center text-white rounded-lg overflow-hidden h-full flex flex-col justify-end p-4">
            <h2 className="text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-sm">Black and White version of the PS5.</p>
            <Link href="/product/ps5">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
