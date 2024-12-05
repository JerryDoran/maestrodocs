import { article } from '@/lib/source';
import Link from 'next/link';

export default function ArticlePage() {
  const posts = article.getPages();
  console.log(posts);

  return (
    <main className='container md:py-12'>
      <h1 className='mb-4 border-b-4 border-fd-foreground pb-2 text-4xl font-bold md:text-5xl'>
        Tech Articles
      </h1>
      <div className='flex flex-col gap-2'>
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className='flex flex-col bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground border rounded-lg'
          >
            <p className='font-medium'>{post.data.title}</p>
            <p className='text-sm text-fd-muted-foreground'>
              {post.data.description}
            </p>
            <p className='mt-auto pt-4 text-xs text-fd-muted-foreground'>
              {new Date(post.data.pubDate ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
