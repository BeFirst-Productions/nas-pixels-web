import BlogDetails from "@/components/BlogPage/BlogDetails";
import Herosection from "@/components/TitleBanner/TitleBanner";
import { blogs } from "@/data/blogs";
export function generateStaticParams() {
  return blogs.map(blog => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#06140b] text-green-400">
        Blog not found
      </div>
    );
  }

  return (
    <>
    <Herosection title={blog.title}/>
    <BlogDetails blog={blog}/> 
    </>
  );
}
