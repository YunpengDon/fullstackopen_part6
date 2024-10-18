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

export const {changeNotification, removeNotification} = notificationSlice.actions

export const showNotification = (text='', displayTime=5) => {
  return (dispatch) => {
    dispatch(changeNotification(text))
    setTimeout(() => {
      dispatch(removeNotification())
    }, displayTime * 1000)
  }
}
export default notificationSlice.reducer