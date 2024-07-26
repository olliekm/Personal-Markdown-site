"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import RemarkMathPlugin from "remark-math";
import rehypeKatex from "rehype-katex";
import { useParams } from "next/navigation";
import { supabase } from "@/app/utils/supabase";
import Link from "next/link";

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin],
  renderers: {
    ...props.renderers,
    math: (opts) => <BlockMath math={opts.value} />,
    inlineMath: (opts) => <InlineMath math={opts.value} />,
  },
});
function Page() {
  const { postid } = useParams();
  const decodedId = decodeURIComponent(postid);
  const [postData, setPostData] = useState("");
  const [MDData, setMDData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [didError, setDidError] = useState(false);
  useEffect(() => {
    async function fetchMarkdownFile(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const data = await response.text();
        setMDData(data);
      } catch (error) {
        setDidError(true);
        console.error("Error fetching image:", error);
      } finally {
        setIsLoading(false);
      }
    }

    async function fetchPostData() {
      console.log(decodedId);
      const { data, error } = await supabase
        .from("blogposts")
        .select()
        .eq("title", decodedId);
      setPostData(data[0]);
      try {
        fetchMarkdownFile(data[0].s3_url);
      } catch (err) {
        setDidError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPostData();
    setIsLoading(true);
  }, [decodedId]);

  // Use gray-matter to parse the post metadata section

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  // .use(html)
  // .process(file);
  // const contentHtml = processedContent.toString();
  if (isLoading)
    return (
      <div className="flex-1 min-h-screen flex justify-center items-center p-8">
        <h1>Loading Post...</h1>
      </div>
    );

  if (didError) {
    return (
      <div className="flex-1 min-h-screen flex justify-center items-center p-8">
        <div className=" text-white rounded-md flex flex-col overflow-hidden">
          <div className="p-4 bg-red-400">Sorry an error occured</div>
          <Link
            href={"/posts"}
            className="bg-gray-100 text-black p-2 text-center underline"
          >
            Back to posts
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center w-auto px-4 overflow-hidden">
      <div className="p-8 w-full flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold">{postData.title}</h1>
        <h2 className="italic">{postData.desc}</h2>
        <small>{postData.created_at}</small>
      </div>
      <div className="prose sm:w-[50rem] sm:px-0 max-w-[100vw] px-8">
        <ReactMarkdown
          remarkPlugins={[RemarkMathPlugin]}
          rehypePlugins={[rehypeKatex]}
        >
          {MDData}
        </ReactMarkdown>
      </div>
      {/* <div className="w-full h-[1px] bg-black/20 mt-10"></div> */}
      {/* <div className="p-8 mb-8 space-y-4">
        <div className="text-2xl ">
          <h1>More posts</h1>
        </div>
        <div className="overflow-hidden flex gap-4">
          <div className="h-32 w-40 bg-black"></div>
          <div className="h-32 w-40 bg-black"></div>
          <div className="h-32 w-40 bg-black"></div>
        </div>
      </div> */}
    </div>
  );
}

export default Page;
