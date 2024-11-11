"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";
import ImageSlider from "@/components/shared/ImageSlider";
import { ProductType } from "@/components/types/types";
import Products from "@/components/shared/Products";
import SectionTitle from "@/components/ui/SectionTitle";
import Banners from "@/components/shared/Banners";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get<ProductType[]>(
        "https://665c3c1b3e4ac90a04d9021e.mockapi.io/products"
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <ImageSlider />
      <SectionTitle />
      <div className="flex flex-wrap justify-center mt-8">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      <Banners />
      <Footer />
    </>
  );
}
