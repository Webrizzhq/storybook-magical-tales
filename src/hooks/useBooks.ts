import { useEffect, useState } from "react";
import { sanity } from "../lib/sanityClient";

export interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  ageRange: string;
  language?: string;
  synopsis: string;
  coverImage?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  featured?: boolean;
  comingSoon?: boolean;
  purchaseLink?: string;
}

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await sanity.fetch(`
  *[_type == "book"]{
    _id,
    title,
    author,
    "category": category->name,
    ageRange,
    language,
    synopsis,
    featured,
    comingSoon,
    purchaseLink,
    "coverImage": coverImage.asset->{
      _ref,
      url
    }
  } | order(title asc)
`);

        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const getFeaturedBooks = () => books.filter((b) => b.featured);
  const getBooksByCategory = (category: string) =>
    category === "All Books"
      ? books.filter((b) => !b.language || b.language === "English")
      : books.filter(
          (b) =>
            b.category === category &&
            (!b.language || b.language === "English")
        );

  const getBookById = (id: string) => books.find((b) => b._id === id);

  const getBooksByAge = (ageRange: string) =>
    ageRange === "All Ages"
      ? books
      : books.filter((b) =>
          b.ageRange.includes(ageRange.split(" ")[0])
        );

  return {
    books,
    loading,
    getFeaturedBooks,
    getBooksByCategory,
    getBookById,
    getBooksByAge,
  };
};
