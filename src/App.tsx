import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;

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
  { code: "ar", name: "Argentina" },
  { code: "au", name: "Australia" },
  { code: "ca", name: "Canada" },
  { code: "cn", name: "China" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "gb", name: "United Kingdom" },
  { code: "in", name: "India" },
  { code: "jp", name: "Japan" },
  { code: "ru", name: "Russia" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "za", name: "South Africa" },
];

// Define NewsArticle type for type safety
interface NewsArticle {
  source: { name: string };
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

function App() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country,
            category,
            apiKey: API_KEY,
          },
        });
        setNews(res.data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-6 shadow-md">
        <h1 className="text-center text-3xl font-bold">🌐 World News Today</h1>
      </header>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mt-6 px-4 md:px-6">
        {/* Country Selector */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">
              Select Country:
            </label>
            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat
                  ? "bg-blue-700 text-white shadow"
                  : "bg-white border border-blue-700 text-blue-700 hover:bg-blue-50"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {loading ? (
          <p className="text-center text-lg py-20">Loading top headlines...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
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
                  <p className="text-sm text-gray-500 mb-2">
                    {article.source.name}
                  </p>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-blue-600 font-medium hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10 py-6">
        Powered by{" "}
        <a href="https://newsapi.org" className="text-blue-600 hover:underline">
          NewsAPI.org
        </a>
      </footer>
    </div>
  );
}

export default App;
