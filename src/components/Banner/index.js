import styles from "./Banner.module.css";

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Guardando a Rede: Desvendando o Mundo da Cibersegurança 
                </h1>
                <p className={styles.paragrafo}>
                    Proteja-se contra as ameaças digitais! Explore o universo dos malwares, aprenda sobre os sofisticados ataques cibernéticos e descubra os meios eficazes de proteger seus dados. Junte-se a nós e fortaleça sua defesa digital!
                </p>
            </div>
        </div>
    )
}