"use client";
import React, { useEffect, useState } from "react";

function BuildInPublic() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/olliekm/OMEGA/contents/`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setResults(postsData);
        setIsError(null);
      } catch (err) {
        setIsError(err.message);
        setResults(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-3xl">I also build in public</h1>
      <a
        href="https://github.com/olliekm/OMEGA/tree/main"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Check out the repository
      </a>
      <div className="text-black">
        {isError && <div className="">Sorry and error occured</div>}
        {results?.map((res, idx) => (
          <a
            key={idx}
            href={res.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg border-[1px] border-gray-200 hover:underline"
          >
            {res.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default BuildInPublic;
