import axios from "axios";
import ImageSlider from "@/components/shared/ImageSlider";
import { ProductType } from "@/components/types/types";
import Products from "@/components/shared/Products";
import SectionTitle from "@/components/ui/SectionTitle";
import Banners from "@/components/shared/Banners";

const getProducts = async () => {
  try {
    const res = await axios.get<ProductType[]>(
      "https://665c3c1b3e4ac90a04d9021e.mockapi.io/products"
    );

    return res.data;
  } catch {
    throw new Error("Can't fetch data");
  }
};

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <div className="justify-center mx-auto max-w-screen-xl px-4">
        <ImageSlider />
      </div>
      <SectionTitle />
      <div className="mx-auto max-w-screen-xl flex justify-center mt-8">
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mb-8 m-auto">
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mb-5">
        <Banners />
      </div>
    </>
  );
}
