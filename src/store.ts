import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './features/counter/counterSlice';
import { loanReducer } from './features/loan/loanSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loan: loanReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch