// src/app/blog/[slug]/page.js
import { getBlogPosts } from '../../utils/contentful';
import Image from 'next/image';

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">{post.title}</h1>
        {post.image && (
          <div className="mb-8 mr-10 max-w-sm float-left flex justify-center">
            <Image
              src={`https:${post.image}`}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <div className="prose prose-lg prose-invert mx-auto">
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
