import BlogDetails from "@/components/BlogPage/BlogDetails";
import Herosection from "@/components/TitleBanner/TitleBanner";
import { blogs } from "@/data/blogs";
export function generateStaticParams() {
  return blogs.map(blog => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  // Await params if needed in future Next.js versions, currently synchronous access is fine but async is standard for metadata
  const slug = params.slug;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.desc,
    keywords: blog.tags,
    alternates: {
      canonical: `https://naspixels.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.desc,
      url: `https://naspixels.com/blog/${blog.slug}`,
      type: 'article',
      siteName: 'NAS Pixels',
      images: [
        {
          url: blog.img,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.desc,
      images: [blog.img],
    },
  };
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
      <Herosection title={blog.title} slug={blog.slug} />
      <BlogDetails blog={blog} />
    </>
  );
}
