import { article } from '@/lib/source';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';

export default async function SingleArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const parameters = await params;
  const page = article.getPage([parameters.slug]);

  console.log(page);

  if (!page) notFound();
  return (
    <>
      <div className='container pt-8 md:px-8'>
        <Link
          href='/articles'
          className='border px-4 py-2 rounded text-sm transition-colors dark:hover:bg-gray-800 hover:bg-gray-200 flex items-center gap-2 w-fit'
        >
          <FaArrowLeft />
          Back
        </Link>
        <h1 className='my-2 text-3xl font-bold mt-8'>{page.data.title}</h1>
        <p className='mb-1 text-xs italic text-fd-muted-foreground'>
          {new Date(page.data.pubDate).toDateString()}
        </p>
        <p className='mb-1 text-xs text-fd-muted-foreground'>
          Written by: {page.data.author}
        </p>
      </div>
      <article className='container flex flex-col px-2 py-8 lg:px-4'>
        <div className='prose min-w-0 flex-1 p-4'>
          <InlineTOC items={page.data.toc} />
          <page.data.body components={defaultMdxComponents} />
        </div>

        <div className='flex flex-col gap-4 p-4 text-sm lg:w-[250px]'>
          <div>
            <p className='mb-1 text-fd-muted-foreground'>Written by</p>
            <p className='font-medium'>{page.data.author}</p>
          </div>
        </div>
      </article>
    </>
  );
}
