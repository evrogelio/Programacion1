import { getAllNotes } from '$lib/notas/loader.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
  const notes = getAllNotes();

  // Only return minimal info to the client — you can expand as needed
  const noteLinks = notes.map(note => ({
    title: note.title,
    slug: note.slug
  }));

  return {
    notes: noteLinks
  };
};
