import React from 'react'
import styles from './innercomponent.module.css'

function InnerComponent({ children }) {
    return (
        <div className={styles.innerComponent}>
            {children}
        </div>
    )
}

export default InnerComponent
