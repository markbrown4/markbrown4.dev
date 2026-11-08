import type { APIRoute } from 'astro';
import { getPosts, postUrl, splitPost, stripTags } from '../../lib/journal';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// An Atom feed, kept at the same path as the old site's so existing subscribers carry over.
export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const base = new URL('/journal/', site);
  const entries = posts.map((post) => {
    const url = new URL(postUrl(post), site).href;
    const { intro, body } = splitPost(post);
    const date = post.data.date.toISOString();
    return `  <entry>
    <title>${escape(post.data.title)}</title>
    <link rel="alternate" href="${url}"/>
    <id>${url}</id>
    <published>${date}</published>
    <updated>${date}</updated>
    <summary>${escape(stripTags(intro))}</summary>
    <content type="html">${escape(intro + body)}</content>
  </entry>`;
  });

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Mark Brown's journal</title>
  <subtitle>Writing on work, life and the web.</subtitle>
  <id>${base.href}</id>
  <link href="${base.href}"/>
  <link rel="self" href="${new URL('feed.xml', base).href}"/>
  <updated>${posts[0].data.date.toISOString()}</updated>
  <author><name>Mark Brown</name></author>
${entries.join('\n')}
</feed>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
};
