import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesPath = path.resolve('src/lib/notas');

function slugify(title) {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
}

export function getAllSlugs() {
  return fs.readdirSync(notesPath)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(notesPath, filename), 'utf-8');
      const { data } = matter(raw);
      const title = data.title || filename.replace(/\.md$/, '');
      return `/notas/${slugify(title)}`;
    });
}
