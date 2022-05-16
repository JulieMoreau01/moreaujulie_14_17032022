import React from 'react'
import { useSelector } from 'react-redux'
import DisplayModal from '../components/Modal'

// Display or not the modal on index page.
export function DisplayEmployeeCreated() {
  const EmployeeCreatedSelector = useSelector((state) => state.employeeCreated)
  return <div>{EmployeeCreatedSelector.data === true ? <DisplayModal /> : ''}</div>
}

export const dataFormSelector = (state) => state.dataForm
