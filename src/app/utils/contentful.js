// src/utils/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlogPosts() {
  try {
    // Fetch entries
    const entries = await client.getEntries({
      content_type: 'blogPost',
    });
   

    // If no items, log and return an empty array
    if (!entries.items || entries.items.length === 0) {
      console.log("No blog posts found.");
      return [];
    }

    // Log mapped posts
    const posts = entries.items.map((item) => {
      return {
        title: item.fields.title,
        slug: item.fields.slug,
        body: item.fields.body,
        image: item.fields.image?.fields.file.url || null,
      };
    });

    return posts;

  } catch (error) {
    // Log any error that occurs during the request
    console.error("Error fetching blog posts:", error);
    return [];
  }
}
