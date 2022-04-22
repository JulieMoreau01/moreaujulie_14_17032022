import React, { useEffect } from 'react'
import UseModal from 'modal-openc-library/dist/UseModal'
import Modal from 'modal-openc-library/dist/Modal'
import store from '../redux/store'
import { employeeCreatedAction } from '../redux/employeeCreated'

/**
 * MODAL COMPONENT
 * @returns {JSX}
 */
export default function DisplayModal() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = UseModal()

  useEffect(() => {
    toggleLoginForm()
  }, []);

  function manewFonction() {
    toggleLoginForm();
    store.dispatch(employeeCreatedAction(false))
  }
  return (
    <>
      <div className="App">
        <Modal isShowing={isLoginFormShowed} hide={manewFonction} title="Nouvel Employé">
          <p>Vous venez d'ajouter un nouvel employé.</p>
        </Modal>
      </div>

      <style jsx="true">{`
        .App {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button.modal-toggle,
        input[type='submit'] {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:not(:first-child) {
          margin-left: 10px;
        }

        .form-group {
          margin-top: 10px;
        }

        input[type='text'],
        input[type='password'],
        input[type='email'] {
          box-sizing: border-box;
          width: 100%;
          padding: 0.5rem 0.7rem;
        }
      `}</style>
    </>
  )
}

