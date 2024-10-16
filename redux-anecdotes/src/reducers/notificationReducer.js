import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    changeNotification(state, action){
      return action.payload
    },
    removeNotification(state, action){
      return ''
    }
  }
})

export const {changeNotification} = notificationSlice.actions
export default notificationSlice.reducer