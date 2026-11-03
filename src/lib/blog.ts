export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

const CONTENT_URL =
  "https://raw.githubusercontent.com/ChenchuH/cdev2.0_blog_repo/master";

export async function getPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${CONTENT_URL}/posts.json`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Could not load the blog post list.");

  const data = (await response.json()) as { posts: BlogPost[] };
  return data.posts;
}

export async function getPost(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;

  const post = (await getPosts()).find((post) => post.slug === slug);
  if (!post) return null;

  const response = await fetch(`${CONTENT_URL}/posts/${slug}.md`, {
    cache: "no-store",
  });

  if (!response.ok) return null;

  return { ...post, content: await response.text() };
}