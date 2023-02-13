import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <p className={styles.name_copy}>
        <pre>
          Versa <sup>&copy; </sup>2023
        </pre>
      </p>
    </footer>
  )
}

export default Footer
