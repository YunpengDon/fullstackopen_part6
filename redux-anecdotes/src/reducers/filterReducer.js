import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterReducer(state, action) {
      return action.payload
    }
  }
}
)

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case 'CHANGE_FILTER':
//       return action.payload
//     default:
//       return state
//   } 
// }

export const {filterReducer} = filterSlice.actions
export default filterSlice.reducer