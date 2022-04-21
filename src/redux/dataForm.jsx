import { createAction, createReducer } from '@reduxjs/toolkit'

// Le state initial
const initialState = {
  rows: []
}

// Action
export const dataFormAction = createAction('dataFormAction')

// Reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(dataFormAction, (state, action) => {
    return { state, rows: [...state.rows, action.payload] }
  })
})
