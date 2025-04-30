import { create } from 'zustand'

interface NoteStore {
  drafts: string[];
  changeDraft: (draft: string, draftIndex?: number) => void;
  clear: () => void;
}

export const useNote = create<NoteStore>((set, get) => ({
  drafts: [],
  changeDraft: (draft: string, draftIndex?: number) => {
    const drafts = get().drafts
    if(draftIndex && drafts[draftIndex] !== undefined) {
      drafts[draftIndex] = draft;
    } else {
      drafts.push(draft)
    }

    set({ drafts })
  },
  clear: () => {
    set({ drafts: [] })
  }
}))