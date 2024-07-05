import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWatchData } from '../apiService';

const WatchPage: React.FC = () => {
  const { endpoint } = useParams<{ endpoint: string }>();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchWatchData(endpoint!);
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center text-red-500">Error loading data</div>;
  }

  const imgUrl = data.imganime.replace('tv.animisme.net/wp-content/uploads', 'animasu.cc/wp-content/uploads');

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Watch {data.title}</h1>
      <img src={imgUrl} alt={data.title} className="w-full h-auto mb-4 rounded" />
      
      <optgroup label="server">
        {data.iframes.map((iframe: any, index: number) => (
          <option key={index} value={iframe.src}>{iframe.label}</option>
        ))}
      </optgroup>

      <ul>
        {data.episodes.map((episode: any, index: number) => (
          <li key={index} className="episode-item text-white bg-gray-800 font-medium rounded sm:rounded text-xs sm:text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-3 sm:px-5 py-1 sm:py-2">
            <a href={episode.href}>{episode.eps}</a>
          </li>
        ))}
      </ul>

      {data.servers.length > 0 && (
        <div className="mb-4">
          <span className="rounded border-s-4 border-orange-800 p-2 text-md sm:text-xl text-gray-300 font-medium">Link download </span>
          <div className="flex flex-col gap-2 col-span-2">
            {data.servers.map((server: any, index: number) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 dark:bg-orange-950 rounded-sm">
                <ul className="flex items-center gap-3 flex-wrap px-2">
                  <h4 className="text-white bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-4 focus:ring-orange-300 font-bold sm:text-sm text-xs rounded py-2 dark:bg-orange-800 dark:hover:bg-orange-700 dark:focus:ring-orange-700 dark:border-orange-700 w-24 px-2 whitespace-nowrap">
                    {server.server}
                  </h4>
                  {server.links.map((link: any, linkIndex: number) => (
                    <a key={linkIndex} target="_blank" rel="noopener noreferrer" href={link.url} className="text-orange-500 hover:underline hover:text-orange-600 sm:text-sm text-xs dark:text-orange-500">
                      {link.text}
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
