import Swal from "sweetalert2/dist/sweetalert2.all";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import types from "../types/types";




export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      tittle: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore))
    Swal.fire('Saved', note.tittle, 'success')

  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id, 
      ...note
    }
  },
});

export const startUpLoading = (file) => {
  return async (dispatch, getState) => {
      const {active:activeNote} = getState().notes
      const fileUrl = await fileUpload(file)

      Swal.fire({
        title: 'Uploading...',
        text: 'Espere por favor',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      })

      console.log(fileUrl);
      console.log(activeNote);
      activeNote.url = fileUrl
      dispatch((activeNote))
  }
}