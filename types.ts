export interface MenuItem {
  id: string; // Unique slug-like identifier
  name: string;
  description: string;
  price: number;
  category: string; // More flexible categories
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface SpecialOffer {
  title: string;
  description: string;
  price: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  rating: number; // Rating out of 5
}