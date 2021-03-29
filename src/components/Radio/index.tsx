import styles from './Radio.module.scss'

export default function Radio({label,name}) {
  return (
    <label className={styles.radio}>
      <input className={styles.radio__input} type="radio" name={name}/>
      <span className={styles.radio__text}>
        {label}
      </span>
    </label>
  )
}
