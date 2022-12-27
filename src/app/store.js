import { configureStore } from '@reduxjs/toolkit'
import activityReducer from '../features/activity/activitySlice'
import habitReducer from '../features/habit/habitSlice'

export const store = configureStore({
  reducer: {
    activity: activityReducer,
    habit: habitReducer
  },
})