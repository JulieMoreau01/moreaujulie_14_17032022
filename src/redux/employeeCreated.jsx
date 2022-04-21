import { createAction, createReducer } from '@reduxjs/toolkit'

// Le state initial
const initialState = {
  data: false
}

// Action
export const employeeCreatedAction = createAction('employeeCreatedAction')

// Reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(employeeCreatedAction, (state, action) => {
    state.data = action.payload
  })
})
