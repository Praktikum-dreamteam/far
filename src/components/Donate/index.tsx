import styles from './Donate.module.scss';
import Tab from "../Tab";
import Radio from "../Radio";

export default function Donate() {
  return (
    <section className={styles.donate + " section"}>
      <h2 className={styles.donate__title}>Поддер&shy;жать <span>ФАР</span></h2>
      <form>
        <div className={styles.donate__switch} />
        <div className={styles.donate__tabs}>
          <Tab label='ЮMoney' name='type' />
          <Tab label='ЮMoney' name='type' />
          <Tab label='ЮMoney' name='type' />
        </div>
        <div className={styles.donate__grid}>
          <div className={styles.donate__cell}>
            <Radio label='1000 Р' name='type' />
          </div>
          <div className={styles.donate__cell}>
            <Radio label='1000 Р' name='type' />
          </div>
          <div className={styles.donate__cell}>
            <Radio label='1000 Р' name='type' />
          </div>
          <div className={styles.donate__cell}>
            1000
          </div>
        </div>
      </form>
    </section>
  )
}
