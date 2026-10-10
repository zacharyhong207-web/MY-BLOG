import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content/blog');

export async function getBlogPosts() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const rawContent = fs.readFileSync(filePath, 'utf-8');
      
      const titleMatch = rawContent.match(/title:\s*['"]?([^'"]+)['"]?/);
      const dateMatch = rawContent.match(/(?:pubD|d)ate:\s*['"]?([^'"]+)['"]?/);
      const descMatch = rawContent.match(/description:\s*['"]?([^'"]+)['"]?/);
      const readTimeMatch = rawContent.match(/readTime:\s*['"]?([^'"]+)['"]?/);
      
      return {
        slug: file.replace(/\.mdx?$/, ''),
        title: titleMatch ? titleMatch[1] : 'Untitled',
        date: dateMatch ? dateMatch[1] : new Date().toISOString(),
        description: descMatch ? descMatch[1] : '',
        readTime: readTimeMatch ? readTimeMatch[1] : '',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return posts;
}

export async function getPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  
  const content = rawContent.replace(/---[\s\S]*?---/, '').trim();
  
  const titleMatch = rawContent.match(/title:\s*['"]?([^'"]+)['"]?/);
  const dateMatch = rawContent.match(/(?:pubD|d)ate:\s*['"]?([^'"]+)['"]?/);
  const descMatch = rawContent.match(/description:\s*['"]?([^'"]+)['"]?/);
  const readTimeMatch = rawContent.match(/readTime:\s*['"]?([^'"]+)['"]?/);
  
  return {
    meta: {
      title: titleMatch ? titleMatch[1] : 'Untitled',
      date: dateMatch ? dateMatch[1] : new Date().toISOString(),
      description: descMatch ? descMatch[1] : '',
      readTime: readTimeMatch ? readTimeMatch[1] : '',
    },
    content
  };
}
