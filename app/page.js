"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("blogposts")
        .select("*")
        .limit(2)
        .order("created_at", { ascending: false });

      console.log(data);
      setRecentPosts(data);

      setIsLoading(false);
    }

    fetchPosts();
    setIsLoading(true);
  }, []);
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
  return (
    <main className="">
      <div className="w-full h-auto">
        {/* Homepage content */}
        <div className="flex justify-between w-full">
          <div className="lg:w-1/2 w-full p-10 space-y-8">
            <h1 className="text-3xl">Hi, I'm Oliver</h1>
            <p>
              I am student at the <strong>University of Toronto</strong>,
              studying <strong>Computer Science</strong>. I plan to focus in
              <strong> Artificial Intelligence</strong> and minor in{" "}
              <strong>Statistics</strong> (potentially major/minor in Scientific
              Computing)
            </p>
            <p>
              I also just completed the{" "}
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/R73ZYHR9EKXT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-indigo-500 font-bold"
              >
                Stanford University & DeepLearning.AI Machine Learning
                Specialization
              </a>{" "}
              course!
            </p>
          </div>
          {/* <div className="hidden lg:flex flex-1 p-10">
            <div className="bg-gray-100 p-4 h-min">
              <h1 className="italic">Currently working on: </h1>
              <h1 className="text-3xl">Sapien</h1>
              <p>
                A notetaking and study tool to visualize concepts. Powered by
                OpenAI GPT-3.5
              </p>
            </div>
          </div> */}
        </div>
        <div className="p-10 space-y-8">
          <h1 className="text-3xl">
            I have a passion for maths and its applications in computing
          </h1>
          <h2 className="text-xl">Here's some of my posts on this:</h2>
          <div className="flex flex-wrap gap-2">
            {isLoading && (
              <>
                <div className="h-40 w-80 rounded-xl border-[1px] border-gray-200 bg-gray-100/50 animate-pulse"></div>
                <div className="h-40 w-80 rounded-xl border-[1px] border-gray-200 bg-gray-100/50 animate-pulse"></div>
              </>
            )}
            {recentPosts?.map((post, idx) => (
              <Link
                key={idx}
                className="bg-gray-100 p-4 group min-h-40 rounded-xl border-[1px] border-gray-200 hover:scale-105 duration-75 hover:shadow-lg"
                href={"/posts/" + post.title}
              >
                <h1 className="text-2xl ">{post.title}</h1>
                <h2 className="text-md italic">{post.desc}</h2>
                <small>{post.created_at}</small>
                <div className="flex gap-2 flex-wrap mt-4">
                  <small>Topics:</small>
                  {post.tags.map((tag, jdx) => (
                    <small>
                      {allTags.find((item) => item.id === tag).name}
                    </small>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-10 space-y-8">
          <h1 className="text-3xl">Check out some of my personal projects</h1>
          <h2 className="text-xl">Here's some of them:</h2>
          <div className="flex flex-wrap gap-2">
            <div className="sm:w-64 w-full aspect-square bg-black"></div>
            <div className="sm:w-64 w-full aspect-square bg-black"></div>
            <div className="sm:w-64 w-full aspect-square bg-black"></div>
            <div className="sm:w-64 w-full aspect-square bg-black"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
