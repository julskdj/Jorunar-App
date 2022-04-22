const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",

  //  UI Reducer
  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',

  // Loading Reducer

  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',
  
  // Notes Reducer

  notesAddNew:  '[Notes] New Note',
  notesActive:  '[Notes] Set Active Note',
  notesLoad:    '[Notes] Load Notes',
  notesUpdated: '[Notes] Update Notes',
  notesFileUrl: '[Notes] Updated Image Url',
  notesDelete:  '[Notes] Notes Delete',
  notesLogoutCleaning: '[Notes] Logout Cleaning'

};

export default types;
