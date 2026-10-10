import { PostCard } from "@/components/blog/PostCard";
import { getBlogPosts } from "@/lib/mdx";

export default async function BlogIndex() {
  const posts = await getBlogPosts();
  
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Writing</h1>
        <p className="text-zinc-400 max-w-xl">
          Thoughts on software architecture, design engineering, and the Apple ecosystem.
        </p>
      </div>
      
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
