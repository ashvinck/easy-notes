import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Note = {
  id: string;
  title: string;
  timeStamp: number;
  description: string;
}

export type NotesState = {
  notes: Note[];
  id: string;
}

// Initial State 
const initialState = {
  notes: [],
  id: '',
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
      state.id = action.payload
    },
    // to update notes
    updateNotes: (state, action: PayloadAction<Note>) => {
      const updatedNote = action.payload;
      const exisitingNoteIndex = state.notes.findIndex(note => note.id === updatedNote.id);
      if (exisitingNoteIndex !== -1) {
        state.notes[exisitingNoteIndex] = {...state.notes[exisitingNoteIndex],...updatedNote};
      }
      else {
        state.notes.push(updatedNote);
      }
    },
  },
});

export const {addNote,addNoteId,updateNotes } = notesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file.
export const selectViewNotes = (state: RootState) => state.notes.notes;
export const selectCurrentNoteId = (state: RootState) => state.notes.id;
export const selectCurrentNote = (state: RootState) => {
  const currentNoteId = state.notes.id;
  return state.notes.notes.find(note => note.id === currentNoteId);
};


export default notesSlice.reducer;
