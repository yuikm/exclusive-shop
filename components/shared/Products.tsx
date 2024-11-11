import Image from "next/image";
import { ProductType } from "../types/types";

interface ProductProps {
  product: ProductType;
}

export default function Products({ product }: ProductProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64 relative">
      {product.discountPrice && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
          SALE
        </div>
      )}

      <Image
        src={product.image}
        alt={product.name}
        width={270}
        height={250}
        className="rounded-md"
      />

      <a className="text-lg font-bold mt-2" href="*">
        {product.name}
      </a>

      <p className="text-sm text-gray-600">Rating: {product.rating}</p>
      <p className="text-sm text-gray-600">Reviews: {product.reviewsCount}</p>

      <div className="flex items-center justify-between mt-2">
        {product.discountPrice && (
          <span className="line-through text-gray-500">
            ${product.actualPrice}
          </span>
        )}
        <span className="text-green-600 font-semibold">
          ${product.discountPrice || product.actualPrice}
        </span>
      </div>
    </div>
  );
}
