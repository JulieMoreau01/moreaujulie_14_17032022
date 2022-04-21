import { configureStore } from '@reduxjs/toolkit'
import employeeCreatedReducer from './employeeCreated'
import dataFormReducer from './dataForm'

const store = configureStore({
  reducer: {
    employeeCreated: employeeCreatedReducer,
    dataForm: dataFormReducer
  }
})

export default store
