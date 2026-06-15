import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blogPosts = await getCollection('blog');
  const sortedPosts = blogPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: '我的个人博客',
    description: '记录思考，分享知识。',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}