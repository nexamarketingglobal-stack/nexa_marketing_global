// Add only verified products, real prices, and approved affiliate URLs to this array.
export type ProductCategory = "phones" | "charging" | "protection" | "audio" | "work";

export type CatalogProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  priceUsd: number;
  affiliateUrl: string;
  imageUrl: string;
  summary: string;
  isVerified: true;
};

// Intentionally empty until Nexa provides verified product details and affiliate links.
export const catalogProducts: CatalogProduct[] = [];

export const catalogCategories: ProductCategory[] = ["phones", "charging", "protection", "audio", "work"];
