"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface NewsArticle {
  source: { name: string };
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const countries = [
  { code: "us", name: "United States" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "au", name: "Australia" },
  { code: "ca", name: "Canada" },
  { code: "cn", name: "China" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "gb", name: "United Kingdom" },
  { code: "in", name: "India" },
  { code: "jp", name: "Japan" },
  { code: "ru", name: "Russia" },
  { code: "za", name: "South Africa" },
];

export default function NewsClient({
  initialCategory,
  initialCountry,
  news,
}: {
  initialCategory: string;
  initialCountry: string;
  news: NewsArticle[];
}) {
  const router = useRouter();
  const [category, setCategory] = useState(initialCategory);
  const [country, setCountry] = useState(initialCountry);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
    router.push(`/?country=${e.target.value}&category=${category}`);
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    router.push(`/?country=${country}&category=${cat}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-6">🌍 News Headlines</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          className="px-4 py-2 border border-blue-600 rounded"
          value={country}
          onChange={handleCountryChange}
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm ${
                cat === category
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-blue-600 text-blue-600"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
          >
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt="news"
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="h-48 w-full flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  className="w-12 h-12 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 11a4 4 0 018 0"
                  />
                </svg>
                <span className="text-sm">No Image</span>
              </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-1 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {article.source.name}
              </p>
              <p className="text-sm text-gray-700 flex-grow line-clamp-3">
                {article.description}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 mt-2 hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
