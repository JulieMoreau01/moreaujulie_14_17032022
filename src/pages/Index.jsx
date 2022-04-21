import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker/dist/es'
import fr from 'date-fns/locale/fr'
import states from '../utils/states'
import store from '../redux/store'
import { DisplayEmployeeCreated } from '../redux/selector'
import { employeeCreatedAction } from '../redux/employeeCreated'
import { dataFormAction } from '../redux/dataForm'

import styles from '../styles/index.module.css'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('fr', fr)

/**
 * INDEX PAGE
 * @returns {JSX}
 */

function Index() {
  useEffect(() => {
    const stateSelect = document.getElementById('state')
    states.forEach((state) => {
      const option = document.createElement('option')
      option.value = state.abbreviation
      option.text = state.name
      stateSelect.appendChild(option)
    })
  })

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

  // Get the infirmation from form
  const inputForm = (e) => {
    console.log(e)
    e.persist()
    const { name, value } = e.target
    console.log(name)
    console.log(value)
    setSignInData((state) => ({
      ...state,
      [name]: value
    }))
  }

  // Get the infirmation from form
  const inputFormBirth = (e) => {
    console.log(e)
    setSignInData((state) => ({
      ...state,
      birth: e
    }))
  }

  // Get the infirmation from form
  const inputFormStart = (e) => {
    setSignInData((previousState) => {
      return { ...previousState, startDate: e }
    })
  }

  // Send The information
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
          <input type="text" id="last-name" name="lastName" onChange={inputForm} value={signInData.lastName} />
        </label>

        <label htmlFor="date-of-birth">
          <span>Date of Birth</span>
          <DatePicker onChange={inputFormBirth} locale={fr} autoComplete="off" value={signInData.birth} selected={signInData.birth} name="birth" id="date-of-birth" />
          {/* <input id="date-of-birth" type="date" name="birth" onChange={inputForm} value={signInData.birth} /> */}
        </label>

        <label htmlFor="start-date">
          <span>Start Date</span>
          <DatePicker onChange={inputFormStart} autoComplete="off" value={signInData.startDate} selected={signInData.startDate} name="startDate" id="start-date" />
          {/* <input id="start-date" type="date" name="startDate" onChange={inputForm} value={signInData.startDate} /> */}
        </label>

        <fieldset className={styles.address}>
          <legend>Address</legend>

          <label htmlFor="street">
            <span>Street</span>
            <input id="street" type="text" name="street" onChange={inputForm} value={signInData.street} />
          </label>

          <label htmlFor="city">
            <span>City</span>
            <input id="city" type="text" name="city" onChange={inputForm} value={signInData.city} />
          </label>

          <label htmlFor="state">
            <span>Etat</span>
            <select name="state" id="state" onChange={inputForm} value={signInData.state}>
              Je suis un select
            </select>
          </label>

          <label htmlFor="zip-code">
            <span>Zip Code</span>
            <input id="zip-code" type="number" name="zip" onChange={inputForm} value={signInData.zip} />
          </label>
        </fieldset>

        <label htmlFor="department">
          <span>Department</span>
          <select name="department" id="department" onChange={inputForm} value={signInData.department}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
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
