"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Link from "next/link";
import { Suspense } from "react";

function Page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      if (params.has(name, value)) {
        params.delete(name, value);
      } else {
        params.append(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      let params = searchParams.getAll("tags");
      console.log(params);
      if (params.length > 0) {
        const { data, error } = await supabase
          .from("blogposts")
          .select()
          .contains("tags", params);
        setPosts(data);
      } else {
        const { data, error } = await supabase.from("blogposts").select("*");
        console.log(data);
        setPosts(data);
      }

      setIsLoading(false);
    }

    fetchPosts();
    console.log(searchParams.getAll("tags"));
  }, [searchParams]);

  const allTags = [
    {
      id: "math",
      name: "Math",
      color: "bg-red-400",
    },
    {
      id: "stats",
      name: "Statistics",
      color: "bg-orange-400",
    },
    {
      id: "AIML",
      name: "AI/ML",
      color: "bg-indigo-400",
    },
    {
      id: "finance",
      name: "Finance",
      color: "bg-sky-400",
    },
    {
      id: "me",
      name: "Personal",
      color: "bg-green-400",
    },
  ];
  // bg-accent-100 text-accent-500  ,

  return (
    <Suspense>
      <div className="flex flex-col min-h-screen">
        <div className="w-full h-auto p-8 space-y-8">
          <h1 className="text-4xl">My posts:</h1>
          <div className="flex items-start space-x-4">
            <small className="text-xl">Tags:</small>
            <div className="flex w-96 h-auto gap-2 flex-wrap">
              {allTags?.map((tag, idx) => (
                <button
                  key={idx}
                  className={`p-1 px-2 ${tag.color} text-white rounded-md ${
                    searchParams.has("tags", tag.id) &&
                    `outline-2 outline outline-black`
                  } `}
                  onClick={() => {
                    // <pathname>?sort=asc
                    router.push(
                      pathname + "?" + createQueryString("tags", tag.id)
                    );
                  }}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-wrap gap-4">
          {isLoading && (
            <div className="">
              <h1>Loading posts...</h1>
            </div>
          )}
          {posts?.map((post, idx) => (
            <Link
              key={idx}
              className="bg-gray-100 p-4 min-h-40 rounded-xl border-[1px] border-gray-200 hover:scale-105 duration-75 hover:shadow-lg"
              href={"/posts/" + post.title}
            >
              <h1 className="text-3xl">{post.title}</h1>
              <h2 className="text-md italic">{post.desc}</h2>
              <small>{post.created_at}</small>
              <div className="flex gap-2 flex-wrap mt-4">
                <small>Topics:</small>
                {post.tags.map((tag, jdx) => (
                  <small key={jdx}>
                    {allTags.find((item) => item.id === tag).name}
                  </small>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
