import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const vaultPath = path.resolve(__dirname + "../notas_base/");

function slugify(text: string): string {
  return text
    .normalize('NFD') // split accented letters into parts
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // replace spaces with dashes
    .replace(/[^a-z0-9\-]/g, ''); // remove all non-safe characters
}

function convertWikilinksToLinks(md: string): string {
  return md.replace(/\[\[([^\]]+?)\]\]/g, (_, match) => {
    const [target, labelRaw] = match.split('|').map((s: string) => s.trim());
    const slug = slugify(target);
    const label = labelRaw ? (marked.parseInline(labelRaw) as string).trim() : target;
    return `<a href="/notas/${slug}">${label}</a>`;
  });
}

export function getNoteBySlug(slug: string) {
  const files = fs.readdirSync(vaultPath).filter(f => f.endsWith('.md'));
  const match = files.find(f => slugify(f.replace(/\.md$/, '')) === slug);

  if (!match) {
    throw new Error(`Note not found for slug: ${slug}`);
  }

  const filePath = path.join(vaultPath, match);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const wikilinked = convertWikilinksToLinks(content);
  const html = marked(wikilinked);

  return {
    slug,
    title: match.replace(/\.md$/, ''),
    frontmatter: data,
    html
  };
}


export function getAllNotes() {
  const files = fs.readdirSync(vaultPath).filter(f => f.endsWith('.md'));

  return files.map(file => {
    const raw = fs.readFileSync(path.join(vaultPath, file), 'utf-8');
    const { data, content } = matter(raw);

    const title = data.title || file.replace(/\.md$/, '');
    const slug = slugify(title);

    return {
      title,
      slug,
      frontmatter: data,
      content
    };
  });
}
