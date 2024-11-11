export interface ProductType {
  id: string;
  name: string;
  slug: string;
  rating: number;
  actualPrice: number;
  discountPrice?: number;
  image: string;
  reviewsCount: number;
}
