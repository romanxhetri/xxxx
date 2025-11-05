import { GoogleGenAI, Type } from "@google/genai";
import type { MenuItem, SpecialOffer, Testimonial } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = 'gemini-2.5-flash';

export const getMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const response = await ai.models.generateContent({
      model,
      contents: "Generate a list of 20 creative and delicious menu items for a restaurant called 'Potato & Friends'. The theme is comfort food with a focus on potatoes, but should include other dishes too. Provide a unique slug-like id, name, a longer, enticing description, price, and category for each. Categories should be 'Starters', 'Potato Mains', 'Hearty Mains', 'Sides', 'Desserts', and 'Beverages'.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING, description: "A unique, URL-friendly slug for the item (e.g., 'loaded-potato-skins')." },
              name: { type: Type.STRING, description: "Name of the menu item." },
              description: { type: Type.STRING, description: "A longer, enticing description." },
              price: { type: Type.NUMBER, description: "Price of the item." },
              category: { type: Type.STRING, description: "The menu category (e.g., 'Starters', 'Potato Mains')." },
            },
            required: ['id', 'name', 'description', 'price', 'category'],
          },
        },
      },
    });

    const jsonString = response.text.trim();
    const menuItems: MenuItem[] = JSON.parse(jsonString);
    return menuItems;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw new Error("Failed to fetch menu items from Gemini API.");
  }
};

export const getDailySpecials = async (): Promise<SpecialOffer[]> => {
  try {
    const response = await ai.models.generateContent({
      model,
      contents: "Create 2 exciting and creative daily special offers for 'Potato & Friends', a comfort food restaurant. Each special should have a catchy title, a mouth-watering description, and a special price.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "The catchy title of the special offer." },
              description: { type: Type.STRING, description: "A description of what's included in the special." },
              price: { type: Type.STRING, description: "The special price for the offer." },
            },
            required: ['title', 'description', 'price'],
          },
        },
      },
    });

    const jsonString = response.text.trim();
    const specials: SpecialOffer[] = JSON.parse(jsonString);
    return specials;
  } catch (error) {
    console.error("Error fetching daily specials:", error);
    throw new Error("Failed to fetch daily specials from Gemini API.");
  }
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await ai.models.generateContent({
      model,
      contents: "Generate 3 short, positive, and heartwarming customer testimonials for a comfort food restaurant called 'Potato & Friends'. Provide a customer name, a quote, and a star rating between 4 and 5.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "The customer's first name." },
              quote: { type: Type.STRING, description: "The customer's testimonial quote." },
              rating: { type: Type.NUMBER, description: "A rating from 4 to 5." },
            },
            required: ['name', 'quote', 'rating'],
          },
        },
      },
    });

    const jsonString = response.text.trim();
    const testimonials: Testimonial[] = JSON.parse(jsonString);
    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw new Error("Failed to fetch testimonials from Gemini API.");
  }
};