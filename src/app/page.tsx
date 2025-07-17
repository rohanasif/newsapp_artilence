import axios from "axios";
import NewsClient, { NewsArticle } from "./NewsClient";

const fetchNews = async (category = "general", country = "us") => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/news?country=${country}&category=${category}`
  );
  return res.data.articles as NewsArticle[];
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; country?: string }>;
}) {
  const params = await searchParams;
  const category = params?.category || "general";
  const country = params?.country || "us";
  const news = await fetchNews(category, country);

  return (
    <NewsClient
      initialCategory={category}
      initialCountry={country}
      news={news}
    />
  );
}
