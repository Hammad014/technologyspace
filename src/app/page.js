import { getBlogPosts } from './utils/contentful';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">TechSpace</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-indigo-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-indigo-300">About</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Slideshow */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-4">Welcome to TechSpace</h2>
            <p className="text-xl">Your go-to platform for IT, IoT, and technology news.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">About TechSpace</h3>
          <p className="text-lg max-w-3xl mx-auto">
            TechSpace is a blog dedicated to covering the latest in IT, IoT, AI, and the tech world. Stay up to date with insightful articles, how-tos, and reviews about the technologies that are shaping our future.
          </p>
        </div>

        {/* Recent Posts Section */}
        <section className="mb-16">
          <h4 className="text-3xl font-bold mb-8">Recent Posts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold hover:underline">{post.title}</h3>
                </Link>
                <p className="mt-4">{post.body.slice(0, 150)}...</p>
                <Link href={`/blog/${post.slug}`} className="text-indigo-500 hover:underline mt-4 inline-block">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center space-x-6">
            <Link href="/" className="hover:text-indigo-300">Home</Link>
            <Link href="/about" className="hover:text-indigo-300">About</Link>
            <Link href="/blog" className="hover:text-indigo-300">Blog</Link>
            <Link href="/contact" className="hover:text-indigo-300">Contact</Link>
          </div>
          <div className="text-gray-400">
            &copy; 2024 TechSpace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
