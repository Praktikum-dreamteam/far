import styles from './Body.module.scss';
import Radio from "../Radio";

export default function Body() {
    return (
        <section className={styles.body}>
            <div className={styles.body__container}>
                <div className={styles.body__title}>
                    <p>Фонд содействия защите здоровья и социальной справедливости имени Андрея Рылькова</p>
                </div>
                <div className={styles.body__img} ><div className={styles.body__bg}/></div>
            </div>
            <div className={styles.body__container}>
                <div className={styles.body__span}></div>
                <div className={styles.body__content}>
                    <h2>Наша миссия:</h2>
                    <h3> способствовать развитию наркополитики, основанной
                        на гуманности, терпимости, защите здоровья, достоинства и прав человека.</h3>
                    <p>
                        Работа ФАР строится на принципах горизонтального управления и развития проектов на основе инициатив людей, употребляющих наркотики, активистов и активисток, профессионалов и профессионалок в области общественного
                        здравоохранения и защиты прав
                        человека.
                    </p>
                    <a><img /></a>
                </div>
                <div>
                    <h2>Итоги нашей работы в 2020</h2>
                    <div>slider</div>
                    <div>
                        <img />
                        <div>
                            <h3>Получили помощь </h3>
                            <p>уличной социальной службы ФАР: чистые шприцы, презервативы, тесты на ВИЧ, поддержку и направления</p>
                        </div>
                    </div>
                    <button>Получить помощь</button>
                </div>

            </div>
        </section>
    )
}