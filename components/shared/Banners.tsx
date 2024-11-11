import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banners: React.FC = () => {
  return (
    <div className="flex flex-col max-container container mx-auto py-6">
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-6 bg-red-500 rounded"></div>
          <span className="text-red-500 font-medium text-sm">Featured</span>
        </div>
        <h1 className="text-3xl font-bold mt-2">New Arrival</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative bg-black text-white rounded-lg overflow-hidden md:col-span-2">
          <Image
            src="/ps5.png"
            alt="PlayStation 5"
            layout="responsive"
            width={700}
            height={500}
            className="opacity-80"
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="/product/ps5">Shop Now</Link>
          </div>
        </div>

        <div className="relative bg-black text-white rounded-lg overflow-hidden">
          <Image
            src="/women.webp"
            alt="Women's Collections"
            layout="responsive"
            width={700}
            height={500}
            className="opacity-80"
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-xl font-semibold">Women's Collections</h2>
            <p className="text-sm">
              Featured women collections that give you another vibe.
            </p>
            <Link href="/product/women-collections">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
