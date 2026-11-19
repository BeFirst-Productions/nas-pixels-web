"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedBlog } from "@/data/localizedBlogs";

const BlogDetails = ({ blog }) => {
  const { t, language } = useLanguage();
  const currentBlog = getLocalizedBlog(blog, language) || blog;

  return (
    <article className="min-h-screen py-10 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT – Image */}
        <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,255,120,0.3)] md:sticky md:top-24">
          <img
            src={currentBlog.img}
            alt={currentBlog.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* RIGHT – Content */}
        <div className="space-y-6">

          <h1 className="text-3xl md:text-5xl font-bold ">
            {currentBlog.title}
          </h1>

          <p className=" leading-relaxed">
            {currentBlog.desc}
          </p>

          <div className="space-y-4  leading-relaxed">
            {currentBlog.content.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-6">
            {currentBlog.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 text-xs rounded-full border border-dashed border-[#70C879] "
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/blogs"
            className="inline-block mt-10  hover:underline text-[#70C879]"
          >
            {t("common.backToBlog", "← Back to Blog")}
          </Link>

        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
