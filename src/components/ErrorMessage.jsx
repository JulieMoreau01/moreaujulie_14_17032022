import React from 'react'
import styles from '../styles/pages.module.css'

/**
 * ERROR MESSAGE COMPONENT
 * @returns {JSX}
 */
function ErrorMessage() {
  return (
    <div className={styles.container}>
      <p className={styles.error}>404 Error</p>
    </div>
  )
}

export default ErrorMessage
