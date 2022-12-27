import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

// "Gym", "Run", "Read", "Meditate", "Music"

export const habitSLice = createSlice({
  name: 'habit',
  initialState,
  reducers: {

    appendData: (state, action) => {
        state.data = [...state.data,action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { appendData } = habitSLice.actions

export default habitSLice.reducer