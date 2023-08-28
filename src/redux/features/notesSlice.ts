import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type NotesState = {
  showEditor: boolean;
  showAllNotes: boolean;
}

// Initial State 
const initialState = {
  showEditor: false,
  showAllNotes: false,
} as NotesState;

// Notes Slice
export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
     // Use the PayloadAction type to declare the contents of `action.payload`
    setShowEditor: (state, action: PayloadAction<boolean>) => {
      state.showEditor = action.payload;
    },
  },
});

export const { setShowEditor } = notesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file.
export const selectShowEditor = (state: RootState) => state.notes.showEditor

export default notesSlice.reducer;
