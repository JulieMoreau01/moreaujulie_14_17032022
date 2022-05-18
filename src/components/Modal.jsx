import React from 'react'
import Modal from 'modal-openc-library/dist/Modal'
import store from '../redux/store'
import { employeeCreatedAction } from '../redux/employeeCreated'
import 'modal-openc-library/dist/Modal.module.css'

/**
 * MODAL COMPONENT USING modal-openc-library
 * @returns {JSX}
 */
export default function DisplayModal() {
  function hideModal() {
    store.dispatch(employeeCreatedAction(false))
  }

  return (
    <Modal isShowing={true} hide={hideModal} title="Nouvel Employé" size="small">
      <p>Vous venez d'ajouter un nouvel employé.</p>
    </Modal>
  )
}
