import React, { useEffect, useState } from 'react';
import { fetchHomeData } from '../apiService';

interface Article {
  link: string;
  typez: string;
  title: string;
  img: string;
}

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchHomeData();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">Anime Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700"
          >
            <img src={article.img} alt={article.title} className="w-full h-auto rounded" />
            <h2 className="text-xl font-semibold text-orange-500 mt-4">{article.title}</h2>
            <p className="text-gray-400">{article.typez}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
