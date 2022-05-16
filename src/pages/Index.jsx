import React, { useState, useEffect } from 'react'
import states from '../utils/states'
import departments from '../utils/departments'
import store from '../redux/store'
import { DisplayEmployeeCreated } from '../redux/selector'
import { employeeCreatedAction } from '../redux/employeeCreated'
import { dataFormAction } from '../redux/dataForm'
import styles from '../styles/pages.module.css'

/**
 * INDEX PAGE
 * @returns {JSX}
 */

function Index() {
  useEffect(() => {
    // Fill the states select
    const stateSelect = document.getElementById('state')
    states.forEach((state) => {
      const option = document.createElement('option')
      option.value = state.abbreviation
      option.text = state.name
      stateSelect.appendChild(option)
    })
    // Fill the department select
    const departmentSelect = document.getElementById('department')
    departments.forEach((department) => {
      const option = document.createElement('option')
      option.value = department.name
      option.text = department.name
      departmentSelect.appendChild(option)
    })
  }, [])

  // initial state
  const [signInData, setSignInData] = useState({
    firstName: '',
    lastName: '',
    birth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    department: ''
  })

  // Get the information from form
  const inputForm = (e) => {
    e.persist()
    const { name, value } = e.target
    setSignInData((state) => ({
      ...state,
      [name]: value
    }))
  }

  // Send The information to redux
  const submitForm = (e) => {
    e.preventDefault()
    store.dispatch(
      dataFormAction({
        firstName: signInData.firstName,
        lastName: signInData.lastName,
        birth: signInData.birth,
        startDate: signInData.startDate,
        street: signInData.street,
        city: signInData.city,
        state: signInData.state,
        zip: signInData.zip,
        department: signInData.department
      })
    )
    store.dispatch(employeeCreatedAction(true))
  }

  return (
    <div className={styles.container}>
      <h2>Create Employee</h2>
      <form action="#" id="create-employee" onSubmit={submitForm}>
        <label htmlFor="first-name">
          <span>First Name</span>
          <input type="text" id="first-name" name="firstName" onChange={inputForm} value={signInData.firstName} required />
        </label>

        <label htmlFor="last-name">
          <span>Last Name</span>
          <input type="text" id="last-name" name="lastName" onChange={inputForm} value={signInData.lastName} required />
        </label>

        <label htmlFor="date-of-birth">
          <span>Date of Birth</span>
          <input type="date" id="date-of-birth" name="birth" onChange={inputForm} value={signInData.birth} required />
        </label>

        <label htmlFor="start-date">
          <span>Start Date</span>
          <input type="date" id="start-date" name="startDate" onChange={inputForm} value={signInData.startDate} required />
        </label>

        <fieldset className={styles.address}>
          <legend>Address</legend>

          <label htmlFor="street">
            <span>Street</span>
            <input id="street" type="text" name="street" onChange={inputForm} value={signInData.street} required />
          </label>

          <label htmlFor="city">
            <span>City</span>
            <input id="city" type="text" name="city" onChange={inputForm} value={signInData.city} required />
          </label>

          <label htmlFor="state">
            <span>State</span>
            <select name="state" id="state" onChange={inputForm} value={signInData.state} required>
              <option>Choose a State</option>
            </select>
          </label>

          <label htmlFor="zip-code">
            <span>Zip Code</span>
            <input id="zip-code" type="number" name="zip" onChange={inputForm} value={signInData.zip} required />
          </label>
        </fieldset>

        <label htmlFor="department">
          <span>Department</span>
          <select name="department" id="department" onChange={inputForm} value={signInData.department} required>
            <option>Choose a department</option>
          </select>
        </label>
        <button type="submit" className={styles.buttonIndex}>
          Save
        </button>
      </form>
      <DisplayEmployeeCreated />
    </div>
  )
}

export default Index
