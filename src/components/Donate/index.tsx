import styles from './Donate.module.scss';
import Radio from "../Radio";

export default function Donate() {
  return (
    <section className={styles.donate + " section"}>
      <h2 className={styles.donate__title}>Поддер&shy;жать <span>ФАР</span></h2>
      <form>
        <Radio label='ЮMoney' name='type'/>
        <Radio label='ЮMoney' name='type'/>
        <Radio label='ЮMoney' name='type'/>
      </form>
    </section>
  )
}
