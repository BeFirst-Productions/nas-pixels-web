import Link from "next/link";

const BlogDetails = ({ blog }) => {
  return (
    <article className="min-h-screen py-10 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT – Image */}
        <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,255,120,0.3)]">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* RIGHT – Content */}
        <div className="space-y-6">

          <h1 className="text-3xl md:text-5xl font-bold ">
            {blog.title}
          </h1>

          {/* <div className="flex gap-6 text-sm text-green-300">
            <span>{blog.author}</span>
            <span>{new Date(blog.date).toDateString()}</span>
          </div> */}

          <p className=" leading-relaxed">
            {blog.desc}
          </p>

          <div className="space-y-4  leading-relaxed">
            {blog.content.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-6">
            {blog.tags.map((tag, i) => (
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
            className="inline-block mt-10  hover:underline"
          >
            ← Back to Blog
          </Link>

        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
