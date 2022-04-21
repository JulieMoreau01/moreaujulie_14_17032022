import React from 'react'
import UseModal from 'modal-openc-library/dist/UseModal'
import Modal from 'modal-openc-library/dist/Modal'

export default function DisplayModal() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = UseModal()
  // const { isShowing: isRegistrationFormShowed, toggle: toggleRegistrationForm } = useModal()

  return (
    <>
      <div className="App">
        {/* <button className="modal-toggle" onClick={toggleLoginForm}>
          Login
        </button>
        <button className="modal-toggle" onClick={toggleRegistrationForm}>
          Register
        </button> */}

        <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm} title="Login EXEMPLE">
          <p>Je suis la modal</p>
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

