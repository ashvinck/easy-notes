import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Note = {
  id: string;
  title: string;
  timeStamp: number;
  description: string;
};

export type NotesState = {
  notes: Note[];
  id: string;
  searchQuery: string;
};

// Initial State
const initialState = {
  notes: [],
  id: '',
  searchQuery: '',
} as NotesState;

// Notes Slice
export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // to add notes
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.unshift(action.payload);
    },
    // to get note id for selecting particular notes
    addNoteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    // to update notes
    updateNotes: (state, action: PayloadAction<Note>) => {
      const updatedNote = action.payload;
      const exisitingNoteIndex = state.notes.findIndex(
        (note) => note.id === updatedNote.id
      );
      if (exisitingNoteIndex !== -1) {
        state.notes[exisitingNoteIndex] = {
          ...state.notes[exisitingNoteIndex],
          ...updatedNote,
        };
      } else {
        state.notes.push(updatedNote);
      }
    },
    // To delete notes
    deleteNotes: (state, action: PayloadAction<string>) => {
      const deleteNoteId = action.payload;
      const noteIndex = state.notes.findIndex(
        (note) => note.id === deleteNoteId
      );
      if (noteIndex !== -1) {
        state.notes.splice(noteIndex, 1);
        if (state.id === deleteNoteId) {
          state.id = '';
        }
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addNote, addNoteId, updateNotes, deleteNotes, setSearchQuery } =
  notesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file.
export const selectViewNotes = (state: RootState) => state.notes.notes;
export const selectCurrentNoteId = (state: RootState) => state.notes.id;
export const selectCurrentNote = (state: RootState) => {
  const currentNoteId = state.notes.id;
  return state.notes.notes.find((note) => note.id === currentNoteId);
};
export const selectSearchedNotes = (state: RootState) => {
  const searchQuery = state.notes.searchQuery.toLowerCase();
  return searchQuery
    ? state.notes.notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery) ||
          note.description.toLowerCase().includes(searchQuery)
      )
    : state.notes.notes;
};

export default notesSlice.reducer;
