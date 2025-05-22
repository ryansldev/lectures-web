import { create } from 'zustand'

import { JSONContent } from '@tiptap/react';

interface NoteStore {
  drafts: JSONContent[];
  changeDraft: (draft: JSONContent, draftIndex?: number) => void;
  clear: () => void;
}

export const useNote = create<NoteStore>((set, get) => ({
  drafts: JSON.parse(localStorage.getItem("drafts") as string) || [],
  changeDraft: (draft: JSONContent, draftIndex?: number) => {
    const drafts = get().drafts
    if(Object.values(drafts[draftIndex || 0] ?? {}).length > 0) {
      drafts[draftIndex ?? 0] = draft;
    } else {
      drafts.push(draft)
    }

    localStorage.setItem("drafts", JSON.stringify(drafts))
    set({ drafts })
  },
  clear: () => {
    set({ drafts: [] })
  }
}))