import styles from './Tab.module.scss'

export default function Tab({label,name}) {
  return (
    <label className={styles.radio}>
      <input className={styles.radio__input} type="radio" name={name}/>
      <span className={styles.radio__text}>
        {label}
      </span>
    </label>
  )
}
