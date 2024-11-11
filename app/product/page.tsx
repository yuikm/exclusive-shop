"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") setQuantity(quantity + 1);
    else if (type === "decrement" && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="space-y-4">
            {[
              "/iphone_14_model.webp",
              "/iphone_14_model.webp",
              "/iphone_14_model.webp",
            ].map((src, idx) => (
              <div key={idx} className="w-16 h-16 cursor-pointer">
                <Image
                  src={src}
                  alt={`Product Thumbnail ${idx + 1}`}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/iphone_14_model.webp"
            alt="Main Product"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-yellow-500">★★★★☆</span>
            <span>(150 Reviews)</span>
            <span className="text-green-600">In Stock</span>
          </div>
          <p className="text-2xl font-semibold">$192.00</p>
          <p className="text-gray-600">
            PlayStation 5 Controller Skin. High quality vinyl with air channel
            adhesive for easy bubble-free install.
          </p>

          <div>
            <h3 className="text-sm font-medium">Colours:</h3>
            <div className="flex items-center space-x-2 mt-2">
              <button
                className={`w-6 h-6 rounded-full ${
                  selectedColor === "black" ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: "black" }}
                onClick={() => setSelectedColor("black")}
              ></button>
              <button
                className={`w-6 h-6 rounded-full ${
                  selectedColor === "red" ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: "red" }}
                onClick={() => setSelectedColor("red")}
              ></button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Size:</h3>
            <div className="flex items-center space-x-2 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <h3 className="text-sm font-medium">Quantity:</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-2 py-1 border rounded bg-gray-200"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-2 py-1 border rounded bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          <button className="w-full py-2 mt-4 bg-red-500 text-white font-semibold rounded-lg">
            Buy Now
          </button>

          <div className="border-t pt-4 mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                Free 30 Days Delivery Returns.{" "}
                <a href="#" className="underline">
                  Details
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
