import React, { useEffect } from 'react'
import UseModal from 'modal-openc-library/dist/UseModal'
import Modal from 'modal-openc-library/dist/Modal'
import store from '../redux/store'
import { employeeCreatedAction } from '../redux/employeeCreated'
import 'modal-openc-library/dist/Modal.css'

/**
 * MODAL COMPONENT USING modal-openc-library
 * @returns {JSX}
 */
export default function DisplayModal() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = UseModal()

  useEffect(() => {
    toggleLoginForm()
  }, [])

  function manewFonction() {
    toggleLoginForm()
    store.dispatch(employeeCreatedAction(false))
  }
  return (
    <div className="App">
      <Modal isShowing={isLoginFormShowed} hide={manewFonction} title="Nouvel Employé">
        <p>Vous venez d'ajouter un nouvel employé.</p>
      </Modal>
    </div>
  )
}
