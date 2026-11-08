import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'journal'>;

const MORE = '<!-- more -->';

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('journal');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Splits a post's HTML at the `<!-- more -->` marker into its intro and the rest. */
export function splitPost(post: Post): { intro: string; body: string } {
  const html = post.rendered?.html ?? '';
  const i = html.indexOf(MORE);
  if (i === -1) return { intro: html, body: '' };
  return { intro: html.slice(0, i), body: html.slice(i + MORE.length) };
}

export function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

export const tagSlug = (tag: string) => tag.toLowerCase().replace(/\s+/g, '-');

export function getTags(posts: Post[]): string[] {
  return [...new Set(posts.flatMap((p) => p.data.tags))].sort();
}

export const PAGE_SIZE = 10;

/** Matches the old site: /journal/ for page 1, then /journal/page/2/ and on. */
export const journalPageUrl = (n: number) => (n === 1 ? '/journal/' : `/journal/page/${n}/`);

export const postUrl =(post: Post) => `/journal/${post.id}/`;
export const tagUrl = (tag: string) => `/journal/categories/${tagSlug(tag)}/`;

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

/** Years since starting out in 2006, worked out at build time. */
export const yearsExperience = () => new Date().getFullYear() - 2006;
