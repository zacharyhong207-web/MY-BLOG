import Link from "next/link";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    description: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <LiquidGlassCard className="p-6 md:p-8 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 group">
        <time className="text-xs font-mono uppercase tracking-widest text-zinc-500 shrink-0">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </time>
        <div className="space-y-2">
          <h2 className="text-lg font-medium tracking-tight group-hover:text-white transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-zinc-400 line-clamp-2">
            {post.description}
          </p>
        </div>
      </LiquidGlassCard>
    </Link>
  );
}
