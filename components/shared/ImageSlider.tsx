import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function ImageSlider() {
  return (
    <div className="flex max-container bg-black text-white py-10 m-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-96 flex items-center justify-center"
      >
        <SwiperSlide>
          <div className="flex items-center justify-around px-10 h-full">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/iphone_14.webp"
                  alt="Apple Logo"
                  width={200}
                  height={200}
                />
              </div>
              <h2 className="text-4xl font-bold mb-4">Up to 10% off Voucher</h2>
              <Link href="/product" passHref>
                <button className="text-white underline text-lg flex items-center space-x-1">
                  <span>Shop Now</span>
                  <span>&rarr;</span>
                </button>
              </Link>
            </div>
            <div>
              <Image
                src="/iphone_14_model.webp"
                alt="iPhone 14"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-around px-10 h-full">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/iphone_14.webp"
                  alt="Apple Logo"
                  width={200}
                  height={200}
                />
              </div>
              <h2 className="text-4xl font-bold mb-4">Up to 15% off Voucher</h2>
              <Link href="/product" passHref>
                <button className="text-white underline text-lg flex items-center space-x-1">
                  <span>Shop Now</span>
                  <span>&rarr;</span>
                </button>
              </Link>
            </div>
            <div>
              <Image
                src="/iphone_14_model.webp"
                alt="iPhone 14"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
