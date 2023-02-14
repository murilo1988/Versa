import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <pre>
        <p className={styles.name_copy}>
          Versa <sup>&copy; </sup>2023
        </p>
      </pre>
    </footer>
  )
}

export default Footer
