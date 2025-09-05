import { getNoteBySlug } from '$lib/notas/loader.server';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const note = getNoteBySlug(params.slug);
  return note;
};
