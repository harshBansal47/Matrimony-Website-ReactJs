import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import placeholderImage from "../images/blog.jpg"; // Replace with your image path

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      // Replace with your API endpoint
      const response = await fetch(`/api/blogs/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data);
      } else {
        console.error('Failed to fetch blog');
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto pt-28 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src={blog.image || placeholderImage}
          alt={blog.title}
          className="rounded-t-lg object-cover"
          width={600}
          height={400}
        />
        <div className="mt-4">
          <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
          <div className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
