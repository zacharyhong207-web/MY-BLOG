import { notFound } from "next/navigation";
import { getPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Callout } from "@/components/ui/Callout";
import { TableOfContents } from "@/components/ui/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const components = {
  pre: (props: any) => {
    const code = props.children?.props?.children || "";
    const className = props.children?.props?.className || "";
    const language = className.replace("language-", "") || "text";
    
    return <CodeBlock code={code} language={language} />;
  },
  Callout,
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-16 relative">
      <div className="flex-1 min-w-0">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Writing
        </Link>
        
        <header className="mb-16 space-y-6 border-b border-white/10 pb-12">
          <time className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            {new Date(post.meta.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h1 className="text-4xl font-medium tracking-tight -tracking-[0.03em]">
            {post.meta.title}
          </h1>
          {post.meta.description && (
            <p className="text-xl text-zinc-400 leading-relaxed">
              {post.meta.description}
            </p>
          )}
        </header>

        <article className="prose prose-invert prose-zinc max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-white hover:prose-a:text-white/80 prose-a:transition-colors">
          <MDXRemote source={post.content} components={components} />
        </article>
      </div>
      
      <TableOfContents />
    </div>
  );
}
