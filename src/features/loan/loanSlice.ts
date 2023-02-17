import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Money = number;

export interface LoanState {
  firstName: string;
  lastName: string;
  monthlySalary: Money;
  step: 1 | 2 | 3;
}

const initialState: LoanState = {
  firstName: '',
  lastName: '',
  monthlySalary: 0,
  step: 1
}

export const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    provideName: (state, action: PayloadAction<{
      firstName: string;
      lastName: string;
    }>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.step = 2;
    },
    provideSalary: (state, action: PayloadAction<{
      salary: Money
    }>) => {
      state.monthlySalary = action.payload.salary;
      state.step = 3;
    },
    reset: (state) => {
      state = initialState;
    }
  },
})

// Action creators are generated for each case reducer function
export const { provideName, provideSalary, reset } = loanSlice.actions;

export const loanReducer = loanSlice.reducer;

// export default counterSlice.reducer;
